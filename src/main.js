// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';

import './assets/scss/element-variables.scss';
import jasStorage from './assets/js/jas-storage';
import jasHttp from './assets/js/jas-http';

Vue.config.productionTip = false;

Vue.use(ElementUI);

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
