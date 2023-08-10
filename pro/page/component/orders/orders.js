// page/component/orders/orders.js
Page({
  data:{
    address: {},
    hasAddress: false,
    total: 0,
    orders: [], // 订单内容
    carts: [], // 购物车内容
    content: '', // 商品内容和商品数量
    // orders:[
    //     {id:1,title:'新鲜芹菜 半斤',image:'/image/s5.png',num:4,price:0.01},
    //     {id:2,title:'素米 500g',image:'/image/s6.png',num:1,price:0.03}
    //   ]
  },

  onReady() {
    this.getTotalPrice();

    this.getOrdersContent();
  },
  
  onShow:function(){
    const self = this;
    wx.getStorage({
      key:'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      },
    })

    wx.getStorage({ // 将购物车的内容在此处显示
      key:'card',
      success: function (res) {
        self.setData({
          orders: res.data
        })
      }
    })
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
    this.setData({
      total: total
    })
  },

  /**
   * 组合订单内容
   */
  getOrdersContent() {
    let orders = this.data.orders;
    let content = '';
    for (let i = 0; i < orders.length; i ++) {
      // console.log("orders内容" + orders[i]);
      content += orders[i].title;
      content += '*';
      content += orders[i].num;
      content += ';';
    }

    this.setData({
      content: content
    })

    // console.log("订单内容" + content);
    // console.log("电话" + this.data.address.phone);
  },

  toPay() {
    // 下单之前对用户信息是否填写进行判断
    if (!(this.data.hasAddress)) {
      console.log('地址' + this.data.hasAddress);
      wx.showModal({
        title: '提示',
        content: '请填写地址信息',
        text:'center',
        complete() {
          wx.switchTab({
            url: '/page/component/ordes/ordres'
          })
        }
      })
      this.onShow();

    } else {
      // 下单成功提示
      wx.showToast({
        title: 'title',
        complete() {
            wx.switchTab({
            url: '/page/component/index'
          })
        },
      })
      // ({
      //   title: '提示',
      //   content: '下单成功',
      //   text:'center',
      //   complete() {
      //       wx.switchTab({
      //       url: '/page/component/index'
      //     })
      //   },
      // })

      // 在点击下单后 对购物车中的内容进行清空
      try {
        wx.removeStorageSync('card');
        console.log('删除成功');
      } catch(e) {
        console.log('删除失败', e);
      }

      this.subscribeMessage();

      this.sendSubMsgTab(); // 调用云函数

      // console.log(this.data.address);
      // console.log(this.data.orders);
      // 将订单添加到数据库
      // let ord = this.data.orders;
      // wx.cloud.database().collection('buy_orders').add({
      //   data: {
      //     // 用户信息
      //     userName: this.data.address.name,
      //     userPhon: this.data.address.phon,
      //     userAddress: this.data.address.detail,
      //   },
      // }).then(res=>{
      //   wx.showToast({
      //     title: '订单已发送',
      //   })
      // })

      // ord.forEach(product=>{
      //   wx.cloud.database().collection('buy_orders').add({
      //     data: product
      //   }).then(res => {
      //     console.log('插入成功', res)
      //   }).catch(err => {
      //     console.error('插入失败', err)
      //   })
      // })
      
      



      // 商品信息
      // Promise.all(ord.map(item => wx.cloud.database().collection('buy_orders').add({ data: item })))
      // .then(res => {
      //     console.log('订单商品添加成功', res);
      // })
      // .catch(err => {
      //   console.error('订单商品添加失败', err);
      // })

    }
  },

  subscribeMessage() { // 订阅消息
    wx.requestSubscribeMessage({
      tmplIds: [
          'IxziSPpyaNVxA-oiyJQJCPNW0pgtpvCqc6frOR7bhww'
      ],
      success(res) {
        console.log('订阅消息成功', res)
      },
      fail(res) {
        console.log('订阅消息失败', res)
      }
    })
  },

  sendSubMsgTab() { // 调用订阅云函数
    wx.cloud.callFunction({ // 发送给用户
      name: "sendSubMsg",
      data: { // 云函数中传入参数
        /**
         * 用户信息
         */
        // 用户姓名
        userName: this.data.address.name,
        // 用户电话号码
        userPhone: this.data.address.phone,
        // 用户地址
        userAddress: this.data.address.detail,

        /**
         * 订单信息
         */
        // 订单金额
        order_total: this.data.total,
        // 订单内容
        order_content: this.data.content,
      },

      success(res) {
        console.log("调用下发服务通知云函数成功", res)
      },
      fail(err) {
        console.log("调用下发服务通知云函数失败", err)
      }
    }),

    wx.cloud.callFunction({ // 发送给管理员
      name: "sendMsg_to_admin",
      data: { // 云函数中传入参数
        /**
         * 用户信息
         */
        // 用户姓名
        userName: this.data.address.name,
        // 用户电话号码
        userPhone: this.data.address.phone,
        // 用户地址
        userAddress: this.data.address.detail,

        /**
         * 订单信息
         */
        // 订单金额
        order_total: this.data.total,
        // 订单内容
        order_content: this.data.content,
      },

      success(res) {
        console.log("调用下发服务通知云函数成功", res)
      },
      fail(err) {
        console.log("调用下发服务通知云函数失败", err)
      }
    })
  },
})

// exports.main = async (event, context) => {

// }