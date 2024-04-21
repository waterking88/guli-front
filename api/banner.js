import request from '@/utils/request'
const api_name = '/cmsservice/banner'
export default {
  getList() {
    return request({
      url: `${api_name}/getAllBanner`,
      method: 'get'
    })
  }
}
