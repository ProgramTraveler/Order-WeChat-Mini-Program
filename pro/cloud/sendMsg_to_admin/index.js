const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})
/**
 * 给管理员发布订阅消息
 */
exports.main = async (event, context) => {
  // console.log("传入的参数为", event);
  // const wxContext = cloud.getWXContext(); // 获取用户的 openid
  
  const userName = event.userName;
  const userPhone = event.userPhone;
  const userAddress = event.userAddress;

  const order_total = event.order_total;
  const order_content = event.order_content;

  try {
    const result = await cloud.openapi.subscribeMessage.send({
        "touser": 'oWh6F6_nmm6LYSWBGD0h0v9MwS4U',
        // "touser": wxContext.OPENID,
        "page": 'index',
        "templateId": 'IxziSPpyaNVxA-oiyJQJCPNW0pgtpvCqc6frOR7bhww',
        // "miniprogramState": 'developer',
        // "lang": 'zh_CN',
        "data": {
          "amount4": { // 订单金额
            "value": order_total + '元'
            // "value": '100'
          },
          "thing6": { // 订单内容
            "value": order_content
            // "value": "测试"
          },
          "name8": { // 联系人姓名
            "value": userName
            // "value": 'wjm'
          },
          "phone_number16": { // 联系人手机号
            "value": userPhone
            // "value": '120390545'
          },
          "thing15": { // 取货地点
            "value": userAddress
            // "value": '测试'
          }
        },
      })
    return result.errCode
  } catch (err) {
    return err
  }
} 