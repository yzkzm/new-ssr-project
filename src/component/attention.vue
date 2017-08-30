<!--发现应用小怪兽组件-->
<template>
    <div class="attention">
      <span class="ewm"></span>
      <div class="lm_share">
        <p class="tit">发现应用小怪兽</p>
        <p class="s_way">
          <a href="##"><i class="iconfont icon-weixin"></i></a>
          <a href="##"><i class="iconfont icon-weibo"></i></a>
          <a href="##"><i class="iconfont icon-qq1"></i></a>
          <a href="##"><i class="iconfont icon-email mr0"></i></a>
        </p>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="less" rel="stylesheet/less">
.attention{
  width: 330px;
  height: 90px;
  padding:20px 30px;
  border:1px solid #27cc9f;
  .ewm{
    float: left;
    width: 90px;
    height: 90px;
    background: url(../assets/images/ewm.jpg) no-repeat;
  }
  .lm_share{
    float: left;
    margin-left: 20px;
    .tit{
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      font-weight: 600;
      color:#2c3735;
    }
    .s_way{
      margin-top: 8px;
      .iconfont{
        font-size: 41px;
        color:#27cc9f;
        margin-right: 18px;
        cursor: pointer;
      }
      .mr0{
        margin-right: 0;
      }
    }
  }
}
</style>
