<template>
  <div class="login_container">
    <Stare/>
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
       <el-form-item class="elFormi" label="" prop="Sname">
          <el-input
            v-model="loginForm.Sname"
            prefix-icon="iconfont icon-users"
            placeholder="请输入用户名"
            style="opacity: 0.9 ;"
          ></el-input>
        </el-form-item>
        <el-form-item  class="elFormi"  label="" prop="Sphone">
          <el-input
          placeholder="请输入电话号码"
            v-model="loginForm.Sphone"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item  class="elFormi"  label="" prop="Spassword">
          <el-input
           placeholder="请输入密码"
            v-model="loginForm.Spassword"
            prefix-icon="iconfont icon-3702mima"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item  class="elFormi"  label="" prop="tpassword">
          <el-input
           placeholder="确认密码"
            v-model="loginForm.tpassword"
            prefix-icon="iconfont icon-3702mima"
            type="password"
            style="opacity: 0.9 ;"
          ></el-input>
        </el-form-item>
        <el-form-item label="" class="btns,elFormi">
          <el-button type="primary" @click="login">注册</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
          <el-link class="registerLogin" href="/" type="primary">已有账号|去登录</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Stare from '../../components/stare'
export default {
  components:{
    Stare
  },
  data() {
    // 验证邮箱的手机
    var checkMbile = (rule, value, cb) => {
      const regMobile = /^((\+|00)86)?((134\d{4})|((13[0-3|5-9]|14[1|5-9]|15[0-9]|16[2|5|6|7]|17[0-8]|18[0-9]|19[0-2|5-9])\d{8}))$/;
      if (regMobile.test(value)) {
        return cb();
      }
      cb(new Error("请输入合法的手机号"));
    };
    return {
      loginForm: {
        Sname:'',
        Sphone: "",
        Spassword: "",
        tpassword:'',
      },
      // 表单的验证规则对象
      loginFormRules: {
        // d电话号码的表单验证
        Sphone: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
          { validator: checkMbile, trigger: "blur" },
        ],
        // 用户的表单验证
        Sname: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6到 14 个字符", trigger: "blur" },
        ],
        // 密码的表单验证
        Spassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6到 14 个字符", trigger: "blur" },
        ],
         // 密码的表单验证
        tpassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6到 14 个字符", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
  },
  methods: {
    // 点击重置按钮，重置登录表单resetFields()
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate((valid) => {
        // console.log(valid)
        // eslint-disable-next-line
        if (!valid) return;
        this.PostAxios("Register", this.loginForm).then((res)=>{
        if (res.data.flag == 1) {
          this.$message.success(res.data.msg);
          this.$router.push("/");
        } else {
          this.$message.error();("注册失败");
        }
        })
      });
    },
  },
};
</script>

<style  scoped>
.login_container {
  width: 100vw;
  height: 100vh;
  background-color: #000E63;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #1340B6;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #004EFF;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #004EFF;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #004EFF;
}
.avatar_box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #000E63;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-start;
}
.el-input{
  opacity: 0.9 ;
}

</style>
