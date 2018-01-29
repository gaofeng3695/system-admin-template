// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import BaiduMap from 'vue-baidu-map';

import './assets/scss/element-variables.scss';
import jasStorage from './assets/js/jas-storage';
import jasHttp from './assets/js/jas-http';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'ggGUMM84vpa9GRP6HkOvt2H5UneQeXCQ'
});

Vue.prototype.$jasHttp = jasHttp;
Vue.prototype.$jasStorage = jasStorage;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
