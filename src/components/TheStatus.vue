<template>
  <section>
    <div class='status-list'>
      <ul>
        <li>{{levelList[statusLevel].job}}</li>
        <li>レベル：{{statusLevel}}</li>
        <li>ＨＰ：{{levelList[statusLevel].hp}}</li>
        <li>ＭＰ：{{levelList[statusLevel].mp}}</li>
        <li>ＥＸ：{{stateEx}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return{
      levelList: [
        {
          job: 'begginer',
          hp: 1,
          mp: 1,
          ex: 1
        },
        {
          job: 'friend',
          hp: 100,
          mp: 100,
          ex: 2
        }
      ]
    }
  },
  computed: {
    stateEx: function(){
      return this.$store.state.ex
    },
    statusLevel: function(){
      let tmpLevel = 0
      for (let i = 0; this.levelList.length > i; i++){
        if (this.stateEx > this.levelList[i].ex){
          tmpLevel = i
        }
      }
      return tmpLevel
    }
  }
}
</script>

<style>

.status-list{
  text-align: center;
  width: 130px;
  height: 120px;
  padding:10px;
  margin-bottom:10px;
  border: 2px solid #fff;
  border-radius: 10px;
}
</style>
