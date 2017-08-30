<template>
  <div class="wwwee users">
    <h1><a href="###">小怪兽</a></h1>
    <p class="logo_tit">一起来，寻找应用小怪兽</p>
    <form action="" class="formBox">
      <p class="inputBox"><input type="text" class="emailInput1" placeholder="邮箱账号"><i
        class="iconfont icon-youxiang"></i>
      </p>
      <p class="loginBtn">提交</p>
    </form>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.outhighlight('.emailInput1')
      this.highlight('.emailInput1')
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

</style>
