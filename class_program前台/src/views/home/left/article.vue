<template>
  <div>
    <div class="publicityDataAnalysis">
      <span class="wBdtopTitle">截至2020年3月1日:</span>
      <div class="wbdBoxTop">
        <div class="wbdBoxTopBg" v-for="(item, index) in wbdBoxTopBg">
          <h3 class="wBdFontOne">{{ item.title }}</h3>
          <span class="wBdFontTwo">{{ item.num }}</span>
          <span class="wBdFontTree">{{ item.type }}</span>
        </div>
      </div>
      <div class="wbdBoxMid">
        <div class="wbdBoxMidL">
          <div class="wbdBoxMidL_title">
            <span>供水数据展示</span>
          </div>
          <div class="wbdBoxMidL_charts">
            <BarLeft />
          </div>
        </div>
        <div class="wbdBoxMidR">
          <div class="wbdBoxMidR_title">
            <span>供电数据展示</span>
          </div>
          <div class="wbdBoxMidR_charts">
            <barRight />
          </div>
        </div>
      </div>
      <div class="ecLine">
        <div class="ecLineL">
          <div class="ecLineL_title">
            <span>供水,供电排列</span>
          </div>
          <div class="ecLineL_charts">
            <Issues />
          </div>
        </div>
        <div class="ecLineR">
          <div class="ecLineR_title">
            <span>供水,供电走势</span>
          </div>
          <div class="ecLineR_charts">
            <Fans />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fans from "./fans";
import Issues from "./issues";
import BarLeft from "./barleft";
import barRight from "./barright";
export default {
  components: {
    Fans,
    Issues,
    BarLeft,
    barRight,
  },
  data() {
    return {
      wbdBoxTopBg: [
        { title: "供水总量", num: 9, type: "方" },
        { title: "平均供水量", num: 272793, type: "方" },
        { title: "供电总量", num: 3138622, type: "度" },
        { title: "平均供电量", num: 3130105, type: "度" },
      ],
    };
  },
};
</script>

<style scoped>
.publicityDataAnalysis {
  width: 28vw;
  height: 32.5vh;
  /* background: #000E63; */
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
  background-repeat: no-repeat;
  background-size: 6vw;
}
.wBdFontOne {
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
  height: 19vh;
  /* background-color: red; */
}
.wbdBoxMidL {
  display: inline-block;
  width: 13vw;
  height: 17vh;
  margin-left: 1vw;
  /* background-color: #01D4F9; */
  position: relative;
}
.wbdBoxMidR {
  display: inline-block;
  width: 13vw;
  height: 17vh;
  margin-left: 0.1vw;
  /* background-color: #01D4F9; */
}
.wbdBoxMidL_title {
  width: 5vw;
  height: 2.8vh;
  background-color: #022173;
  color: #d8daff;
  /* background-image: url(~@/assets/img/home/titleL.png); */
  background-size: 5vw;
  background-repeat: no-repeat;
  margin-left: 4vw;
  margin-top: 0.5vh;
  text-align: center;
  line-height: 3vh;
  font-size: 16px;
}
.wbdBoxMidL_charts {
  width: 13vw;
  height: 15vh;
  /* background-color: azure; */
}
.wbdBoxMidR_title {
  width: 5vw;
  height: 2.8vh;
  background-color: #022173;
  color: #d8daff;
  /* background-image: url(~@/assets/img/home/titleLTwo.png); */
  background-size: 5vw;
  background-repeat: no-repeat;
  margin-left: 4.6vw;
  margin-top: 0.5vh;
  text-align: center;
  line-height: 3vh;
  font-size: 16px;
}
.wbdBoxMidR_charts {
  width: 13vw;
  height: 15vh;
  /* background-color: azure; */
}
.ecLine {
  height: 21.5vh;
  width: 28vw;
  /* background-color: #000E63; */
}
.ecLineL {
  display: inline-block;
  width: 13vw;
  height: 17vh;
  margin-left: 1vw;
  /* background-color: #01D4F9; */
  position: relative;
}
.ecLineR {
  display: inline-block;
  width: 13vw;
  height: 17vh;
  margin-left: 0.1vw;
  /* background-color: #01D4F9; */
}
.ecLineL_title {
  width: 8.2vw;
  height: 2.8vh;
  background-color: #022173;
  color: #d8daff;
  /* background-image: url(~@/assets/img/home/titleLone.png); */
  background-size: 8.2vw;
  background-repeat: no-repeat;
  margin-left: 2.3vw;
  margin-top: 0.5vh;
  text-align: center;
  line-height: 3vh;
  font-size: 16px;
}
.ecLineL_charts {
  width: 13vw;
  height: 17.5vh;
  /* background-color: azure; */
}
.ecLineR_title {
  width: 8.2vw;
  height: 2.6vh;
  background-color: #022173;
  color: #d8daff;
  /* background-image: url(~@/assets/img/home/titlelfour.png); */
  background-size: 8.2vw;
  background-repeat: no-repeat;
  margin-left: 3vw;
  margin-top: 0.5vh;
  text-align: center;
  line-height: 3vh;
  font-size: 16px;
}
.ecLineR_charts {
  width: 13vw;
  height: 17.5vh;
  /* background-color: azure; */
}
</style>