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
        <span class="text" v-text="item.title"></span>
        <span class="xCri">{{ item.way }}</span>
        <span class="xCri1">{{ item.num }}</span>
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
  props:['isDelde'],
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
    isDelde:'deleteMsg'
  },
  mounted() {
    this.getListData();
  },
  methods: {
    deleteMsg(cur,old){
      this.getListData()
      let params = {
        id:this.id
      }
      this.PostAxios('deletetMessage',params).then((res)=>{
        if(res.data.flag == 1){
          this.$message.success('该消息已删除')
        }
        else{
          this.$message.success('该消息删除失败')
        }
      })
      console.log(cur,old)
      console.log(this.id)
    },
    getListData() {
      this.GetAxios("cityMessage").then((res) => {
        if (res.data.status == "000000") {
          this.listData = res.data.result;
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
      this.$emit("message", {id:this.id,title:this.title,index:this.index,ishowmessage:this.ishowmessage,name:'市政要闻消息通知'});
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
  width: 28vw;
  height: 3vh;
  background-color: #072778;
  margin-top: 0.5vh;
  line-height: 3vh;
  cursor: pointer;
}
.item li:hover {
  background-color: #155ab4;
}
.text {
  display: inline-block;
  width: 21vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 10px;
}
.xCri {
  width: 2.6vw;
  text-align: center;
  display: inline-block;
  line-height: 3vh;
  position: relative;
  top: -1vh;
  left: 0.2vw;
}
.xCri1 {
  width: 2.8vw;
  display: inline-block;
  line-height: 3.2vh;
  position: relative;
  top: -1vh;
  left: 0.5vw;
}
.item li span {
  color: #ffffff;
  font-size: 10px;
  line-height: 3vh;
  margin-left: 0.2vw;
}
</style>