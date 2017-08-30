<template>
  <div class="main">
    <div class="scrollTop" id="scroll2Top" @click="to_top" style="right:0"></div>
    <div id="header">
      <div class="container headerBox">
        <h1 class="logo fl"><a href="javascript:void(0)">小怪兽</a></h1>
        <div class="inputBox fl">
          <p class="search"><input type="text" placeholder="输入关键词查询..."><span class="searchIcon"><i
            class="iconfont icon-search-copy"></i></span></p>
          <p class="hot"><i>热搜:</i><span>天下</span><span>火影忍者</span><span>小心忍者</span></p>
        </div>
        <p class="loginBox themeColor fl"><span @click="login">登录 </span>/<span @click="register"> 注册</span></p>
        <p class="commitApp fr" @click="commitAPP">应用提交</p>
      </div>
      <div class="navBox">
        <ul class="container" ref="navBox">
          <router-link to="/home" tag="li">首页</router-link>
          <router-link to="/game" tag="li">游戏</router-link>
          <router-link to="/software" tag="li">软件</router-link>
          <router-link to="/ranking" tag="li">排行榜</router-link>
          <router-link to="/recommend" tag="li">推荐</router-link>
          <router-link to="/topic" tag="li">专题</router-link>
          <router-link to="/raiders" tag="li">攻略</router-link>
          <router-link to="/news" tag="li">新闻</router-link>
        </ul>
      </div>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
    <div id="footer">
      <div class="statement">
        <div class="container">
          <p>本站声明：</p>
          <p>
            小怪兽站点仅创建用户沟通交流的平台，所展示的手机软件、壁纸、铃声、小说等手机资源均为网友上传分享及部分资源提供商受权发布，所有上述资源仅作为用户间分享讨论之用，除开发商授权外不以盈利为目的。如果上述资源版权所有人对此有任何异议，请两周内速来信与我们联系，我们定当聆听您的意见并严格按照法律程序酌办。</p>
        </div>
      </div>
      <div class="copyright">
        <div class="container footBox">
          <h1 class="logo"><a href="javascript:void(0)">小怪兽</a></h1>
          <p class="first">适龄提示：本公司产品适合10周岁以上玩家使用 未成年人家长监护 隐私权和条款</p>
          <p>Copyright 2000-2015 多牛传媒 All Rights Reserved</p>
          <p>京ICP备15062447号-1</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        timer: null,
        right: 0
      }
    },
    created () {

    },
    mounted () {
      let screenW = document.body.offsetWidth
      if (screenW > 1100) {
        this.right = (screenW - 1100) / 3
      }
      document.getElementById('scroll2Top').style.right = this.right + 'px'
      this.scrollTop()
    },
    methods: {
      scrollTop () {
        let screenh = document.documentElement.clientHeight || document.body.clientHeight
        window.onscroll = function () {
          let scrolltop = document.documentElement.scrollTop || document.body.scrollTop
          if (scrolltop > screenh) {
            document.getElementById('scroll2Top').style.display = 'block'
          } else {
            document.getElementById('scroll2Top').style.display = 'none'
          }
        }
        window.onmousewheel = function (e) {
          if (e.wheelDelta < 0) clearInterval(this.timer)
        }
      },
      to_top () {
        this.timer = setInterval(() => {
          let osTop = document.documentElement.scrollTop || document.body.scrollTop
          let speed = Math.floor(osTop / 7)
          if (document.body.scrollTop) {
            document.body.scrollTop -= speed
          } else {
            document.documentElement.scrollTop -= speed
          }
          if (Math.floor(osTop) < 10) {
            clearInterval(this.timer)
          }
        }, 50)
      },
      login () {
        this.$router.push({name: 'login'})
      },
      register () {
        this.$router.push({name: 'register'})
      },
      commitAPP () {
        this.$router.push({name: 'commitApp'})
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .main {
    position: relative;
    .scrollTop {
      display: none;
      position: fixed;
      z-index: 100;
      width: 42px;
      height: 62px;
      right: 0;
      bottom: 160px;
      background: url(../assets/images/topIcon.png) no-repeat;
      background-position: 0 0;
      cursor: pointer;
      animation: mymove 800ms infinite;
      -webkit-animation: mymove 800ms infinite; /* Safari 与 Chrome */
    }
    @keyframes mymove {
      from {
        bottom: 150px;
      }
      to {
        bpttom: 160px;
      }
    }

    @-webkit-keyframes mymove /*Safari and Chrome*/
    {
      from {
        bottom: 150px;
      }
      to {
        bpttom: 160px;
      }
    }
    .scrollTop:hover {
      background-position: -50px 0;
    }
    #header {
      width: 100%;
      .headerBox {
        height: 130px;
        line-height: 130px;
        margin-bottom: 15px;
      }
      .logo {
        display: inline-block;
        width: 207px;
        height: 98px;
        text-indent: -999px;
        background: url(../assets/images/logo_1.png) no-repeat;
        overflow: hidden;
        margin-top: 16px;
      }
      .inputBox {
        position: relative;
        display: inline-block;
        input {
          width: 492px;
          height: 48px;
          line-height: 48px;
          border: 1px solid #e9e9e9;
          border-radius: 30px;
          padding: 0 28px;
          margin-left: 35px;
        }
        input[placeholder], [placeholder], *[placeholder] {
          color: #d8dfdd !important;
        }
        ::-webkit-input-placeholder { /* WebKit browsers */
          color: #d8dfdd;
        }
        :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
          color: #d8dfdd;
        }
        ::-moz-placeholder { /* Mozilla Firefox 19+ */
          color: #d8dfdd;
        }
        :-ms-input-placeholder { /* Internet Explorer 10+ */
          color: #d8dfdd;
        }
        .searchIcon {
          position: absolute;
          display: inline-block;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #27cc9f;
          top: 48px;
          right: 10px;
          cursor: pointer;
          .iconfont {
            position: absolute;
            top: -46px;
            left: 9px;
            color: #fff;
          }
        }
        .hot {
          position: absolute;
          top: 97px;
          left: 60px;
          line-height: 25px;
          i {
            color: #fe5513;
            font-size: 12px;
            font-weight: 600;
          }
          span {
            display: inline-block;
            height: 20px;
            line-height: 20px;
            padding: 0 7px;
            border-radius: 5px;
            margin-left: 10px;
            color: #b3b3b3;
            font-size: 12px;
            background: #efefef;
            cursor: pointer;
          }
        }
      }
      .loginBox {
        display: inline-block;
        margin-left: 80px;
        color: #27cc9f;
        span {
          color: #27cc9f;
          cursor: pointer;
        }
      }
      .commitApp {
        display: inline-block;
        width: 124px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        border-radius: 5px;
        background: #27cc9f;
        color: #fff;
        margin-top: 38px;
        cursor: pointer;
      }
      .navBox {
        width: 100%;
        height: 57px;
        line-height: 57px;
        background: linear-gradient(to bottom, #32dfa4, #1ec7a1);
        ul {
          li {
            width: 103px;
            height: 57px;
            float: left;
            text-align: center;
            color: #fff;
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;
          }
          li:hover {
            background: #1fc7a1;
          }
          li.router-link-active {
            background: #1fc7a1;
          }
        }
      }
    }
    #content {
      min-height: 597px;
    }
    #footer {
      width: 100%;
      height: 152px;
      .statement {
        line-height: 22px;
        padding: 20px 0;
        font-size: 14px;
        color: #969696;
        background: #f6f6f6;
      }
      .copyright {
        background: #494949;
      }
      .footBox {
        padding: 38px 0;
        .logo {
          float: left;
          display: inline-block;
          width: 79px;
          height: 79px;
          text-indent: -999px;
          background: url(../assets/images/logo_2.png) no-repeat;
          overflow: hidden;
        }
        p {
          float: left;
          display: inline-block;
          margin-left: 31px;
          font-size: 12px;
          color: #acacac;
          width: 900px;
          line-height: 20px;
        }
        p.first {
          margin-top: 10px;
          margin-bottom: 9px;
        }
      }
    }
  }
</style>
