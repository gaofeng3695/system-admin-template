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
        <p class="tip">Tips : 用户名和密码。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
  import md5 from 'js-md5';

  export default {
    data: () => {
      let checkUser = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入用户名'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入手机号码'));
          } else {
            callback();
          }
        }, 300);
      };
      return {
        ruleForm: {
          username: 15811236011,
          password: 123123
        },
        rules: {
          username: [{ validator: checkUser, trigger: 'blur' }],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
        }
      };
    },
    methods: {
      submitForm (formName) {
        const that = this;
        that.$refs[formName].validate(valid => {
          if (valid) {
            this.$jasHttp
              .post('/cloudlink-analysis-tianjiio/login/loginByPassword', {
                loginNum: '' + that.ruleForm.username,
                password: md5(that.ruleForm.password + '')
              })
              .then(res => {
                if (res.data.success === 1) {
                  this.$jasStorage.set('token', res.data.rows.token);
                  this.$jasStorage.set('userInfo', res.data.rows.user);
                  that.$router.push('/view-home');
                } else {
                  that.$message.error(res.data.msg || '用户名或密码错误');
                }
              })
              .catch(err => {
                that.$message.error('用户名或密码错误');
                console.log('err', err);
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  };
</script>

<style scoped>
  .login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background: #f90 url(/static/images/loginbg.jpg) no-repeat;
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
