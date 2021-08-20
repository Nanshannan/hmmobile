// 这个模块是封装axios实例模块
import axios from 'axios'
import store from '@/store/index'
// 创建实例
const http = axios.create({
  baseURL: 'http://toutiao-app.itheima.net'
})
// Add a request interceptor
http.interceptors.request.use(function (config) {
  // config是一个对象，包含了发送的求情信息，里面有一个headers几点
  // Do something before request is sent
  const token = store.state.user.tokenInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${store.state.user.tokenInfo.token}`
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
export default http
