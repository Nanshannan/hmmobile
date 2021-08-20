// 关于用户的模块，每个模块都有自己的state,mutations  actions getters
import { setToken, getToken } from '@/utils/storage'
const state = {
  tokenInfo: getToken()
  // tokenInfo: JSON.parse(localStorage.getItem('tokenInfo')) || {}
}
const mutations = {
  // 设置用户的token
  setTokenInfo (state, obj) {
    state.tokenInfo = obj
    setToken(obj)
    // localStorage.setItem('tokenInfo', JSON.stringify(obj))
  }
}
const actions = {}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}
