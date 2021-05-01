<template>
  <div class="propaganda">
    <div class="top">
      <p class="topFont">
        智&nbsp;&nbsp;慧&nbsp;&nbsp;市&nbsp;&nbsp;政&nbsp;&nbsp;平&nbsp;&nbsp;台
      </p>
    </div>
    <div v-if="jurisdiction == '管理员'">
      <el-button
        class="mesg"
        type="primary"
        @click="$router.push('/message'), $router.go(0)"
        >消息管理</el-button
      >
      <el-button
        class="mesg1"
        type="primary"
        @click="$router.push('/jurisdiction'), $router.go(0)"
        >权限管理</el-button
      >
    </div>
    <img
      class="back"
      @click="loginOut()"
      src="@/assets/img/home/back.png"
      alt=""
    />
    <Stare />
    <div class="left">
      <div class="gaojian">
        <span>供水&nbsp;&nbsp;|&nbsp;&nbsp;供电</span>
        <img src="@/assets/img/home/left_one.png" alt="" />
        <Article />
        <img src="@/assets/img/home/kuang_bottom.png" alt="" />
      </div>
      <div class="rongmei">
        <span>市政要闻消息</span>
        <img src="@/assets/img/home/left_one.png" alt="" />
        <div class="l_left">
          <TipPublicity
            v-bind:isDelde="isDelde"
            @message="getMessage"
          ></TipPublicity>
        </div>
        <div class="l_right"></div>
        <img src="@/assets/img/home/kuang_bottom.png" alt="" />
      </div>
      <div class="hotpoint">
        <span>社区活动消息</span>
        <img src="@/assets/img/home/left_one.png" alt="" />
        <div class="hot_point">
          <HotPoint v-bind:isDeldec="isDeldec" @message="getMessage" />
        </div>
        <img src="@/assets/img/home/kuang_bottom.png" alt="" />
      </div>
    </div>
    <el-dialog
      :title="msgFormSon.name"
      v-if="msgFormSon"
      :visible.sync="msgFormSon.ishowmessage"
      width="30%"
      center
    >
      <span>{{ msgFormSon.index }}. &nbsp;&nbsp;{{ msgFormSon.title }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="msgFormSon.ishowmessage = false">取 消</el-button>
        <el-button
          type="primary"
          @click="(msgFormSon.ishowmessage = false), isDeldemeg()"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <div class="centre">
      <span class="clock" id="clock">
        <!-- {{date.year+'-'+ date.month+'-'+ date.day+ '&nbsp;&nbsp;&nbsp;'+ date.hour+':'+ date.min+':'+ date.sec}} -->
      </span>
      <div class="mapRotate">
        <div class="dotCircle" id="dotCircle">
          <span
            v-for="(item, inx) in banner"
            :key="inx"
            class="itemicon"
            :class="'itemDot' + (inx + 1)"
            :data-tab="inx + 1"
            @mouseenter="stopanimate()"
            @mouseout="startanimate()"
          >
            <div @click="homeRouter(item.url)">
              <div style="cursor: pointer" class="mainFont">
                <p @mouseenter="stopanimate()" @mouseout="startanimate()">
                  {{ item.name }}
                </p>
                <img
                  :src="item.imgurl"
                  alt=""
                  class="centre_img"
                  @mouseenter="stopanimate()"
                  @mouseout="startanimate()"
                />
              </div>
            </div>
          </span>
          <span class="cri">
            <img src="@/assets/img/home/middleMap.png" alt="" />
          </span>
        </div>
      </div>
      <div class="weather" v-if="flag">
        <ul>
          <li>
            <span class="home_date">
              {{ date.year + "年" + date.month + "月"
              }}{{ getWeatherData.yesterday.date }}
            </span>
            <h3>{{ getWeatherData.yesterday.high }}</h3>
            <h3>{{ getWeatherData.yesterday.low }}</h3>
            <h3>{{ getWeatherData.yesterday.type }}</h3>
          </li>
        </ul>
        <ul>
          <li v-for="(item, index) in getWeatherData.forecast" :key="index">
            <span class="home_date">
              {{ date.year + "年" + date.month + "月" }}{{ item.date }}
            </span>
            <h3>{{ item.high }}</h3>
            <h3>{{ item.low }}</h3>
            <h3>{{ item.type }}</h3>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="dataAnalysts">
        <span>供气&nbsp;&nbsp;|&nbsp;&nbsp;供热</span>
        <img src="@/assets/img/home/left_one.png" alt="" />
        <!-- copy -->
        <Publicitydata />
        <img src="@/assets/img/home/kuang_bottom.png" alt="" />
      </div>
      <div class="tipPublicity">
        <span>市民反馈消息</span>
        <img src="@/assets/img/home/left_one.png" alt="" />
        <TipPublicity1 v-bind:isDeldeF="isDeldeF" @message="getMessage" />
        <img src="@/assets/img/home/kuang_bottom.png" alt="" />
      </div>
      <div class="equipmentAnalysis">
        <span>智慧市政监管</span>
        <img src="@/assets/img/home/left_one.png" alt="" />
        <EquipmentAnalysis />
        <img src="@/assets/img/home/kuang_bottom.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import HotPoint from "./left/hotpoint";
import TipPublicity from "./left/tipPublicity";
import Article from "./left/article";
import Publicitydata from "./right/wBigDataRecharts";
import TipPublicity1 from "./right/tipPublicity1";
import EquipmentAnalysis from "./right/equipmentAnalysis";
import Stare from "../../components/stare.vue";
import { showDateClick } from "../../../static/data";
export default {
  components: {
    HotPoint,
    TipPublicity,
    Article,
    TipPublicity1,
    Publicitydata,
    EquipmentAnalysis,
    Stare,
  },
  data() {
    return {
      jurisdiction: null,
      isDelde: false,
      isDeldec: false,
      isDeldeF: false,
      flag: false,
      msgFormSon: null,
      banner: [
        {
          imgurl: require("@/assets/img/home/visualPublicity.png"),
          name: "交通情况",
          id: 4,
          url: "/Traffic",
        },
        {
          imgurl: require("@/assets/img/home/sunOublicity.png"),
          name: "排水",
          id: 3,
          url: "/outWater",
        },
        {
          imgurl: require("@/assets/img/home/mScreenMsend.png"),
          name: "就业情况",
          id: 2,
          url: "/Job",
        },

        {
          imgurl: require("@/assets/img/home/commmandDispath.png"),
          name: "路灯",
          id: 2,
          url: "/Light",
        },
      ],
      timer: null,
      animateAngle: -14,
      aniOption: {},
      city: "兰州",
      getWeatherData: {},
      date: {},
    };
  },
  mounted() {
    this.geteditSphoneJurisdiction();
    window.onresize = function () {
      location.reload();
    };
    this.aniOption = {
      xr: document.body.clientWidth / 6, //x半径
      yr: document.body.clientHeight / 3.5, //y半径
      centerx: document.body.clientWidth / 2 - 100, //圆心X
      centery: document.body.clientHeight / 2 - 100, //圆心Y
    };
    this.aniOption.oimages = document.getElementsByClassName("itemicon"); //元素
    this.aniOption.cnt = this.aniOption.oimages.length; //元素数
    this.aniOption.da = 360 / this.aniOption.cnt; //元素间隔角度
    for (let i = 0; i < this.aniOption.cnt; i++) {
      this.aniOption.oimages[i].style.left =
        this.aniOption.centerx +
        this.aniOption.xr *
          Math.cos(
            ((this.aniOption.da * i + this.animateAngle) / 180) * Math.PI
          ) +
        "px";
      this.aniOption.oimages[i].style.top =
        this.aniOption.centery +
        this.aniOption.yr *
          Math.sin(
            ((this.aniOption.da * i + this.animateAngle) / 180) * Math.PI
          ) +
        "px";
    }
    setTimeout(() => {
      this.startanimate();
    }, 3000);
    this.getWeather();
    this.getWeatherData = JSON.parse(window.localStorage.getItem("weath"));
    if (window.name != "bencalie") {
      this.$router.go(0);
      window.name = "bencalie";
    } else {
      window.name = "";
    }
  },
  methods: {
    isDeldemeg() {
      switch (this.msgFormSon.name) {
        case "市政要闻消息通知":
          this.isDelde = !this.isDelde;
          break;
        case "社区活动消息通知":
          this.isDeldec = !this.isDeldec;
          break;
        case "市民反馈消息通知":
          this.isDeldeF = !this.isDeldeF;
          break;
        default:
          break;
      }
      // console.log(this.msgFormSon.name);
    },
    getMessage(data) {
      this.msgFormSon = data;
      // console.log(this.msgFormSon);
    },
    // 消息按钮的权限控制
    geteditSphoneJurisdiction() {
      let params = {
        Sphone: window.sessionStorage.getItem("Sphone"),
      };
      console.log(params);
      this.PostJsonAxios("editSphoneJurisdiction", params).then((res) => {
        if (res.data.status == "000000") {
          // console.log(res.data.result[0].jurisdiction);
          this.jurisdiction = res.data.result[0].jurisdiction;
        }
      });
    },
    homeRouter(url) {
      this.$router.push(url);
      // console.log(window.name)
      //  点击返回时，返回并刷新界面
      if (window.name != "bencalie") {
        this.$router.go(0);
        window.name = "bencalie";
      } else {
        window.name = "";
      }
    },
    stopanimate() {
      window.clearInterval(this.timer);
    },
    loginOut() {
      window.sessionStorage.clear();
      // window.localStorage.clear();
      this.$router.push("/login");
      this.$router.go(0);
    },
    startanimate() {
      if (this.timer) window.clearInterval(this.timer);
      this.timer = window.setInterval(() => {
        this.animateAngle++;
        for (let i = 0; i < this.aniOption.cnt; i++) {
          this.aniOption.oimages[i].style.left =
            this.aniOption.centerx +
            this.aniOption.xr *
              Math.cos(
                ((this.aniOption.da * i + this.animateAngle) / 180) * Math.PI
              ) +
            "px";
          this.aniOption.oimages[i].style.top =
            this.aniOption.centery +
            this.aniOption.yr *
              Math.sin(
                ((this.aniOption.da * i + this.animateAngle) / 180) * Math.PI
              ) +
            "px";
        }
      }, 150);
    },
    getWeather() {
      showDateClick();
      this.date = JSON.parse(window.localStorage.getItem("date"));
      this.flag = true;
      let param = {
        city: this.city,
      };
      this.PostAxios("weather", param).then((res) => {
        window.localStorage.setItem("weath", JSON.stringify(res.data.data));
      });
    },
  },
};
</script>

<style scoped>
.centre_img {
  width: 8vw;
  height: 16vh;
}
.propaganda {
  width: 100vw;
  height: 100vh;
  background: url(../../assets/img/home/bg.png) no-repeat center;
  background-size: cover;
}
.l_left {
  width: 12vw;
  float: left;
}
.l_right {
  width: 12vw;
  margin-left: 2vw;
  float: left;
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
.back {
  position: fixed;
  left: calc(100vw - 5vw);
  top: calc(100vh - 99vh);
  width: 3vw;
  cursor: pointer;
  z-index: 100;
}
.left {
  /* border: 1px solid red; */
  height: 90vh;
  width: 28vw;
  float: left;
  margin-left: 1vw;
}
.left .gaojian {
  width: 28vw;
  height: 54vh;
  /* border-bottom: 1px solid green; */
  margin-bottom: 1.8vh;
  background: url(../../assets/img/home/bg_left1.png) no-repeat 0 4vh;
  background-size: cover;
  position: relative;
}
.left .gaojian img {
  width: 29vw;
}
.left .gaojian span {
  z-index: 11;
  font-size: 16px;
  font-weight: 600;
  color: #d8daff;
  position: absolute;
  left: 12vw;
  top: 1vh;
}
.left .gaojian img:nth-of-type(2) {
  position: absolute;
  bottom: -1vh;
}
.left .rongmei {
  height: 18.7vh;
  width: 28vw;
  /* border: 1px solid black; */
  margin-bottom: 1.8vh;
  background: url(../../assets/img/home/bg_left2.png) no-repeat 0 4vh;
  background-size: cover;
  position: relative;
}
.left .rongmei img {
  width: 29vw;
}
.left .rongmei span {
  z-index: 11;
  font-size: 16px;
  font-weight: 600;
  color: #d8daff;
  position: absolute;
  left: 12vw;
  top: 1vh;
}
.left .hotpoint {
  height: 13.8vh;
  width: 28vw;
  /* border: 1px solid orangered; */
  background: url(../../assets/img/home/bg_left3.png) no-repeat 0 4vh;
  background-size: cover;
  position: relative;
}
.left .hot_point {
  height: 9.2vh;
}
.left .hotpoint img {
  width: 29vw;
}
.left .hotpoint span {
  z-index: 11;
  font-size: 16px;
  font-weight: 600;
  color: #d8daff;
  position: absolute;
  left: 12vw;
  top: 1vh;
}
.left .hotpoint img:nth-of-type(2) {
  position: absolute;
  bottom: -1vh;
}
.right {
  /* border: 1px solid red; */
  height: 90vh;
  width: 28vw;
  float: right;
  margin-right: 1vw;
}
.right .dataAnalysts {
  height: 37.8vh;
  width: 28vw;
  /* border: 1px solid black; */
  margin-bottom: 1.8vh;
  background: url(../../assets/img/home/bg_right1.png) no-repeat 0 4vh;
  background-size: cover;
  position: relative;
}

.right .dataAnalysts img {
  width: 29vw;
}
.right .dataAnalysts span {
  z-index: 11;
  font-size: 16px;
  font-weight: 600;
  color: #d8daff;
  position: absolute;
  left: 12vw;
  top: 1vh;
}
.right .dataAnalysts img:nth-of-type(2) {
  position: absolute;
  bottom: -1vh;
}
.right .tipPublicity {
  height: 18.3vh;
  width: 28vw;
  /* border: 1px solid black; */
  margin-bottom: 1.8vh;
  background: url(../../assets/img/home/bg_right2.png) no-repeat 0 4vh;
  background-size: cover;
  position: relative;
}
.right .tipPublicity img {
  width: 29vw;
}
.right .tipPublicity span {
  z-index: 11;
  font-size: 16px;
  font-weight: 600;
  color: #d8daff;
  position: absolute;
  left: 12vw;
  top: 1vh;
}
.right .tipPublicity img:nth-of-type(2) {
  position: absolute;
  bottom: -1vh;
}
.right .equipmentAnalysis {
  height: 30.3vh;
  width: 28vw;
  /* border: 1px solid black; */
  margin-bottom: 1.8vh;
  background: url(../../assets/img/home/bg_right3.png) no-repeat 0 4vh;
  background-size: cover;
  position: relative;
}
.right .equipmentAnalysis img {
  width: 29vw;
  display: block;
}
.right .equipmentAnalysis span {
  z-index: 11;
  font-size: 16px;
  font-weight: 600;
  color: #d8daff;
  position: absolute;
  left: 12vw;
  top: 1vh;
}
.right .equipmentAnalysis img:nth-of-type(2) {
  position: absolute;
  bottom: -1vh;
}
/* 中间 */
.centre {
  height: 90vh;
  width: 42vw;
  float: left;
}
/* 地图和旋转区域 */
.mapRotate {
  width: 42vw;
  height: 65.8vh;
  margin-top: 5.7vh;
}
.centreIcon {
  width: 42vw;
  height: 16.5vh;
  margin-top: 2vh;
  position: relative;
}
.dotCircle {
  margin: auto;
  position: absolute;
  top: -4vh;
  left: 1.8vw;
}
.dotCircle .itemicon {
  display: block;
  width: 10vw;
  height: 10vw;
  position: absolute;
  z-index: 10;
}
.dotCircle .itemicon img {
  border: none 0 !important;
}

.cri {
  position: absolute;
  top: 34vh;
  left: 38.3vw;
}
.cri img {
  width: 20vw;
  height: auto;
}
.mainFont {
  position: relative;
  top: 2vh;
  left: -1.5vw;
  text-align: center;
}
.mainFont p {
  display: block;
  color: white;
  font-size: 20px;
  font-weight: 800;
  position: relative;
  top: 11.5vh;
}
.mainFont img {
  width: 8vw;
}
.weather {
  width: 42vw;
  height: 16vh;
  margin-top: 2.5vh;
}
.weather ul li {
  text-align: center;
  float: left;
  width: 6.75vw;
  height: 16vh;
  margin-left: 0.2vw;
}
.home_date {
  display: inline-block;
  text-align: center;
  width: 5.5vw;
  height: 50px;
  line-height: 2vh;
  font-size: 16px;
  font-weight: 600;
  font-family: led;
  margin-top: 1vh;
  color: #10ffff;
  padding: 2px;
}
.weather ul li h3 {
  margin-top: 1vh;
  color: cadetblue;
}
.clock {
  display: inline-block;
  position: absolute;
  transform: translate(-50%);
  top: 7%;
  left: 50%;
  width: 40vw;
  height: 90px;
  text-align: center;
  font-family: led;
  font-size: 6.5rem;
  color: #10ffff;
}
.mesg {
  font-family: led;
  cursor: pointer;
  z-index: 100;
  float: left;
  position: fixed;
  top: 1.5vh;
  left: 0.5vw;
}
.mesg1 {
  font-family: led;
  cursor: pointer;
  z-index: 100;
  float: left;
  position: fixed;
  top: 1.5vh;
  left: 5vw;
}
</style>