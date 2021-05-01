<template>
  <div class="light" v-if="tableData">
    <div class="top">
      <p class="topFont">
        排&nbsp;水&nbsp;可&nbsp;视&nbsp;控&nbsp;制&nbsp;平&nbsp;&nbsp;台
      </p>
    </div>
    <img
      class="back"
      @click="loginOut()"
      src="@/assets/img/home/back.png"
      alt=""
    />
    <el-button
      class="edit"
      type="primary"
      @click="(dialogFormVisible = true), addchangeOutWater()"
      >{{ addTitle }}</el-button
    >
    <el-dialog title="添加排水闸" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="选择日期">
          <div class="block">
            <el-date-picker
              v-model="form.date"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
            <el-form-item label="管理人姓名">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="灯的地址">
              <el-input v-model="form.local" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="灯的状态">
              <el-input
                v-model="form.isOpen"
                placeholder="on:开，off：关"
                autocomplete="off"
                :disabled="true"
              ></el-input>
            </el-form-item>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="(dialogFormVisible = false), choseBut()"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- 删除排水闸 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      height="91%"
      :header-cell-style="{ background: '#072778', color: 'white' }"
    >
      <el-table-column type="index" label="序号" align="center" width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="300"
        align="center"
      ></el-table-column>
      <el-table-column prop="name" label="姓名(id)" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}&nbsp;&nbsp;[ {{ scope.row.id }} ]
        </template>
      </el-table-column>
      <el-table-column prop="local" label="地址" align="center">
      </el-table-column>
      <el-table-column prop="idOpen" label="操作" width="400" align="center">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.isOpen"
            active-value="on"
            inactive-value="off"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="change(scope.row.id, scope.row.isOpen)"
          >
          </el-switch>
          <el-button
            type="success"
            size="mini"
            style="margin-left: 2vw"
            @click="(dialogFormVisible = true), editOutWater(scope.row)"
            >{{ editTitle }}</el-button
          >
          <el-button
            size="mini"
            style="margin-left: 2vw"
            type="danger"
            @click="deleteOutWater(scope.row.id)"
            >删除排水闸</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editdata: {},
      tableData: [],
      value: null,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        date: "",
        name: "",
        local: "",
      },
      addTitle: "添加排水闸",
      editTitle: "编辑排水闸",
      changeButton: 0, //addTitle
    };
  },
  mounted() {
    this.getOutWaterData();
  },
  methods: {
    loginOut() {
      this.$router.push("/home");
    },
    choseBut() {
      switch (this.changeButton) {
        case 0:
          this.addOutWater();
          break;
        case 1:
          this.editOutWatering();
          break;
        default:
          break;
      }
    },
    addchangeOutWater() {
      this.changeButton = 0;
      this.form = {}
    },
    change(id, isOPen) {
      this.PostAxios("isOpenOutWaterMsg", { isOPen, id }).then((res) => {
        console.log(id, isOPen, res.data);
        if (res.data.code == "40010" && isOPen == "on") {
          this.$message.success("排水闸已开启");
        }
        if (res.data.code == "40010" && isOPen == "off") {
          this.$message.success("排水闸已关闭");
        }
      });
    },
    getOutWaterData() {
      this.GetAxios("OutWaterMsg").then((res) => {
        if (res.data.status == "000000") {
          this.tableData = res.data.result;
        }
      });
    },
    addOutWater() {
      this.PostJsonAxios("addOutWaterMsg", this.form).then((res) => {
        if (res.data.flag == 1) {
          this.$message.success("新的排水闸已添加成功");
          this.getOutWaterData();
        } else {
          this.$message.error("请求错误，请稍后再试");
        }
      });
    },
    editOutWater(row) {
      this.changeButton = 1;
      console.log(row.id);
      let params = {
        id: parseInt(row.id),
      };
      this.PostAxios("idOutWaterMsg", params).then((res) => {
        console.log(res.data.result[0]);
        if (res.data.status == "000000") {
          this.editdata = row;
          this.form = res.data.result[0];
        }
      });
    },
    editOutWatering() {
      this.PostJsonAxios("editOutWaterMsg", this.form).then((res) => {
        if (res.data.flag == 1) {
          this.$message.success("修改排水闸信息成功");
          this.getOutWaterData();
        } else {
          this.$message.error("修改排水闸信息失败");
        }
      });
    },
    deleteOutWater(id) {
      console.log(id);
      this.PostAxios("deleteOutWaterMsg", { id }).then((res) => {
        console.log(res);
        if (res.data.flag == 1) {
          this.$message.success("删除该排水闸成功");
          this.getOutWaterData();
        } else {
          this.$message.success("删除该排水闸失败");
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.light {
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
.edit {
  position: absolute;
  top: 20px;
  left: 10px;
}
</style>