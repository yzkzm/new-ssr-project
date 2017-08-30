<template>
  <div class="home">
    <div v-swiper:mySwiper="swiperOption" id="swiper-container1">
      <div class="swiper-wrapper">
        <!--<div class="swiper-slide" v-for="banner in banners">-->
        <!--<img :src="banner" alt="">-->
        <!--&lt;!&ndash;<img src="../../assets/images/slide1.jpg" alt="">&ndash;&gt;-->
        <!--</div>-->
        <div class="swiper-slide">
          <img src="../../assets/images/slide1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/slide2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/slide1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/slide2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/slide1.jpg" alt="">
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="shadowL"></div>
      <div class="shadowR"></div>
    </div>
    <div class="mt36 container">
      <div class="L">
        <select-platform></select-platform>
        <panel title="本周热门APP" :isMore="false" class="mt18">
          <div v-swiper:mySwiper2="swiperOption2" id="swiper-container2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <span class="leftImg"><img src="../../assets/images/hotApp.jpg" alt=""><i>托卡生活:医院(含数据包)</i></span>
                <div class="rightCon">
                  <span class="rightImg"><img src="../../assets/images/hotApp_logo.png" alt=""></span>
                  <div class="info">
                    <h2 class="tit">Toca Life: Hospital </h2>
                    <div class="comment">
                      <vm-rate  v-model="rate_val_1"
                                      :allow-half="true"
                                      :colors="rateColors"
                                      disabled
                                      disabled-void-icon-class="vm-icon-star-empty"
                                      disabled-void-color="#27cc9f"
                                      size="14px"
                                class="rate-star"
                      ></vm-rate> |
                    <span>198M</span> | <span>教育</span></div>
                    <span class="btn">下载</span>
                  </div>
                  <p class="intord">找出穿着衣服的树，来一场万圣节派对，去化学实验室混合彩色液体，爬爬树，玩捉迷藏。想找点课后的娱乐活动？来青年俱乐...</p>
                </div>
              </div>
              <div class="swiper-slide">1</div>
              <div class="swiper-slide">1</div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
          </div>
          <ul class="hotAppList clearfix">
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li class="mr0"><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
          </ul>
        </panel>
        <panel title="最新游戏" :isMore="true">
          <ul class="gamesList clearfix">
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li class="mr0"><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li class="mr0"><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li class="mr0"><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
          </ul>
        </panel>
        <panel title="最新应用" :isMore="true">
          <ul class="gamesList clearfix">
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li class="mr0"><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li class="mr0"><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
            <li class="mr0"><a href="##">
              <img src="../../assets/images/bili.png" alt="">
              <p>哔哩哔哩</p>
              <p class="type">影音播放</p>
            </a></li>
          </ul>
        </panel>
        <tabs>
          <tab-pane label="1111">1111</tab-pane>
          <tab-pane label="222">2222</tab-pane>
        </tabs>
      </div>
      <div class="R">
        <attention></attention>
        <div class="appTypes">
          <h3>应用分类</h3>
          <table cellspacing="8">
            <tbody>
            <tr>
              <td><a href="##"><i class="iconfont icon-all"></i><p>全部</p></a></td>
              <td><a href="##"><i class="iconfont icon-safe"></i><p>系统安全</p></a></td>
              <td><a href="##"><i class="iconfont icon-bookmark"></i><p>读书阅读</p></a></td>
              <td><a href="##"><i class="iconfont icon-buy"></i><p>购物优惠</p></a></td>
            </tr>
            <tr>
              <td><a href="##"><i class="iconfont icon-icon17"></i><p>医疗健康</p></a></td>
              <td><a href="##"><i class="iconfont icon-licai"></i><p>保险理财</p></a></td>
              <td><a href="##"><i class="iconfont icon-liaotian"></i><p>聊天社交</p></a></td>
              <td><a href="##"><i class="iconfont icon-camera"></i><p>摄影摄像</p></a></td>
            </tr>
            <tr>
              <td><a href="##"><i class="iconfont icon-yingyinshiting"></i><p>影音视听</p></a></td>
              <td><a href="##"><i class="iconfont icon-feiji"></i><p>交通旅行</p></a></td>
              <td><a href="##"><i class="iconfont icon-bangong-zhiwei"></i><p>办公商务</p></a></td>
              <td><a href="##"><i class="iconfont icon-tools"></i><p>实用工具</p></a></td>
            </tr>
            <tr>
              <td><a href="##"><i class="iconfont icon-game"></i><p>游戏</p></a></td>
              <td><a href="##"><i class="iconfont icon-nvxing"></i><p>女性</p></a></td>
              <td><a href="##"><i class="iconfont icon-chushishangmen"></i><p>美食</p></a></td>
              <td><a href="##"><i class="iconfont icon-zhibo"></i><p>直播</p></a></td>
            </tr>
            </tbody>
          </table>
        </div>
        <panel title="热门攻略" :isMore="true">
          <p class="radiesImg"><img src="../../assets/images/hotRaiders.jpg" alt=""><span>幽灵行动荒野营救阿马鲁任务攻略 幽灵行动荒野怎么营...</span></p>
          <ul class="raidersList">
            <li><a href="##"><i class="iconfont icon-weibiaoti2"></i><p>热血物语地下世界隐藏人物怎么选 隐藏人物进行剧情模...</p></a></li>
            <li><a href="##"><i class="iconfont icon-weibiaoti2"></i><p>热血物语地下世界隐藏人物怎么选 隐藏人物进行剧情模...</p></a></li>
            <li><a href="##"><i class="iconfont icon-weibiaoti2"></i><p>热血物语地下世界隐藏人物怎么选 隐藏人物进行剧情模...</p></a></li>
            <li><a href="##"><i class="iconfont icon-weibiaoti2"></i><p>热血物语地下世界隐藏人物怎么选 隐藏人物进行剧情模...</p></a></li>
            <li><a href="##"><i class="iconfont icon-weibiaoti2"></i><p>热血物语地下世界隐藏人物怎么选 隐藏人物进行剧情模...</p></a></li>
            <li><a href="##"><i class="iconfont"></i><p>热血物语地下世界隐藏人物怎么选 隐藏人物进行剧情模...</p></a></li>
            <li><a href="##"><i class="iconfont"></i><p>热血物语地下世界隐藏人物怎么选 隐藏人物进行剧情模...</p></a></li>
            <li><a href="##"><i class="iconfont"></i><p>热血物语地下世界隐藏人物怎么选 隐藏人物进行剧情模...</p></a></li>
            <li><a href="##"><i class="iconfont"></i><p>热血物语地下世界隐藏人物怎么选 隐藏人物进行剧情模...</p></a></li>
          </ul>
        </panel>
      </div>
      <div class="advertise"><img src="../../assets/images/wzry.jpg" alt=""></div>
      <panel title="资讯新闻" :isMore="true" class="fl w100 mt18">
        <ul class="news clearfix">
          <li><a href="##">
            <img src="../../assets/images/newsPic.jpg" alt="">
            <h3>《荆棘王座》渠道首测结束，王座争夺让人印象深刻 <i v-if="isVideo" class="iconfont icon-zhibo1 themeColor"></i></h3>
            <p><span class="themeColor">怪兽主编</span><i  class="date">发表于：2017/05/02 10:05</i></p>
          </a></li>
          <li><a href="##">
            <img src="../../assets/images/newsPic.jpg" alt="">
            <h3>《荆棘王座》渠道首测结束，王座争夺让人印象深刻 <i class="iconfont icon-zhibofuben themeColor"></i></h3>
            <p><span class="themeColor">怪兽主编</span><i  class="date">发表于：2017/05/02 10:05</i></p>
          </a></li>
          <li><a href="##">
            <img src="../../assets/images/newsPic.jpg" alt="">
            <h3>《荆棘王座》渠道首测结束，王座争夺让人印象深刻 <i class="iconfont icon-zhibofuben themeColor"></i></h3>
            <p><span class="themeColor">怪兽主编</span><i  class="date">发表于：2017/05/02 10:05</i></p>
          </a></li>
          <li class="mr0"><a href="##">
            <img src="../../assets/images/newsPic.jpg" alt="">
            <h3>《荆棘王座》渠道首测结束，王座争夺让人印象深刻 <i v-if="isVideo" class="iconfont icon-zhibo1 themeColor"></i></h3>
            <p><span class="themeColor">怪兽主编</span><i  class="date">发表于：2017/05/02 10:05</i></p>
          </a></li>
          <li><a href="##">
            <img src="../../assets/images/newsPic.jpg" alt="">
            <h3>《荆棘王座》渠道首测结束，王座争夺让人印象深刻 <i class="iconfont icon-zhibofuben themeColor"></i></h3>
            <p><span class="themeColor">怪兽主编</span><i  class="date">发表于：2017/05/02 10:05</i></p>
          </a></li>
          <li><a href="##">
            <img src="../../assets/images/newsPic.jpg" alt="">
            <h3>《荆棘王座》渠道首测结束，王座争夺让人印象深刻 <i class="iconfont icon-zhibofuben themeColor"></i></h3>
            <p><span class="themeColor">怪兽主编</span><i  class="date">发表于：2017/05/02 10:05</i></p>
          </a></li>
          <li><a href="##">
            <img src="../../assets/images/newsPic.jpg" alt="">
            <h3>《荆棘王座》渠道首测结束，王座争夺让人印象深刻 <i class="iconfont icon-zhibofuben themeColor"></i></h3>
            <p><span class="themeColor">怪兽主编</span><i  class="date">发表于：2017/05/02 10:05</i></p>
          </a></li>

          <li class="mr0"><a href="##">
            <img src="../../assets/images/newsPic.jpg" alt="">
            <h3>《荆棘王座》渠道首测结束，王座争夺让人印象深刻 <i class="iconfont icon-zhibofuben themeColor"></i></h3>
            <p><span class="themeColor">怪兽主编</span><i  class="date">发表于：2017/05/02 10:05</i></p>
          </a></li>
        </ul>
        <ul class="newsList clearfix">
          <li><a href="##"><i class="iconfont icon-weibiaoti2"></i><h3>《尼尔：机械纪元》欧美媒体高度评价 均分近满分！</h3><span>2017/05/02</span></a></li>
          <li class="mr0"><a href="##"><i class="iconfont icon-weibiaoti2"></i><h3>《尼尔：机械纪元》欧美媒体高度评价 均分近满分！</h3><span>2017/05/02</span></a></li>
          <li><a href="##"><i class="iconfont icon-weibiaoti2"></i><h3>《尼尔：机械纪元》欧美媒体高度评价 均分近满分！</h3><span>2017/05/02</span></a></li>
          <li class="mr0"><a href="##"><i class="iconfont icon-weibiaoti2"></i><h3>《尼尔：机械纪元》欧美媒体高度评价 均分近满分！</h3><span>2017/05/02</span></a></li>
          <li><a href="##"><i class="iconfont icon-weibiaoti2"></i><h3>《尼尔：机械纪元》欧美媒体高度评价 均分近满分！</h3><span>2017/05/02</span></a></li>
          <li class="mr0"><a href="##"><i class="iconfont icon-weibiaoti2"></i><h3>《尼尔：机械纪元》欧美媒体高度评价 均分近满分！</h3><span>2017/05/02</span></a></li>
        </ul>
      </panel>

    </div>
    <div class="website">
      <div class="container">
        <h2>合作站点</h2>
        <ul class="clearfix">
          <li><a href="##">当乐ios8越狱</a></li>
          <li><a href="##">VR社区</a></li>
          <li><a href="##">手机网游  </a></li>
          <li><a href="##">安卓游戏  </a></li>
          <li><a href="##">太平洋下载  </a></li>
          <li><a href="##">网页游戏  </a></li>
          <li><a href="##">电玩巴士  </a></li>
          <li><a href="##">凤凰游戏  </a></li>
          <li><a href="##">安卓机锋网  </a></li>
          <li><a href="##">ZOL手机驱动之家 </a></li>
          <li><a href="##">ZOL游戏 </a></li>
          <li><a href="##">魔游游交易  </a></li>
          <li><a href="##">威锋网  </a></li>
          <li><a href="##">VR社区   </a></li>
          <li><a href="##">手机网游  </a></li>
          <li><a href="##">安卓游戏  </a></li>
          <li><a href="##">太平洋下载  </a></li>
          <li><a href="##">网页游戏  </a></li>
          <li><a href="##">电玩巴士  </a></li>
          <li><a href="##">凤凰游戏  </a></li>
          <li><a href="##">安卓机锋网  </a></li>
          <li><a href="##">ZOL手机驱动之家  </a></li>
          <li><a href="##">ZOL游戏  </a></li>
          <li><a href="##">魔游游交易  </a></li>
          <li><a href="##">威锋网  </a></li>
          <li><a href="##">VR社区  </a></li>
          <li><a href="##">手机网游  </a></li>
          <li><a href="##">安卓游戏  </a></li>
          <li><a href="##">太平洋下载  </a></li>
          <li><a href="##">网页游戏  </a></li>
          <li><a href="##">电玩巴士  </a></li>
          <li><a href="##">凤凰游戏  </a></li>
          <li><a href="##">安卓机锋网  </a></li>
          <li><a href="##">ZOL手机驱动之家 </a></li>
          <li><a href="##">ZOL游戏  </a></li>
          <li><a href="##">魔游游交易  </a></li>
          <li><a href="##">威锋网</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {selectPlatform, attention, panel, tabs} from '~component'
  import {COLORS} from  '../../util/cosnt'
  let browser = typeof window !== 'undefined'
  if (browser) {
    window.Swiper = require('swiper')
    require('swiper/dist/css/swiper.css')
  }

  export default {
    data () {
      return {
        banners: ['/dist/slide1.jpg', '/dist/slide1.jpg', '/dist/slide1.jpg', '/dist/slide2.jpg', '/dist/slide1.jpg'],
        swiperOption: {
          autoplay: 1000,
          initialSlide: 1,
          loop: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev'
        },
        swiperOption2: {
          initialSlide: 1,
          loop: true,
          pagination: '.swiper-pagination',
          paginationClickable: true
        },
        rate_val_1: 3,
        rateColors: COLORS,
        isVideo: false
      }
    },
    created () {

    },
    mounted() {
      setTimeout(() => {
        this.banners.push('/dist/slide2.jpg')
      }, 1000)
      this.mySwiper.slideTo(2)
      this.mySwiper2.slideTo(1)
    },
    methods: {},
    components: {
      'select-platform': selectPlatform,
      attention,
      panel,
      tabs
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/common.less";

  .home {
    #swiper-container1 {
      width: 1100px;
      height: 388px;
      overflow: visible;
      .shadowL, .shadowR {
        position: absolute;
        width: 1100px;
        height: 388px;
        background: rgba(0, 0, 0, 0.6);
        z-index: 20;
        top: 0;
      }
      .shadowL {
        left: -1100px;
      }
      .shadowR {
        right: -1100px;
      }
      .swiper-pagination-bullet {
        width: 45px;
        border-radius: 0;
        margin: 0 !important;
      }
      .swiper-pagination-bullet:first-child {
        border-radius: 10px 0 0 10px;
      }
      .swiper-pagination-bullet:last-child {
        border-radius: 0 10px 10px 0;
      }
      .swiper-pagination-bullet-active {
        border-radius: 10px !important;
        background: #060606;
      }
    }
    .mt36 {
      margin-top: 36px;
    }
    .mt18 {
      margin-top: 18px;
    }
    #swiper-container2{
      height: 270px;
      border-bottom:1px solid #e4e4e4;
      .swiper-pagination-bullet-active{
        background: #27cc9f;
      }
      .leftImg{
        position: relative;
        display: inline-block;
        width: 352px;
        height: 204px;
        img{
          width: 100%;
        }
        i{
          position: absolute;
          left: 0;
          bottom: 0;
          height: 35px;
          line-height: 35px;
          width: 332px;
          padding:0 10px;
          background: rgba(0,0,0,0.65);
          color:#fff;
        }
      }
      .rightCon{
        float: right;
        width: 294px;
        height: 188px;
        margin-top: 5px;
        .rightImg{
          display: inline-block;
          width: 85px;
          height: 85px;
          margin-right: 12px;
          img{
            width: 100%;
          }
        }
        .info{
          width: 197px;
          float: right;
          .tit{
            font-size: 16px;
            font-weight: 600;
            color:#2c3735;
          }
          .comment{
            margin:5px 0 10px 0;
            .rate-star{
              display: inline-block;
            }
          }
          .btn{
            display: inline-block;
            .button-default;
          }
        }
        .intord{
          margin-top: 28px;
        }
      }
    }
    .hotAppList{
      padding-top:40px;
      li{
        float: left;
        width: 92px;
        text-align: center;
        margin-right: 23px;
        img{
          width: 92px;
          height: 92px;
        }
        p{
          line-height: 23px;
        }
        .type{
          color:#c5c5c5;
        }
      }
    }
    .gamesList{
      li{
        float: left;
        width: 92px;
        text-align: center;
        margin-right: 23px;
        margin-bottom: 30px;
        img{
          width: 92px;
          height: 92px;
        }
        p{
          line-height: 23px;
        }
        .type{
          color:#c5c5c5;
        }
      }
    }
    .appTypes{
      margin-top: 40px;
      h3{
        height: 50px;
        width: 370px;
        line-height: 50px;
        padding-left: 22px;
        background: #27cc9f;
        font-size: 18px;
        font-weight: 600;
        color:#fff;
      }
      table{
        tr{
          padding:0;
        }
        td{
          width: 90px;
          height: 54px;
          padding:28px 0 18px 0;
          text-align: center;
          border:1px solid #f0f0f0;
          .iconfont{
            color:#27cc9f;
            font-size: 28px;
            margin-bottom: 9px;
          }
          .icon-all{
            font-size: 24px;
          }
        }
      }
    }
    .advertise{
      float: left;
      width: 100%;
      height: 80px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .news{
      width: 100%;
      li{
        float: left;
        width: 262px;
        height: 308px;
        background: #f4f3f3;
        margin-right: 17px;
        margin-bottom: 10px;
        img{
          width: 100%;
          height: 195px;
        }
        h3{
          font-size: 16px;
          font-weight: 600;
          height: 75px;
          line-height: 27px;
          padding:0 10px;
        }
        p{
          padding:0 10px;
          .date{
            color:#7e7e7e;
            margin-left: 5px;
          }
        }
      }
    }
    .newsList{
      li{
        float: left;
        width: 542px;
        height: 50px;
        line-height: 50px;
        border-bottom:1px solid #ebebeb;
        margin-right: 15px;
        .iconfont{
          float: left;
          color:#f23223;
        }
        h3{
          float: left;
          margin-left: 15px;
          font-size: 16px;
          font-weight: 600;
        }
        span{
          float: right;
          color:#7e7e7e;
        }
      }
      li:hover h3{
        color:#27cc9f;
      }
    }
    .radiesImg{
      position: relative;
      width: 100%;
      height: 222px;
      img{
        width: 100%;
        height: 100%;
      }
      span{
        position: absolute;
        display: inline-block;
        left: 0;
        bottom: 0;
        width: 352px;
        height: 40px;
        line-height: 40px;
        padding:0 20px;
        color:#fff;
        background: rgba(0,0,0,.35);
      }
    }
    .raidersList{
      width: 100%;
      li{
        width: 100%;
        height: 44px;
        line-height: 44px;
        border-bottom:1px solid #e4e4e4;
        .iconfont{
          float: left;
          width: 16px;
          height: 100%;
          color:#f23223;
        }
        p{
          float: left;
          margin-left: 15px;
        }
      }
    }
    .website{
      padding:34px 0;
      width: 100%;
      height: 130px;
      background: #f6f6f6;
      h2{
        color:#838383;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 32px;
      }
      ul{
        padding-bottom: 34px;
        border-bottom:1px solid #e5e5e5;
        li{
          float: left;
          line-height: 26px;
          margin-right: 10px;
          a{
            color:#7e7e7e;
          }
        }
      }
    }
  }
</style>
