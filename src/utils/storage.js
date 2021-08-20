// 本次存储模块

const TokenKey = 'hmmobile-token'
// 存token
export const setToken = (tokenInfo) => {
  localStorage.setItem(TokenKey, JSON.stringify(tokenInfo))
}
// 取token
export const getToken = () => {
  return JSON.parse(localStorage.getItem(TokenKey)) || {}
}
// 移除token
export const removeToken = () => {
  localStorage.removeItem(TokenKey)
}
