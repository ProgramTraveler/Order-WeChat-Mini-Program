// page/component/orders/orders.js
Page({
  data:{
    address: {},
    hasAddress: false,
    total: 0,
    orders: [], // 订单内容
    carts: [], // 购物车内容
    content: '', // 商品内容和商品数量
    datatime: '', // 下单时间
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

    // 合并相同的内容
    for (let i = 0; i < orders.length; i ++) {
      for (let j = i + 1; j < orders.length; j ++) {
        if (orders[i].title == orders[j].title) {
          orders[i].num += orders[j].num;

          // 移除相同的元素
          orders.splice(j, 1);
        }
      }
    }

    for (let i = 0; i < orders.length; i ++) {
      // console.log("orders内容" + orders[i]);
      content += orders[i].title.substring(0, 1);
      if (orders[i].title.indexOf('(') > 0) {
        content += '*';
        content += orders[i].title.substring(orders[i].title.indexOf('(') + 1, orders[i].title.indexOf('(') + 2);
      }
      content += 'x';
      content += orders[i].num;
      content += '；';
    }

    this.setData({
      content: content
    })
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

      /**
       * 获取时间
       */
      let dataTime; // 下单时间
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes()<10?'0'+new Date().getMinutes():
        new Date().getMinutes();
      let ss = new Date().getSeconds()<10?'0'+new Date().getSeconds():
        new Date().getSeconds();
      dataTime = `${yy}-${mm}-${dd} ${hh}:${mf}:${ss}`;
      this.setData({
        datatime: dataTime
      })

      // 将订单添加到 订单管理 数据库
      wx.cloud.database().collection('buy_orders').add({
        data: {
          // 订单总价
          total: this.data.total,
          // 订单内容
          content: this.data.content,
          // 订单时间
          time: dataTime,
        },
      })

      // 将下单用户信息放入 用户集合数据库
      wx.cloud.database().collection('user').add({
        data: {
          // 用户信息
          name: this.data.address.name,
          phone: this.data.address.phone,
          address: this.data.address.detail,
          time: dataTime,
        },
      })

      if (this.data.content.length > 20) {
        wx.showModal({
          title: '提示',
          content: '购物车中最多三种不同的物品',
          complete() {
            wx.switchTab({
              url: '/page/component/cart/cart'
            })
          }
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '下单完成',
          complete() {
            setTimeout(function() {
              wx.switchTab({
                url: '/page/component/index'
              })
            }, 1000) 
          }
        })
      }

      this.sendSubMsgTab(); // 调用云函数
      this.subscribeMessage(); // 订阅请求
    }
  },

  subscribeMessage() { // 订阅消息
    // wx.showModal({
    //   title: '提示',
    //   content: '请点击订阅消息 发送订单',
    //   text: 'center',
    //   complete() {
    //     wx.switchTab({
    //       url: '/page/component/index'
    //     })
    //     // setTimeout(function() {
    //     //   wx.switchTab({
    //     //     url: '/page/component/index'
    //     //   })
    //     // }, 3000);
    //   }
    // })

      wx.requestSubscribeMessage({
        tmplIds: [
            'IxziSPpyaNVxA-oiyJQJCPNW0pgtpvCqc6frOR7bhww'
        ],
        success(res) {
          console.log('订阅模板消息成功', res)
        },
        fail(res) {
          console.log('订阅模板消息失败', res)
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
        // console.log("调用下发服务通知云函数成功", res)
        // 下单成功提示

        // 在点击下单后 对购物车中的内容进行清空
        try {
          wx.removeStorageSync('card');
          console.log('删除成功');
        } catch(e) {
          console.log('删除失败', e);
        }

      },
      fail(err) {
        console.log("调用下发服务通知云函数失败", err)
        // 下单失败提示
        wx.showToast({
          title: '下单失败',
          icon: 'error',
          complete() {
              wx.switchTab({
              url: '/page/component/orders/orders'
            })
          },
        })
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
    })
  },
})