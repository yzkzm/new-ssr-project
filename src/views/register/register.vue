<template>
    <div class="register users">
      <h1><a href="###">小怪兽</a></h1>
      <p class="logo_tit">一起来，寻找应用小怪兽</p>
      <form action="" class="formBox">
        <p class="inputBox"><input type="text" class="userInput" placeholder="用户名"><i class="iconfont icon-yonghu"></i>
        </p>
        <p class="inputBox"><input type="text" class="emailInput" placeholder="邮箱账号"><i class="iconfont icon-youxiang"></i>
        </p>
        <p class="inputBox"><input type="text" class="pwdInput" placeholder="密码"><i class="iconfont icon-mima"></i></p>
        <p class="inputBox"><input type="text" class="pwdInput2" placeholder="再次输入密码"><i class="iconfont icon-mima"></i></p>
        <p class="inputBox clearfix"><span class="checkbox"><span class="rightIcon" style="display: none;">●</span></span><i class="remember">已阅读并同意<a href="##">《用户协议》</a></i></p>
        <p class="loginBtn">注册</p>
        <p class="reg">我已注册<a href="###">去登陆</a></p>
      </form>
    </div>
</template>

<script>
export default {
  mounted () {
    this.highlight('.userInput')
    this.outhighlight('.userInput')
    this.highlight('.pwdInput')
    this.outhighlight('.emailInput')
    this.highlight('.emailInput')
    this.outhighlight('.pwdInput')
    this.highlight('.pwdInput2')
    this.outhighlight('.pwdInput2')
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
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
.register{
  .formBox .inputBox .checkbox{
    border-radius: 50%!important;
  }
  .formBox .inputBox .remember a{
    color:#27cc9f;
  }
  .formBox .reg{
    border-bottom:none!important;
  }
}
</style>
