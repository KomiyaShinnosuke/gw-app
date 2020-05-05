<template>
  <button
    :class='classes'
    :disabled='disabled'
    type='button'
    @click='handleClick'
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BasicButton',

  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes () {
      const cls = this.type === 'text' ? ('-' + this.type) : ''
      return [`button${cls}`]
    }
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  width: 120px;
  height: 30px;
  display: inline-block;
  color: white;
  background-color: rgb(241, 72, 72);
}
</style>
