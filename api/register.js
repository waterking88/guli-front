import request from '@/utils/request'
const api_name = '/ucenterservice/ucenter-member'
export default {
  //根据手机号码发送短信
  getMobile(mobile) {
    return request({
      url: `/api/msm/send/${mobile}`,
      method: 'get'
    })
  },
  //用户注册
  submitRegister(formItem) {
    return request({
      url: `${api_name}/register`,
      method: 'post',
      data: formItem
    })
  }
}
