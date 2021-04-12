<template>
  <div class="equipmentBox">
    <!-- 第一层 -->
    <div class="equipmentBoxOne">
      <ul>
        <li v-for="(item, index) in equipmentBoxOne" :key="index">
          <h3 class="equipmentBoxOneFont">{{ item.equipmentBoxOneFont }}</h3>
          <img src="@/assets/img/home/shebei.png" alt="" />
          <h3 class="equipmentFoot">{{ item.equipmentFoot }}</h3>
        </li>
      </ul>
    </div>
    <!-- 第二层 -->
    <div class="equipmentBoxTwo">
      <ul>
        <li v-for="(item, index) in equipmentBoxTwo" :key="index">
          <h3 class="equipment_Font">{{ item.equipmentBoxOneFont }}</h3>
          <img src="@/assets/img/home/tcri.png" alt="" />
          <h3 class="equipment_F">{{ item.equipmentFoot }}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      equipmentBoxOne: [
        { equipmentBoxOneFont: "20%", equipmentFoot: "供水/全国" },
        { equipmentBoxOneFont: "12%", equipmentFoot: "供电/全国" },
        { equipmentBoxOneFont: "12%", equipmentFoot: "供气/全国" },
        { equipmentBoxOneFont: "22%", equipmentFoot: "供热/全国" },
      ],
      equipmentBoxTwo: [
        { equipmentBoxOneFont: "畅通", equipmentFoot: "交通情况" },
        { equipmentBoxOneFont: "90%", equipmentFoot: "就业情况" },
        { equipmentBoxOneFont: "10个", equipmentFoot: "路灯已亮" },
        { equipmentBoxOneFont: "良", equipmentFoot: "排水状态" },
      ],
    };
  },
};
</script>

<style scoped>
/* 设备分析第一层样式 */
.equipmentBoxOne ul {
  margin-left: 0.8vw;
}
.equipmentBoxOne ul li {
  width: 6vw;
  float: left;
  margin-top: 2.5vh;
  cursor: pointer;
  text-align: center;
  margin-left: 0.55vw;
}
.equipmentBoxOne ul li img {
  width: 5.5vw;
}
.equipmentBoxOneFont {
  display: inline-block;
  width: 4vw;
  height: 3vh;
  color: #10ffff;
  font-family: led;
  font-size: 20px;
  margin-top: 0;
}
.equipmentFoot {
  display: inline-block;
  width: 6vw;
  height: 3vh;
  text-align: center;
  color: #ffffff;
  margin-top: 1vh;
  font-size: 18px;
  font-weight: 100;
}
/* 第二层样式 */
.equipmentBoxTwo ul {
  margin-left: 0.4vw;
}
.equipmentBoxTwo ul li {
  width: 6vw;
  float: left;
  margin-top: 1.5vh;
  margin-left: 0.8vw;
  position: relative;
  cursor: pointer;
  text-align: center;
}
.equipmentBoxTwo ul li img {
  width: 5.5vw;
}
.equipment_Font {
  display: inline-block;
  width: 4vw;
  height: 3vh;
  position: absolute;
  top: 1vh;
  left: 1vw;
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: 100;
}
.equipment_F {
  display: inline-block;
  width: 6vw;
  height: 3vh;
  margin-top: 1vh;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 100;
}
</style>