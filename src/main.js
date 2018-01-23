// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import storage from './assets/js/storage';

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.prototype.$http = axios;
Vue.prototype.$storage = storage;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
