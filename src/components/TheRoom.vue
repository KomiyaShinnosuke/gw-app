<template>
  <section>
    <div class='map'>
      <div v-for='i in 8' class='container' :key=i>
        <div v-for='j in 9' class='container' :key=j>
          <div :class=" {'object-human': xy[i][j]==1, 'visitor': xy[i][j]==0 }" @click='visitorMove(i,j)'>
            <img class='visitor' v-if='xy[i][j]==0'  src="../assets/brave.png" />
            <img class='object-treasure' v-if='xy[i][j]==4'  src="../assets/object-treasure-1.png" />
            <img class='object-treasure' v-if='xy[i][j]==5'  src="../assets/object-treasure-2.png" />
            <img class='object-human' v-if='xy[i][j]==1'  src="../assets/tono.png" />
            <div class='object-wall' v-if='xy[i][j]==9'/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function(){
    return {
      wb: 0,
      xx: 8,
      yy: 5,
      xy: [
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 9, 9, 9, 9, 9, 9, 9, 9, 9, 3],
        [3, 9, 4, 9, 2, 1, 2, 9, 5, 9, 3],
        [3, 9, 2, 2, 2, 2, 2, 2, 2, 9, 3],
        [3, 9, 2, 2, 2, 2, 2, 2, 2, 9, 3],
        [3, 9, 2, 2, 2, 2, 2, 2, 2, 9, 3],
        [3, 9, 2, 2, 2, 2, 2, 2, 2, 9, 3],
        [3, 9, 2, 2, 2, 2, 2, 2, 2, 9, 3],
        [3, 9, 2, 2, 2, 0, 2, 2, 2, 9, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      ]
    }
  },
  methods: {
    visitorMove: function(x, y){
      if(this.xy[x][y] != 2) return
      this.xy[x][y] = this.wb
      this.xy[this.xx][this.yy] = 2
      this.xx = x
      this.yy = y
      this.xy.push()

      this.setPositionState()
    },
    setPositionState: function(){
      const lx = this.xy[this.xx - 1][this.yy]
      const rx = this.xy[this.xx + 1][this.yy]
      const fy = this.xy[this.xx][this.yy - 1]
      const by = this.xy[this.xx][this.yy + 1]

      this.$store.commit('setlx', lx)
      this.$store.commit('setrx', rx)
      this.$store.commit('setfy', fy)
      this.$store.commit('setby', by)
    }
  }
}
</script>

<style>
p {
  text-align: center;
}

div {
  min-width: 40px;
  min-height: 40px;
}

.map {
  background-image: url("../assets/tile-1.png");
}
.container {
  display: flex;
  justify-content: center;
}

.waku {
  width: 40px;
  height: 40px;
}

.object-treasure {
  padding-top: 2px;
  padding-left: 2px;
  width: 90%;
  height: 90%;
}

.object-tile {
  width: 100%;
  height: 100%;
}

.object-wall {
  background-image: url("../assets/wall.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}


.object-human {
  padding-top: 2px;
  padding-left: 2px;
  width: 90%;
  height: 90%;
}

.visitor {
  width: 100%;
  height: 100%;
  object-position: 100% 100%;
  object-fit: cover;
}

.pages-top{
  width: 50vw;
  height: 300px;
  padding:10px;
  margin-bottom:10px;
  border: 2px solid #fff;
  border-radius: 10px;
}
</style>
