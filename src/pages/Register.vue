<template>
  <div class="register">
    <hm-header>注册</hm-header>
    <hm-logo></hm-logo>

    <hm-input
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式错误"
      placeholder="用户名/手机号码"
      ref="username"
    ></hm-input>

    <hm-input
      type="text"
      placeholder="昵称"
      v-model="nickname"
      message="用户的名称必须是3-7位中文"
      :rule="/^[\u4e00-\u9fa5]{3,7}$/"
      ref="nickname"
    ></hm-input>

    <hm-input
      type="password"
      placeholder="密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="用户密码格式错误"
      ref="password"
    ></hm-input>

    <hm-button @click="register">注册</hm-button>
    <!-- 去登录的连接 -->
    <div class="go-login">
      已有账号？去
      <router-link class="link" to="/login">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      nickname: '',
      password: ''
    }
  },
  methods: {
    register() {
      let status1 = this.$refs.username.validate(this.username)
      let status2 = this.$refs.nickname.validate(this.nickname)
      let status3 = this.$refs.password.validate(this.password)

      if (!status1 || !status2 || !status3) {
        return
      }

      // 发送ajax请求
      this.$axios({
        url: '/register',
        method: 'post',
        data: {
          username: this.username,
          password: this.password,
          nickname: this.nickname
        }
      }).then(res => {
        console.log(res.data)
        // 判断响应状态
        if (res.data.statusCode === 200) {
          this.$toast.success(res.data.message)
          this.$router.push({
            name: 'login',
            params: { username: this.username, password: this.password }
          })
        } else {
          this.$toast.fail(res.data.message)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.go-login {
  padding: 0 20px;
  font-size: 18px;
  text-align: right;
  .link {
    color: orange;
  }
}
</style>
