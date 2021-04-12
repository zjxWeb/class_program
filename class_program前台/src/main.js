import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import http from '../src/api/http.js'
import rightMenu from "rightmenu"
// 漂浮的小星星
import particles from 'particles.js'

// 导入字体图标
import './assets/fonts/iconfont.css'

// 引入echarts
import echarts from 'echarts'
// echarts 动画
import '../static/chartChange/echarts-tooltip-carousel.js'
import scroll from 'vue-seamless-scroll'//无缝滚动

// 导入全局css文件
import '../src/assets/css/global.scss'
import '../src/assets/css/element.css'
import '../src/assets/css/index.scss'

import axios from 'axios'
import './plugins/element.js'

import '../static/data'

import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import VueCookies from 'vue-cookies'


Es6Promise.polyfill()
// cookie过期时间
window.$cookies.config('6000s')

// 配置请求的根路径
axios.defaults.baseURL = 'http://localhost:3000/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须return config
  return config
})

Vue.use(scroll)
Vue.use(rightMenu)
Vue.use(particles)
Vue.use(ElementUI)
Vue.use(http);
Vue.use(VueCookies)

Vue.config.productionTip = false
Vue.prototype.echarts = echarts
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
