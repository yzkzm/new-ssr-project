<template>
  <div class="commitApp users appRel">
    <h1><a href="###">小怪兽</a></h1>
    <p class="logo_tit">一起来，寻找应用小怪兽</p>
    <form action="" class="formBox">
      <p class="inputBox"><span>应用名称</span><input type="text" placeholder=""></p>
      <p class="inputBox"><span>下载地址</span><input type="text"></p>
      <p class="inputBox"><span>应用大小</span><input type="text" placeholder="如3.5M"></p>
      <p class="inputBox"><span>版本</span><input type="text"></p>
      <div class="inputBox"><span>应用类别</span>
        <div class="selectBox">
          <input type="text" :value="value">
          <i class="iconfont icon-xiangxia"></i>
          <ul class="selectList">
            <li>系统安全</li>
            <li>游戏</li>
            <li>医疗健康</li>
            <li>保险理财</li>
            <li>保险理财</li>
            <li>保险理财</li>
          </ul>
        </div>
      </div>
      <p class="inputBox"><span>公司名称/开发者</span><input type="text"></p>
      <p class="inputBox"><span>公司官网/个人网站</span><input type="text"></p>
      <p class="inputBox"><span>应用图标</span><input type="text" placeholder="请输入图片地址" class="appIcon"><i class="upload">本地上传</i>
      </p>
      <p><span class="appInfo">应用简介</span><textarea name="" id="" cols="30" rows="10"></textarea></p>
      <p class="inputBox"><span></span><i class="btn">提交</i></p>
    </form>
  </div>
</template>

<script>
  export default {
    title: '提交应用',
    data () {
      return {
        value: '全部'
      }
    },
    mounted () {
      let list = document.querySelector('.selectList').children
      let selectBox = document.querySelector('.selectList')
      for (let i = 0; i < list.length; i++) {
        list[i].onclick = () => {
          let selectValue = list[i].innerText
          this.value = selectValue
          selectBox.style.display = 'none'
        }
      }
      document.querySelector('.icon-xiangxia').onclick = () => {
        if(selectBox.style.display==='block'){
          selectBox.style.display = 'none'
          }else{
            selectBox.style.display = 'block'
          }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

</style>
