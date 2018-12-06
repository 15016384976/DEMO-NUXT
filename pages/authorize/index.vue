<template>
  <div>
    <el-form :model="form" :rules="rules" ref="form" class="container">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="form.account" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="remember" checked class="remember">记住我</el-checkbox>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="handleSignin" :loading="loading" class="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        account: '13000000001',
        password: '1234567890'
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      remember: true,
      loading: false
    }
  },
  methods: {
    handleSignin() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$axios.get('bins/15yoda',{ params: this.form }).then((res) => {
            this.$store.dispatch('nuxtServerSignin', res.data).then(()=>{
              this.loading = false;
              this.$router.push({ path: '/' })
            })
          })
        } 
      })
    },
    handleResume() {
      this.$refs.form.resetFields();
    }
  }
}
</script>

<style scoped>
  .container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 125px auto;
    width: 350px;
    padding: 35px 35px 25px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
	.title {
		margin: 0px auto 27px auto;
		text-align: center;
		color: #505458;
	}
	.remember {
		margin: 0px 0px 20px 0px;
	}
	.submit {
		width: 100%;
	}
</style>
