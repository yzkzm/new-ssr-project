import Vue from 'vue'
import Router from 'vue-router'
import views from '../views'
Vue.use(Router)

// home
const login = r => require.ensure([], () => r(views.Login, 'home'))
const forgetPwd = r => require.ensure([], () => r(views.ForgetPwd, 'home'))
const register = r => require.ensure([], () => r(views.Register, 'home'))
const home = r => require.ensure([], () => r(views.Home, 'home'))
const main = r => require.ensure([], () => r(views.Main, 'home'))
const notFound = r => require.ensure([], () => r(views.NotFound, 'home'))

const commitApp = r => require.ensure([], () => r(views.CommitApp, 'home'))
const applyCooperation = r => require.ensure([], () => r(views.ApplyCooperation, 'home'))

//game
const game = r => require.ensure([], () => r(views.Game, 'game'))

const software = r => require.ensure([], () => r(views.Software, 'software'))

const ranking = r => require.ensure([], () => r(views.Ranking, 'ranking'))

const recommend = r => require.ensure([], () => r(views.Recommend, 'recommend'))

const topic = r => require.ensure([], () => r(views.Topic, 'topic'))

const raiders = r => require.ensure([], () => r(views.Raiders, 'raiders'))

const news = r => require.ensure([], () => r(views.News, 'news'))


const routes = [
  {
    path: '/404',
    component: notFound
  },
  {
    path: '/',
    component: main,
    children: [
      {
        path: '/login',
        name: 'login',
        component: login
      },
      {
        path: '/forgetPwd',
        name: 'forgetPwd',
        component: forgetPwd
      },
      {
        path: '/register',
        name: 'register',
        component: register
      },
      {
        path: '',
        redirect: to => {
          return 'home'
        }
      },
      {
        path: 'home',
        component: home
      },
      {
        path: 'commitApp',
        name: 'commitApp',
        component: commitApp
      },
      {
        path: 'applyCooperation',
        name: 'applyCooperation',
        component: applyCooperation
      },
      {
        path: 'game',
        component: game
      },
      {
        path: 'software',
        component: software
      },{
        path: 'ranking',
        component: ranking
      },
      {
        path: 'recommend',
        component: recommend
      },
      {
        path: 'topic',
        component: topic
      },
      {
        path: 'raiders',
        component: raiders
      },
      {
        path: 'news',
        component: news
      }
    ]
  }
]

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {  // 切换新路由，实现重载页面的效果
      if (savedPosition) {
        savedPosition = {x: 0, y: 0}
        return savedPosition
      } else if (to.hash) {
        return {selector: to.hash}
      } else {
        return {x: 0, y: 0}
      }
    }
  })
}


