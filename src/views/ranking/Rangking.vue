<template>
    <div class="ranking container">
      <div class="ranking-facility">
        <selectPlatform :noHome="true"></selectPlatform>
      </div>
      <div class="ranking-filter">
        <tab-ranking :filterData="filterData" :keyFiter="['id', 'label']" @changeFilterData="changeFilterData" :keyword="['id', 'label']" :defaultFilter="defaultFilter" :defaultSelect="defaultSelect" :options="options" @handleChange="handleChange" :selectShow="isSelectShow"></tab-ranking>
      </div>
      <div class="ranking-list">
        <div class="rl-content">
          <ul class="rl-box">
            <li class="rl-default" v-for="(item, index) in appData" :class="(index + 2)%3 === 0 ? 'rl-mar79' : ''">
              <img class="rld-img" :src="item.imgsrc" alt="">
              <div class="rld-info">
                <h3>{{item.title}}</h3>
                <span class="rldi-download-time">{{item.size}}M·{{item.time}}次下载</span>
                <p>{{item.info}}</p>
                <div class="rldi-download" :class="isActive === item.id ? 'is-active' : ''">
                  <button class="btn" @click="handleDownload(item)">立即下载</button>
                  <i class="iconfont icon-safe"></i>
                  <span class="rldi-safe">系统安全</span>
                </div>
              </div>
            </li>
            <li class="rl-default">
              <img class="rld-img" src="../../assets/images/huangshi.png" alt="">
              <div class="rld-info">
                <h3>皇室战争(暂代)</h3>
                <span class="rldi-download-time">15.6M·1356次下载</span>
                <p>应用内容简介应该内容简介</p>
                <div class="rldi-download">
                  <button class="btn">立即下载</button>
                  <i class="iconfont icon-safe"></i>
                  <span class="rldi-safe">系统安全</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="ranking-more">
        <button class="btn">
          查看更多
        </button>
      </div>
    </div>

</template>

<script>
  import titleMixin from '../../util/title'
  /* import lmButton from './lm-button.vue' */
  import { tabRanking, selectPlatform } from '~component'
  export default {
    data () {
      return {
        isSelectShow: true,
        defaultFilter: {
          id: '1'
        },
        isActive: 1,
        appData: [{
          id: 1,
          title: '皇室战争',
          size: '15.6',
          time: '1356',
          info: '应用内容简介应该内容简介',
          imgsrc: '/dist/huangshi.png?6a628592d6e08243ccac49c14d2d1d9c'
        }, {
          id: 2,
          title: '皇室战争',
          size: '15.6',
          time: '1356',
          info: '应用内容简介应该内容简介',
          imgsrc: '/dist/huangshi.png?6a628592d6e08243ccac49c14d2d1d9c'
        }, {
          id: 3,
          title: '皇室战争',
          size: '15.6',
          time: '1356',
          info: '应用内容简介应该内容简介',
          imgsrc: '/dist/huangshi.png'
        }, {
          id: 4,
          title: '皇室战争',
          size: '15.6',
          time: '1356',
          info: '应用内容简介应该内容简介',
          imgsrc: '/dist/huangshi.png?6a628592d6e08243ccac49c14d2d1d9c'
        }, {
          id: 5,
          title: '皇室战争',
          size: '15.6',
          time: '1356',
          info: '应用内容简介应该内容简介',
          imgsrc: '/dist/huangshi.png?6a628592d6e08243ccac49c14d2d1d9c'
        }, {
          id: 6,
          title: '皇室战争',
          size: '15.6',
          time: '1356',
          info: '应用内容简介应该内容简介',
          imgsrc: '/dist/huangshi.png?6a628592d6e08243ccac49c14d2d1d9c'
        }, {
          id: 7,
          title: '皇室战争',
          size: '15.6',
          time: '1356',
          info: '应用内容简介应该内容简介',
          imgsrc: '/dist/huangshi.png?6a628592d6e08243ccac49c14d2d1d9c'
        }, {
          id: 8,
          title: '皇室战争',
          size: '15.6',
          time: '1356',
          info: '应用内容简介应该内容简介',
          imgsrc: '/dist/huangshi.png?6a628592d6e08243ccac49c14d2d1d9c'
        }, {
          id: 9,
          title: '皇室战争',
          size: '15.6',
          time: '1356',
          info: '应用内容简介应该内容简介',
          imgsrc: '/dist/huangshi.png?6a628592d6e08243ccac49c14d2d1d9c'
        }, {
          id: 10,
          title: '皇室战争',
          size: '15.6',
          time: '1356',
          info: '应用内容简介应该内容简介',
          imgsrc: '/dist/huangshi.png?6a628592d6e08243ccac49c14d2d1d9c'
        }, {
          id: 11,
          title: '皇室战争',
          size: '15.6',
          time: '1356',
          info: '应用内容简介应该内容简介',
          imgsrc: '/dist/huangshi.png?6a628592d6e08243ccac49c14d2d1d9c'
        }],
        filterData: [{
          id: '1',
          label: '更新时间'
        }, {
          id: '2',
          label: '上升最快'
        }, {
          id: '3',
          label: '最受欢迎'
        }],
        defaultSelect: {
          label: '全部排行'
        },
        options: [{
          id: '1',
          label: '全部排行'
        }, {
          id: '2',
          label: '游戏'
        }, {
          id: '3',
          label: '软件'
        }]
      }
    },
    mixins: [titleMixin],
    title () {
      return '排行榜'
    },
    components: {
      'tab-ranking': tabRanking,
      'selectPlatform': selectPlatform
    },
    methods: {
      changeFilterData (res) {
        console.log(res)
      },
      handleChange (res) {
        console.log(res)
      },
      handleDownload (res) {
        this.isActive = res.id
       /* console.log(res) */
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .ranking{
  .btn{
    display: inline-block;
    box-sizing: border-box;
    width: 98px;
    height: 30px;
    line-height: 30px;
    color: #27cc9f;
    border: 1px solid #27cc9f;
    background: #fff;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }
    .ranking-facility{
      margin-top: 35px;
    }
    .ranking-filter{
      margin-top: 22px;
    }
    .ranking-list{
      padding-top: 34px;
      width:100%;
      overflow: hidden;
      .rl-mar79{
        margin:0 79px;
      }
    }
    .rl-default{
      height:103px;
      width:314px;
      margin-bottom:44px;
      float:left;
      .rld-img{
        display: block;
        width:103px;
        height:103px;
        float:left;
      }
      .rld-info{
        float:right;
        margin-left:14px;
        width:197px;
        overflow: hidden;
        h3{
          font-size: 16px;
          color:#2c3735;
          line-height:20px;
        }
        .rldi-download-time{
          color:#a5a4a4;
          font-size:12px;
          line-height: 24px;
          display: inline-block;
        }
        p{
          color:#2c3735;
          font-size:14px;
          line-height: 22px;
        }
        i{
          color:#dbdbdb;
          font-size:16px;
          line-height:30px;
          display: inline-block;
          margin-left:14px;
        }
        .rldi-safe{
          color:#a5a4a4;
          font-size:12px;
          line-height: 30px;
          display: inline-block;
          margin-left: 6px;
        }
        .rldi-download{
          margin-top: 7px;
          width:100%;
          height:30px;
          overflow: hidden;
          display: inline-block;
          .btn, i, .rldi-safe{
            float:left;
          }
        }
        .is-active{
          .btn{
            color:#fff;
            background:#27cc9f;
          }
          i{
            color:#27cc9f;
          }
        }
      }
    }
  .ranking-more{
    margin: 0 auto;
    width:150px;
    margin-top: 68px;
  margin-bottom:120px;
    .btn{
      width:150px;
      height:40px;
      line-height: 40px;
      font-weight:400;
    }
  }
 }

</style>
