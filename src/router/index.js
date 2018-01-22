import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    //
    {
      path: '/',
      redirect: 'view_login'
    },
    {
      path: '/view_login',
      name: 'view_login',
      component: resolve => require(['../views/view_login/ViewLogin.vue'], resolve)
    },
    {
      path: '/view_home',
      component: resolve => require(['../views/view_home/ViewHome.vue'], resolve),
      children: [{
        path: '/dash_board',
        component: resolve => require(['../views/view_home/dash_board/DashBoard.vue'], resolve)
      }, {
        path: '/demo_table',
        component: resolve => require(['../views/view_home/demo_table/DemoTable.vue'], resolve)
      }]
    }
  ]
})
