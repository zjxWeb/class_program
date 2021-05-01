<template>
  <vue-seamless-scroll
    :data="listData"
    :class-option="classOption"
    class="warp"
  >
    <ul class="item" v-if="listData">
      <li
        v-for="(item, index) in listData"
        :key="index"
        @click="getindex(index, item.title,item.id), ishowmsg(index), sendMsg(index)"
      >
        <span class="xCri"></span>
        <span v-text="item.title"></span>
      </li>
    </ul>
  </vue-seamless-scroll>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";

export default {
  name: "Example01Basic",
  components: {
    vueSeamlessScroll,
  },
  props:['isDeldeF'],
  data() {
    return {
      id:null,
      index: null,
      title: null,
      ishowmessage: false,
      listData: [],
      classOption: {
        direction: 1,
        step: 0.4, //滚动速度
      },
    };
  },
   watch:{
    isDeldeF:'deletetFeedbackMsg'
  },
  mounted() {
    this.getListData();
  },
  methods: {
    deletetFeedbackMsg(cur,old){
      this.getListData()
      let params = {
        id:this.id
      }
      this.PostAxios('deletetFeedbackMsg',params).then((res)=>{
        if(res.data.flag == 1){
          this.getListData()
          this.$message.success('该消息已删除')
        }
        else{
          this.$message.success('该消息删除失败')
        }
      })
    },
    getListData() {
      this.GetAxios("feedbackMsg").then((res) => {
        if (res.data.status == "000000") {
          this.listData = res.data.result;
        } else {
          this.$message.error("服务器出错了");
        }
      });
    },
    getindex(index, tit,id) {
      this.index = index;
      this.title = tit;
      this.id = id;
    },
    ishowmsg() {
      this.ishowmessage = true;
    },
    sendMsg() {
      //func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
      this.$emit("message", {
        id:this.id,
        title: this.title,
        index: this.index,
        ishowmessage: this.ishowmessage,
        name: "市民反馈消息通知",
      });
    },
  },
};
</script>

<style  scoped>
.warp {
  height: 13vh;
  width: 28vw;
  margin: 0 auto;
  overflow: hidden;
}
.item li {
  display: inline-block;
  width: 28vw;
  height: 3vh;
  background-color: #072778;
  margin-top: 0.5vh;
  line-height: 3vh;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #ffffff;
  cursor: pointer;
}
.item li:hover {
  background-color: #155ab4;
}
.xCri {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  line-height: 3vh;
  position: relative;
  left: 0.3vw;
  background-color: #04d0ff;
}
.item li span {
  color: #ffffff;
  font-size: 14px;
  line-height: 3vh;
  margin-left: 0.5vw;
}
</style>