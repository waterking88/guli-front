import request from '@/utils/request'
const api_name = '/ucenterservice/ucenter-member'
export default {
  //登录
  submitLogin(userInfo) {
    return request({
      url: `${api_name}/login`,
      method: 'post',
      data: userInfo
    })
  },
  //根据token获取用户信息
  getLoginInfo() {
    return request({
      url: `${api_name}/auth/getLoginInfo`,
      method: 'get'
      // headers: {'token': cookie.get('guli_token')}
    })
    //headers: {'token': cookie.get('guli_token')}
  }
}
