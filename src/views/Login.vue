<template>
  <div class="login-wrap">
    <div class="ms-title">后台管理系统</div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px">
        <el-form-item prop="username">
          <el-input v-model.number="ruleForm.username" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <p class="tip">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    let checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入用户名'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入手机号码'))
        } else {
          callback()
        }
      }, 300)
    }
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ validator: checkUser, trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      const that = this
      that.$refs[formName].validate(valid => {
        if (valid) {
          this.$http
            .post('/cloudlink-analysis-tianjiio/login/loginByPassword', {
              loginNum: that.username,
              password: that.password
            })
            .then(function (res) {
              console.log(res)
            })
            .catch(function (err) {
              console.log('err', err)
            })
          // return
          // localStorage.setItem('ms_username', that.ruleForm.username)
          // that.$router.push('/index')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f90 url(../assets/images/loginbg.jpg) no-repeat;
  background-size: cover;
}
.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 30px;
  color: #fff;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 160px;
  margin: -150px 0 0 -190px;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
}
.tip {
  font-size: 12px;
  line-height: 30px;
  color: #999;
}
</style>
