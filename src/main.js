// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import './common/fonts/font-awesome/css/font-awesome.min.css'
import store from './store'
import './common/js/axios'

//loading组件激活
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)

fastclick.attach(document.body)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
