import http from '@/utils/request'
// import store from '@/store'
// 登录功能
export const reqLogin = (data) => {
  return http({
    method: 'post',
    url: '/v1_0/authorizations',
    data
  })
}
// 获取用户信息
export const reqGetUserInfo = () => {
  return http({
    method: 'get',
    url: 'v1_0/user/profile'
    // headers: {
    //   Authorization: `Bearer ${store.state.user.tokenInfo.token}`
    // }

  })
}
// 获取粉丝列表
export const reqGetUserFans = () => {
  return http({
    method: 'get',
    url: 'v1_0/user/followings'
    // headers: {
    //   Authorization: `Bearer ${store.state.user.tokenInfo.token}`
    // }
  })
}



