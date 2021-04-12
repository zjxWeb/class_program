<template>
  <div id="job" >
    <div class="top">
      <p class="topFont">
        就&nbsp;&nbsp;业&nbsp;&nbsp;可&nbsp;&nbsp;视&nbsp;&nbsp;平&nbsp;&nbsp;台
      </p>
    </div>
    <div class="homeBack" @click="homeBack">
      <img src="@/assets/img/home/back.png" alt="" width="50px"/>
    </div>
    <Chart/>
  </div>
</template>
<script>
import Chart from './chart'
export default {
    components:{
        Chart,
    },
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
      homeBack(){
        this.$router.push('/home')
      }
    },
};
</script>
<style lang="scss" scoped>
#job{
    width: 100vw;
    height: 100vh;
    background: url(~@/assets/img/home/bg1.jpg) no-repeat center;
    background-size: cover;
}
.homeBack{
  position: absolute;
    top: 0vh;
    left: 0vw;
    cursor: pointer;
}
.top {
  /* border: 1px solid red; */
  width: 100vw;
  height: 8vh;
  text-align: center;
//   background-image: url(~@/assets/img/home/title.png);
//   background-repeat: no-repeat;
//   background-color: 100vw auto;
  position: relative;
  top: -0.6vh;
}
.topFont {
  font-size: 30px;
  color: #d8daff;
  font-weight: 800;
  padding-top: 2.3vh;
  padding-left: 1vw;
}
</style>