<template>
  <div class="Hm-Login">
    <hm-header>登录</hm-header>
    <hm-logo></hm-logo>
    <hm-input
      type="text"
      placeholder="请输入用户名/手机号"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式错误"
      ref="username"
    ></hm-input>
    <hm-input
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="用户密码格式错误"
      ref="password"
    ></hm-input>
    <hm-button @click="login">登录</hm-button>
    <div class="go-register">
      没有账号?去<router-link class="link" to="/register">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      if (!this.$refs.username.validate(this.username)) {
        return
      }
      if (!this.$refs.password.validate(this.password)) {
        return
      }

      this.$axios({
        method: 'post',
        url: '/login',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        console.log(res.data)
        if (res.data.statusCode === 200) {
          this.$toast.success('登陆成功')
          this.$router.push('/user')
        } else {
          this.$toast.fail('用户名或者密码错误')
        }
      })
    }
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  created() {
    this.username = this.$route.params.username
    this.password = this.$route.params.password
  }
}
</script>

<style lang="less" scoped>
.go-register {
  padding: 0 20px;
  font-size: 18px;
  text-align: right;
  .link {
    color: orange;
  }
}
</style>
