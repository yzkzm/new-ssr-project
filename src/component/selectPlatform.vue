<!--整站的平台选择组件 2种样式
 默认是首页
 noHome:true 是其他页面的样式
-->
<template>
  <div class="selectPlatform" :class="{homePlat:noHome}">
    <p class="sel"><span>选择应用平台</span></p>
    <p class="platF">
      <span @click="selP('iphone')" :class="{active:device==='iphone'}"><i
        class="iconfont icon-icon"></i><strong>iphone</strong></span>
      <span @click="selP('ipad')" :class="{active:device==='ipad'}"><i
        class="iconfont icon-ipad"></i><strong>ipad</strong></span>
      <span @click="selP('Android')" :class="{active:device==='Android'}" class="mr0"><i
        class="iconfont icon-android"></i><strong>Android</strong></span>
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      noHome: {
        type: Boolean,
        require: false
      }
    },
    data () {
      return {
        isHome: false,
        device: 'iphone'
      }
    },
    methods: {
      selP (device) {
        this.device = device
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .selectPlatform {
    border: 1px solid #27cc9f;
    border-radius: 5px;
    height: 30px;
    padding: 35px 25px;
    .sel {
      font-size: 18px;
      color: #27cc9f;
      float: left;
      margin-right: 45px;
      span{
        font-weight: 600;
      }
    }
    .platF {
      .mr0 {
        margin-right: 0;
      }
      span {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        font-weight: 600;
        color: #dbdbdb;
        cursor: pointer;
        margin-right: 88px;
        .iconfont {
          display: inline-block;
          font-size: 30px;
          float: left;
        }
        strong {
          float: left;
          margin-left: 5px;
        }
      }
      span:hover {
        color: #27cc9f;
      }
      .active {
        color: #27cc9f;
      }
    }
  }
  .homePlat{
    text-align: center;
    padding:13px 0 23px 0;
    height: 85px;
    .sel{
      float: none;
      margin-bottom: 27px;
      span{
        display: inline-block;
        width: 178px;
        height: 25px;
        background: url(../assets/images/deviceBg.jpg) no-repeat;
      }
    }
  }
</style>
