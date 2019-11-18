<template>
  <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">后台登录</h3>
    <el-form-item prop="userName">
      <el-input type="text" v-model="loginForm.userName" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:48%;" @click.native.prevent="reset">重 置</el-button>
      <el-button type="primary" style="width:48%;" @click.native.prevent="loginSubmit" :loading="logining">登 录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import Cookies from "js-cookie";
  import { requestLogin } from '../http/api';
  export default {
    name: 'Login',
    data() {
      return {
        logining: false,
        loginForm: {
          userName: 'admin',
          password: '123456'
        },
        fieldRules: {
          userName: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
        checked: true
      };
    },
    methods: {
      loginSubmit() {
        let userInfo = {userName:this.loginForm.userName, password:this.loginForm.password}
        console.log(userInfo)
        requestLogin(JSON.stringify(userInfo)).then((data) => {
            let { msg, token, code, user } = data;
            if(code == 200){
              sessionStorage.setItem('user', JSON.stringify(user));
              Cookies.set('token', token) // 放置token到Cookie
              this.$router.push('/')  // 登录成功，跳转到主页
            } else {
              this.$message({
                  message: msg,
                  type: 'error'
                });
            }
          }).catch(function(res) {
            alert(res);
          });
      },
      reset() {
        this.$refs.loginForm.resetFields();
      }
    }
  }
</script>
<style lang="scss" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>