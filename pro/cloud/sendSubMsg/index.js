const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})

exports.main = async (event, context) => {
  // const {OPENID} = cloud.getWXContext()
  try {
    const result = await cloud.openapi.subscribeMessage.send({
        "touser": 'oWh6F6_eEG-pN2QtPL0fYDRJq9KA',
        "page": 'index',
        "templateId": 'IxziSPpyaNVxA-oiyJQJCPNW0pgtpvCqc6frOR7bhww',
        // "miniprogramState": 'developer',
        // "lang": 'zh_CN',
        "data": {
          "amount4": { // 订单金额
            "value": '100元'
          },
          "thing6": { // 订单内容
            "value": '汉堡包'
          },
          "name8": { // 联系人姓名
            "value": 'wjm'
          },
          "phone_number16": { // 联系人手机号
            "value": '17872911302'
          },
          "thing15": { // 取货地点
            "value": '爱上了和公平和嘎'
          }
        },
      })
    return result
  } catch (err) {
    return err
  }
} 