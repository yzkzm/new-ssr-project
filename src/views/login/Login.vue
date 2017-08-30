<template>
  <div class="login users">
    <h1><a href="###">小怪兽</a></h1>
    <p class="logo_tit">一起来，寻找应用小怪兽</p>
    <form action="" class="formBox">
      <p class="inputBox"><input type="text" class="userInput" placeholder="用户名"><i class="iconfont icon-yonghu"></i>
      </p>
      <p class="inputBox"><input type="text" class="pwdInput" placeholder="密码"><i class="iconfont icon-mima"></i></p>
      <p class="inputBox clearfix"><span class="checkbox"><span class="rightIcon" style="display: none;">✔</span></span><i class="remember">记住密码</i></p>
      <p class="loginBtn">登录</p>
      <p class="reg"><a href="javascript:void(0)" @click="forgetPwd">忘记密码</a><i>|</i>新用户 <a href="###">注册</a></p>
    </form>
    <p class="otherAccount">社交账户登录</p>
    <p class="otherIcon">
      <i class="iconfont icon-qq"></i>
      <i class="iconfont icon-weixin1"></i>
      <i class="iconfont icon-weibo1 mr0"></i>
    </p>
  </div>
</template>

<script>
  export default{
    mounted () {
      this.highlight('.userInput')
      this.outhighlight('.userInput')
      this.highlight('.pwdInput')
      this.outhighlight('.pwdInput')
      let rightIcon = document.querySelector('.rightIcon')
      document.querySelector('.checkbox').onclick = () => {
        if(rightIcon.style.display==='none'){
          rightIcon.style.display = 'block'
        }else{
          rightIcon.style.display = 'none'
        }
      }
    },
    methods: {
      highlight (dom) {
        document.querySelector(dom).onfocus = () => {
          document.querySelector(dom).nextElementSibling.style.color = "#27cc9f"
        }
      },
      outhighlight (dom) {
        document.querySelector(dom).onblur = () => {
          document.querySelector(dom).nextElementSibling.style.color = "#e9e9e9"
        }
      },
      forgetPwd () {
        this.$router.push({name: 'forgetPwd'})
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

</style>
