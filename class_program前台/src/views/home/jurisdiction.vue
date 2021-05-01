<template>
  <div class="light" v-if="tableData">
    <div class="top">
      <p class="topFont">
        权&nbsp;限&nbsp;管&nbsp;理&nbsp;中&nbsp;心
      </p>
    </div>
    <img
      class="back"
      @click="loginOut()"
      src="@/assets/img/home/back.png"
      alt=""
    />
    <el-dialog title="权限修改" :visible.sync="dialogFormVisible">
      <el-form :model="form">
            <el-form-item label="该用户电话号码">
                <el-input :disabled="true" v-model="form.Sphone" autocomplete="off"></el-input>
            </el-form-item>
            </el-date-picker>
            <el-form-item label="该用户姓名">
              <el-input :disabled="true" v-model="form.Sname" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="该用户权限">
                <el-select v-model="form.jurisdiction" placeholder="请选择方式">
                <el-option label="管理员" value="管理员"></el-option>
                <el-option label="科员" value="科员"></el-option>
            </el-select>
              <!-- <el-input v-model="form.jurisdiction" autocomplete="off"></el-input> -->
            </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="(dialogFormVisible = false), editLigeing()"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- 删除用户 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      height="91%"
      :header-cell-style="{ background: '#072778', color: 'white' }"
    >
      <el-table-column type="index" label="序号" align="center" width="100">
      </el-table-column>
      <el-table-column
        prop="Sphone"
        label="电话号码"
        width="300"
        align="center"
      ></el-table-column>
      <el-table-column prop="Sname" label="姓名" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.Sname }}
        </template>
      </el-table-column>
      <el-table-column prop="jurisdiction" label="当前在平台上的权限" align="center">
      </el-table-column>
      <el-table-column  label="操作" width="300" align="center">
        <template slot-scope="scope">
          <el-button
            type="success"
            size="mini"
            style="margin-left: 2vw"
            @click="(dialogFormVisible = true), editLight(scope.row)"
            >{{ editTitle }}</el-button
          >
          <el-button
            size="mini"
            style="margin-left: 2vw"
            type="danger"
            @click="deleteLight(scope.row.id)"
            >删除用户</el-button
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
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        Sphone: "",
        Sname: "",
        jurisdiction: "",
      },
      editTitle: "修改用户权限",
    };
  },
  mounted() {
    this.getLightData();
  },
  methods: {
    loginOut() {
      this.$router.push("/home");
    },
    getLightData() {
      this.GetAxios("jurisdictionMsg").then((res) => {
        if (res.data.status == "000000") {
          this.tableData = res.data.result;
        }
      });
    },
    editLight(row) {
      console.log(this.form);
      let params = {
        id: parseInt(row.id),
      };
      console.log('zjx',row);

      this.PostAxios("idjurisdictionMsg", params).then((res) => {
        if (res.data.status == "000000") {
          this.value = row.jurisdiction;
          this.editdata = row;
          this.form = res.data.result[0];
        }
      });
    },
    editLigeing() {
      this.PostJsonAxios("editjurisdictionMsg", this.form).then((res) => {
        if (res.data.flag == 1) {
          this.$message.success("修改用户信息成功");
          this.getLightData();
        } else {
          this.$message.error("修改用户信息失败");
        }
      });
    },
    deleteLight(id) {
      this.PostAxios("deletejurisdictionMsg", { id }).then((res) => {
        if (res.data.flag == 1) {
          this.$message.success("删除该用户成功");
          this.getLightData();
        } else {
          this.$message.success("删除该用户失败");
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
}
.edit {
  position: absolute;
  top: 20px;
  left: 10px;
}
</style>    