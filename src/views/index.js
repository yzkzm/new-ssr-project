/**
 * Created by qx on 2017/7/14.
 */
module.exports = {
  Login: require('./login/Login'), // 登录
  ForgetPwd: require('./login/forgetPwd'), // 忘记密码
  Register: require('./register/Register'), // 注册
  Home: require('./home/Home'), // 首页
  CommitApp: require('./home/CommitApp.vue'), // 首页
  ApplyCooperation: require('./home/Apply-cooperation.vue'), // 首页
  Main: require('./Main'),
  NotFound: require('./NotFound'),
  Game: require('./categoryList/game/Game'), // 游戏
  Software: require('./categoryList/software/Software'), // 软件
  Ranking: require('./ranking/Rangking'), // 排行榜
  Recommend: require('./recommend/Recommend'),  // 推荐
  Topic: require('./topic/Topic'), // 专题
  Raiders: require('./articleList/raiders/Raiders'), //攻略
  News: require('./articleList/news/News')  // 新闻
}
