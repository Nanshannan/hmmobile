import Vue from 'vue'
import Vuex from 'vuex'
// 导入用户模块
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user // 挂在用户模块
  }
})
