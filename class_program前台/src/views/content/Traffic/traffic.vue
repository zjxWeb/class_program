<template>
  <div class="traffic">
    <div class="top">
      <p class="topFont">
        交&nbsp;&nbsp;通&nbsp;&nbsp;可&nbsp;&nbsp;视&nbsp;&nbsp;平&nbsp;&nbsp;台
      </p>
    </div>
    <img
      class="back"
      @click="loginOut()"
      src="@/assets/img/home/back.png"
      alt=""
    />
  </div>
</template>
<script>
export default {
  methods: {
    loginOut(){
      this.$router.push('/home')
    }
  },
};
</script>
<style lang="scss" scoped>
.traffic{
  width: 100vw;
  height: 100vh;
  background: url(~@/assets/img/home/bg.png) no-repeat center;
  background-size: cover;
}
.back {
  position: fixed;
  left: calc(100vw - 5vw);
  top: calc(100vh - 99vh);
  width: 3vw;
  cursor: pointer;
  z-index: 100;
}
.top {
  /* border: 1px solid red; */
  width: 100vw;
  height: 8vh;
  text-align: center;
  background-image: url(~@/assets/img/home/title.png);
  background-repeat: no-repeat;
  background-size: 100vw auto;
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