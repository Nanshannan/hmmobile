import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/vant-ui.js'
import 'amfe-flexible' // 根据屏幕视口宽度动态设置html的font-size大小
import '@/styles/index.scss'
// import http from '@/utils/request'
// Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
