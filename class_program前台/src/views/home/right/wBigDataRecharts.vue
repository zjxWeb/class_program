<template>
  <div>
    <div class="publicityDataAnalysis">
      <span class="wBdtopTitle">截至2020年3月1日:</span>
      <div class="wbdBoxTop">
        <div class="wbdBoxTopBg" v-for="(item, index) in wbdBoxTopBg">
          <h3 class="wBdFontOne">{{ item.title }}</h3>
          <span class="wBdFontTwo">{{ item.num }}</span>
          <span class="wBdFontTree">{{ item.icon }}</span>
        </div>
      </div>
      <div class="wbdBoxMid">
        <span class="wbdBoxMidL">
          <div class="wbdBoxMidL_title">
            <span>供水，供电数据展示</span>
          </div>
          <div class="wbdBoxMidL_charts">
            <ChartL />
          </div>
        </span>
        <span class="wbdBoxMidR">
          <div class="wbdBoxMidR_title">
            <span>供气，供热走势</span>
          </div>
          <div class="wbdBoxMidR_charts">
            <ChartR />
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ChartL from "../right/wbdBoxMidL_charts";
import ChartR from "../right/wbdBoxMidR_charts";
export default {
  components: {
    ChartL,
    ChartR,
  },
  data() {
    return {
      wbdBoxTopBg: [
        { title: "供气总量", num: 91, icon: "方" },
        { title: "平均供气量", num: 251, icon: "方" },
        { title: "供热总量", num: 81, icon: "℃" },
        { title: "平均供热量", num: 53, icon: "℃" },
      ],
    };
  },
};
</script>

<style scoped>
.publicityDataAnalysis {
  width: 28vw;
  height: 32.5vh;
}
.wBdtopTitle {
  font-size: 14px;
  color: #ffffff;
  margin-left: 0.5vw;
}
.wbdBoxTop {
  width: 28vw;
  height: 7vh;
}
.wbdBoxTopBg {
  width: 6vw;
  height: 7vh;
  text-align: center;
  margin-left: 0.75vw;
  position: relative;
  float: left;
  background-image: url(~@/assets/img/home/kuang.png);
  background-size: 6vw auto;
  background-repeat: no-repeat;
  background-origin: center;
}
.wBdFontOne {
  width: 6vw;
  position: relative;
  top: 1vh;
  color: #ffffff;
  font-size: 14px;
}
.wBdFontTwo {
  position: relative;
  top: 1.5vh;
  font-size: 20px;
  color: #01d4f9;
  font-weight: 600;
  font-family: led;
}
.wBdFontTree {
  position: relative;
  top: 1.5vh;
  color: #ffffff;
  font-size: 16px;
}
.wbdBoxMid {
  width: 28vw;
  height: 23.8vh;
}
.wbdBoxMidL {
  display: inline-block;
  width: 12vw;
  height: 23.8vh;
  position: relative;
}
.wbdBoxMidR {
  display: inline-block;
  width: 14vw;
  height: 23.8vh;
  position: absolute;
  margin-left: 1.5vw;
}
.wbdBoxMidL_title {
  width: 8vw !important;
  height: 2.8vh;
  background-color: #022173;
  /* background-image: url(~@/assets/img/home/topLone.png); */
  color: #d8daff;
  /* background-size: 5.8vw auto;
    background-repeat: no-repeat; */
  margin-left: 3vw;
  margin-top: 0.5vh;
  text-align: center;
  line-height: 3vh;
  font-size: 16px;
}
.wbdBoxMidL_charts {
  width: 14vw;
  height: 20vh;
}
.wbdBoxMidR_title {
  width: 6.4vw;
  height: 2.8vh;
  background-color: #022173;
  color: #d8daff;
  /* background-image: url(~@/assets/img/home/topLtwo.png); */
  background-size: 6.4vw auto;
  background-repeat: no-repeat;
  margin-left: 4vw;
  margin-top: 0.5vh;
  text-align: center;
  line-height: 3vh;
  font-size: 16px;
}
.wbdBoxMidR_charts {
  width: 14vw;
  height: 20vh;
}
</style>