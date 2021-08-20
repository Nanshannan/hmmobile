<template>
  <div class="login">
  <van-nav-bar  title="登录"/>
  <van-form>
    <van-field
      v-model="mobile"
      required
      name="手机号"
      label="手机号"
      placeholder="请输入手机号"
      :error-message="errorMobile_text"
    />
     <!-- :rules="[{ required: true, message: '请填写用户名' }]" -->
    <van-field
      v-model="code"
      required
      type="password"
      name="验证码"
      label="验证码"
      placeholder="请输入正确的验证码"
      :error-message="errorCode_text"
    />
     <!-- :rules="[{ required: true, message: '请填写密码' }]" -->
    <div style="margin: 16px;">
      <van-button type="info" @click="login">登录</van-button>
    </div>
  </van-form>
   <van-button type="primary" @click="getUserInfo">获取个人信息</van-button>
   <van-button type="primary" @click="getUserFansList">获取粉丝列表</van-button>
  </div>
</template>
<style>
    .van-button--info{
      width:100%;
      background-color:#3196fa;
    }
</style>
<script>
import { reqLogin, reqGetUserInfo, reqGetUserFans } from '@/api/user'
export default {
  name: 'Login',
  data () {
    return {
      mobile: '13800000002',
      code: '246810',
      errorMobile_text: '', // 手机号的提示文本
      errorCode_text: '', // 验证码的提示文本
      validated: true
    }
  },
  methods: {
    validate () {
      // 1. 空值校验 手机号的空值校验
      if (this.mobile.trim().length === 0) {
        console.log(121)
        this.errorMobile_text = '手机号不能为空'
        this.validated = false
      } else if (!/^1[3-9]\d{9}$/.test(this.mobile)) { // 2. 校验手机号是否合法
        this.errorMobile_text = '请输入合法的11位手机号'
        this.validated = false
      } else {
        this.errorMobile_text = '' // 3. 手机号如果校验通过,将错误提示置空
        return true
      }

      // 1.1 校验验证码空值校验
      if (this.code.trim().length === 0) {
        this.errorCode_text = '验证码不能为空'
        this.validated = false
      } else if (!/^\d{6}$/.test(this.code)) { // 1.2 校验验证是否合法
        this.errorCode_text = '请输入合法的6位验证码'
        this.validated = false
      } else {
        this.errorCode_text = '' // 验证码校验通过，将错误提示置空
        return true
      }
    },
    async login () {
      if (!this.validate()) return
      this.$toast.loading({
        message: '登录中...', // 加载提示文本
        overlay: true, // 灰色遮罩
        forbidClick: true, // 禁止背景点击
        duration: 0 // 展示时长设置为0 表示一直显示
      })

      const { data: { data } } = await reqLogin({ mobile: this.mobile, code: this.code }).catch(err => {
        console.log(err)
      })
      console.log(data)
      // reqLogin({ mobile: this.mobile, code: this.code }).then(res => {
      //   console.log(res)
      //   this.$toast.success('登录成功')
      // })
      // 提交mutation存储用户的token信息
      this.$store.commit('user/setTokenInfo', data)
      this.$toast.success('登录成功')
      this.$router.push('/')
    },
    async getUserInfo () {
      const res = await reqGetUserInfo()
      console.log(res)
    },

    async getUserFansList () {
      const res = await reqGetUserFans()
      console.log(res)
    }
  }
}
</script>
