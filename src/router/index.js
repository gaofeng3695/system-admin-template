import Vue from 'vue'
import Router from 'vue-router'
import view02 from './../views/View02.vue'
import upload from './../views/upload.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    //
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../views/Login.vue'], resolve)
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['../components/Home.vue'], resolve),
      children: [
        // //
        // {
        //   path: '/',
        //   component: resolve => require(['../views/View01.vue'], resolve)
        // },
        {
          path: 'view02',
          name: 'view02',
          component: resolve => require(['../views/View02.vue'], resolve)
        },
        {
          path: 'alias',
          component: view02,
          alias: 'view02'
        },
        {
          path: 'upload',
          component: upload
        }
        // {
        //   path: '/vuetable',
        //   component: resolve => require(['../components/page/VueTable.vue'], resolve) // vue-datasource组件
        // },
        // {
        //   path: '/baseform',
        //   component: resolve => require(['../components/page/BaseForm.vue'], resolve)
        // },
        // {
        //   path: '/vueeditor',
        //   component: resolve => require(['../components/page/VueEditor.vue'], resolve) // Vue-Quill-Editor组件
        // },
        // {
        //   path: '/markdown',
        //   component: resolve => require(['../components/page/Markdown.vue'], resolve) // Vue-Quill-Editor组件
        // },
        // {
        //   path: '/upload',
        //   component: resolve => require(['../components/page/Upload.vue'], resolve) // Vue-Core-Image-Upload组件
        // },
        // {
        //   path: '/basecharts',
        //   component: resolve => require(['../components/page/BaseCharts.vue'], resolve) // vue-schart组件
        // },
        // {
        //   path: '/drag',
        //   component: resolve => require(['../components/page/DragList.vue'], resolve) // 拖拽列表组件
        // }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  const nextRoute = ['index', 'good-list', 'good-detail', 'cart', 'profile']
  let isLogin = localStorage.getItem('ms_username')// 是否登录
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
