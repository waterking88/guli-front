import request from '@/utils/request'
const api_name = '/eduservice/index'
export default {
  getList() {
    return request({
      url: `${api_name}/index`,
      method: 'get'
    })
  }
}
