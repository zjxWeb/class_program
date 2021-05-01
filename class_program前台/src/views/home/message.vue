<template>
  <div id="job">
    <div class="top">
      <p class="topFont">
        消&nbsp;&nbsp;息&nbsp;&nbsp;添&nbsp;&nbsp;加&nbsp;&nbsp;中&nbsp;&nbsp;心
      </p>
    </div>
    <div class="homeBack" @click="homeBack">
      <img
        class="back"
        @click="loginOut()"
        src="@/assets/img/home/back.png"
        alt=""
      />
    </div>
    <el-dialog :title="form.name" :visible.sync="dialogFormVisible">
    <el-form :model="form">
        <el-form-item label="消息内容" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="方式选择" :label-width="formLabelWidth" v-if="messageFlage">
        <el-select v-model="form.way" placeholder="请选择方式">
            <el-option label="观看量" value="观看量"></el-option>
            <el-option label="关注量" value="关注量"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="观看量/关注量（总数）" :label-width="formLabelWidth" v-if="messageFlage">
          <el-input v-model="form.num" autocomplete="off"></el-input>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false,addchange()">确 定</el-button>
    </div>
    </el-dialog>
    <div class="boxBut">
        <div class="boxOne">
             <span class="but" @click="dialogFormVisible = true,CityMeggest()">
                 添加市政要闻消息
             </span>
             <span class="boxCent">
                <ul v-for="(item, index) in getCityMeggest" :key="index" >
                    <li>
                        <span class="title">{{item.title}}</span>
                        <span  class="way">{{item.way}}</span>
                        <span  class="num">{{item.num}}</span>
                    </li>
                </ul>
             </span>
        </div>
        <div class="boxTwo">
            <span  class="but" @click="dialogFormVisible = true,ActiMeggestv()">
                添加社区活动消息
            </span>
            <span class="boxCent">
                <ul v-for="(item, index) in getActiMeggestv" :key="index" >
                    <li>{{item.title}}</li>
                </ul>
             </span>
        </div  class="but">
        <div class="boxTree">
            <span  class="but" @click="dialogFormVisible = true,FeedBackMeggest()">
                 添加市民反馈消息
            </span>
            <span class="boxCent">
                <ul v-for="(item, index) in getFeedBackMeggest" :key="index" >
                    <li>{{item.title}}</li>
                </ul>
             </span>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      changeMessageflage: null,
      getCityMeggest: [],
      getActiMeggestv: [],
      getFeedBackMeggest: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        title: "",
        way: "",
        num: "",
      },
      formLabelWidth: "180px",
      messageFlage: false,
    };
  },
  mounted() {
    this.getCityMeg(), this.getActiv(), this.getFeedBack();
  },
  methods: {
    getCityMeg() {
      this.GetAxios("cityMessage").then((res) => {
        if (res.data.status == "000000") {
          this.getCityMeggest = res.data.result;
        } else {
          this.$message.error("请稍后再试");
        }
      });
    },
    getActiv() {
      this.GetAxios("communityMsg").then((res) => {
        if (res.data.status == "000000") {
          this.getActiMeggestv = res.data.result;
        } else {
          this.$message.error("请稍后再试");
        }
      });
    },
    getFeedBack() {
      this.GetAxios("feedbackMsg").then((res) => {
        if (res.data.status == "000000") {
          this.getFeedBackMeggest = res.data.result;
        } else {
          this.$message.error("请稍后再试");
        }
      });
    },
    addchange() {
      switch (this.changeMessageflage) {
        case 0:
          this.city();
          break;
        case 1:
          this.active();
          break;
        case 2:
          this.feedback();
          break;
        default:
          break;
      }
    },
    CityMeggest() {
      this.form.name = "市政要闻消息添加";
      this.messageFlage = true;
      this.changeMessageflage = 0;
      console.log(1);
    },
    ActiMeggestv() {
      this.form.name = "社区活动消息添加";
      this.messageFlage = false;
      this.changeMessageflage = 1;
      
    },
    FeedBackMeggest() {
      this.form.name = "市民反馈要消息添加";
      this.messageFlage = false;
      this.changeMessageflage = 2;
     
    },
    city() {
        let params = {
        title: this.form.title,
        way: this.form.way,
        num: this.form.num,
      };
      console.log(params)
      this.PostJsonAxios("insertMessage", params).then((res) => {
        if (res.data.flag == 1) {
          this.$message.success("新的消息已添加成功");
          this.getCityMeg();
          this.form={}
        } else {
          this.$message.error("请求错误，请稍后再试");
        }
      });
    },
    active() {
        let params = {
        title: this.form.title,
      };
        this.PostJsonAxios("insertCommunityMsg", params).then((res) => {
        if (res.data.flag == 1) {
          this.$message.success("新的消息已添加成功");
          this.getActiv();
          this.form={}
        } else {
          this.$message.error("请求错误，请稍后再试");
        }
      });
    },
    feedback() {
        let params = {
        title: this.form.title,
      };
         this.PostJsonAxios("insertFeedbackMsg", params).then((res) => {
        if (res.data.flag == 1) {
          this.$message.success("新的消息已添加成功");
          this.getFeedBack();
          this.form={}
        } else {
          this.$message.error("请求错误，请稍后再试");
        }
      });
    },
    homeBack() {
      this.$router.push("/home");
    },
  },
};
</script>
<style lang="scss" scoped>
#job {
  width: 100vw;
  height: 100vh;
  background: url(~@/assets/img/home/bg.png) no-repeat center;
  background-size: cover;
}
.homeBack {
  position: absolute;
  top: 0vh;
  left: 0vw;
  cursor: pointer;
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
.boxBut {
  width: 100vw;
  height: 91vh;
  margin-top: 1vh;
  .boxOne,
  .boxTwo,
  .boxTree {
    width: 32vw;
    height: 91vh;
    float: left;
    text-align: center;
    position: relative;
  }
}
.boxOne {
  margin-left: 1vw;
  .boxCent {
    ul li {
      width: 31vw;
      height: 4vh;
      background-color: #072778;
      margin-top: 0.5vh;
      text-align: center;
      line-height: 4vh;
      font-family: led;
      font-size: 17px;
      color: #10ffff;
      position: relative;
      .title {
        display: inline-block;
        position: absolute;
        left: 0;
        width: 23vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .way {
        position: absolute;
        left: 23.5vw;
        width: 3.5vw;
      }
      .num {
        width: 3.5vw;
        position: absolute;
        left: 27.6vw;
        width: 3vw;
      }
    }
  }
}
.boxTwo {
  margin-left: 1vw;
}
.boxTree {
  margin-left: 1vw;
}
.but {
  cursor: pointer;
  display: inline-block;
  width: 32vw;
  height: 5vh;
  background-color: #093695;
  border: 2px solid #02acfd;
  border-radius: 20px;
  text-align: center;
  line-height: 4.5vh;
  font-family: led;
  font-size: 18px;
  color: #10ffff;
}
.boxCent {
  display: inline-block;
  width: 32vw;
  height: 85vh;
  margin-top: 1vh;
  background-color: #093695;
  overflow-x: auto;
  ul li {
    width: 31vw;
    height: 4vh;
    background-color: #072778;
    margin-top: 0.5vh;
    text-align: center;
    line-height: 4vh;
    font-family: led;
    font-size: 17px;
    color: #10ffff;
    margin-left: 0.5vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>