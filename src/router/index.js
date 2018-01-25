import Vue from 'vue';
import Router from 'vue-router';
import jasStorage from '../assets/js/jas-storage';
Vue.use(Router);

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
        path: '',
        redirect: 'dash-board'
      }, {
        path: 'dash-board',
        component: resolve => require(['../views/view-home/dash-board/DashBoard.vue'], resolve)
      }, {
        path: 'demo-table',
        component: resolve => require(['../views/view-home/demo-table/DemoTable.vue'], resolve)
      }]
    },
    { // 错误路径重定向到登录页面
      path: '*',
      redirect: '/view-login'
    }
  ]
});

router.beforeEach((to, from, next) => { // 路由守卫
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  let isLogin = jasStorage.get('token', 1000 * 60 * 60 * 24); // 是否登录
  if (to.path.indexOf('view-home') !== -1 && !isLogin) { // 主页并且没有登录
    next('/view-login'); // 去登陆
    return;
  }
  if (to.path.indexOf('view-login') !== -1 && isLogin) { // 登录并且已登录
    next('/view-home'); // 去主页
    return;
  }
  next(); // 继续
});

export default router;
