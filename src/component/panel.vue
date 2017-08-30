<template>
  <div class="panel">
    <h3 class="Tit">{{title}} <span class="moreBtn" v-if="isMore" @click="lookMore">更多<i class="iconfont icon-right"></i></span></h3>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      isMore: {
        type: Boolean,
        required: true,
        default: true
      }
    },
    methods: {
      lookMore () {
        console.log(1);
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .panel {
    padding-bottom:35px;
    .Tit {
      height: 40px;
      line-height: 40px;
      color: #27cc9f;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 35px;
      border-bottom: 2px solid #27cc9f;
    }
    .moreBtn{
      float: right;
      font-size: 12px;
      cursor: pointer;
      .iconfont{
        margin-left: 5px;
        margin-bottom: -10px;
        font-size: 15px;
      }
    }
  }
</style>
