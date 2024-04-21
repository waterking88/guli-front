import request from '@/utils/request'
const api_name = '/eduservice/coursefront'
export default {
  //条件分页查询课程
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  // 获取所有课程分类
  getAllSubject() {
    return request({
      url: `/eduservice/edu-subject/getNestedTreeList`,
      method: 'get'
    })
  },
  getById(courseId) {
    return request({
      url: `${api_name}/getFrontCourseInfo/${courseId}`,
      method: 'get'
    })
  }
}
