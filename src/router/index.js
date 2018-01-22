import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [ //
    {
      path: '/',
      redirect: 'view-login'
    },
    {
      path: '/view-login',
      component: resolve => require(['../views/view-login/ViewLogin.vue'], resolve)
    },
    {
      path: '/view-home',
      component: resolve => require(['../views/view-home/ViewHome.vue'], resolve),
      children: [{
        path: 'dash-board',
        component: resolve => require(['../views/view-home/dash-board/DashBoard.vue'], resolve)
      },
      {
        path: 'demo-table',
        component: resolve => require(['../views/view-home/demo-table/DemoTable.vue'], resolve)
      }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  const nextRoute = ['view-home', 'dash-board', 'demo-table']
  let isLogin = localStorage.getItem('ms_username') // 是否登录
  const url = {}
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.join(',').indexOf(to.name) >= 0) {
    if (!isLogin) {
      url['path'] = '/login'
    }
  }
  // 已登录状态；当路由到login时，跳转至home
  if (to.name === 'login') {
    if (isLogin) {
      url['path'] = '/index'
    }
  }
  next(url)
})

export default router
