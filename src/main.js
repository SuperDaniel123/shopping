// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import './common/fonts/font-awesome/css/font-awesome.min.css'
import axios from 'axios'
axios.defaults.baseURL='/';
Vue.prototype.$http = axios;
Vue.use(axios);
//loading组件激活
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)

fastclick.attach(document.body)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
