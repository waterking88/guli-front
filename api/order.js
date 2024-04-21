import request from '@/utils/request'
export default {
  //1、创建订单
  createOrder(cid) {
    return request({
      url: '/orderservice/t-order/createOrder/' + cid,
      method: 'post'
    })
  },
  //2、根据id获取订单
  getById(cid) {
    return request({
      url: '/orderservice/t-order/getOrder/' + cid,
      method: 'get'
    })
  },
  //3、生成微信支付二维码
  createNative(orderNo) {
    return request({
      url: '/orderservice/t-pay-log/createNative/' + orderNo,
      method: 'get'
    })
  },
  //4、根据id获取订单支付状态
  queryPayStatus(orderNo) {
    return request({
      url: '/orderservice/t-pay-log/queryPayStatus/' + orderNo,
      method: 'get'
    })
  }
}
