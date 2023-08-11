//获取应用实例
// import {
//   getSellers
// } from '../utils/apis'

Page({
  data: {
    // 首页轮播
    imgUrls: [
      // '/image/b1.jpg',
      // '/image/b2.jpg',
      'https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/16781691721555919_麻薯芋泥冰.jpg?sign=7fe28c444a2860d49151f4a624d5291c&t=1691721648',
      'https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/18061691721583780_西瓜耶耶.jpg?sign=5dd0419ed60fc9fc34d9a6dba0d05b2f&t=1691721669',
      'https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/19091691721598921_杨枝甘露.jpg?sign=a4f5b0aabf7493c334e192ac87bbe5c3&t=1691721808'
    ],

    // 分类数据
    category: [
      {
        "category_id": "1",
        // "title": "本地特产",
        // "icon": "/image/category/1.png"
        "icon": "https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/13871691721987436_1.png?sign=d59eaeb84805b7d968249ae238b51547&t=1691722112"
      },
      {
        "category_id": "2",
        // "title": "美食外卖",
        // "icon": "/image/category/2.png"
        "icon": "https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/15631691721997052_2.png?sign=dae2889a1fbc1134d28534ee70a35d0a&t=1691722128"
      },
      {
        "category_id": "3",
        // "title": "甜品蛋糕",
        // "icon": "/image/category/3.png"
        "icon": "https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/14631691722007066_3.png?sign=3b5c772f87c2be6b9f8e63f5662a0cae&t=1691722139"
      },
      {
        "category_id": "4",
        // "title": "果蔬生鲜",
        "icon": "https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/16071691722016507_4.png?sign=6ec606314b2103868a53826890432711&t=1691722147"
      },
      {
        "category_id": "5",
        // "title": "超市便利",
        "icon": "https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/16211691722026009_5.png?sign=e18760f716e451224c2192b251e830cd&t=1691722158"
      },
      {
        "category_id": "6",
        // "title": "进口产品",
        "icon": "https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/18651691722036353_6.png?sign=6cc414e09445c4537f5c9e91224c7174&t=1691722163"
      },
      {
        "category_id": "7",
        // "title": "优惠活动",
        "icon": "https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/19381691722044106_7.png?sign=6b8eb926290f08ce16dfab1a1efbb38e&t=1691722170"
      },
      {
        "category_id": "8",
        // "title": "全部分类",
        "icon": "https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/14811691722051171_8.png?sign=4d9f4924c7807bcd53a55f495fe5e43d&t=1691722176"
      }
    ],
    // 商店数据
  //   business: [
  //     { 
  //       "id":'bk',
  //       "title": "汉堡王",
  //       "sellcount": 3600,
  //       "startsell": 30,
  //       "packagesell": 5,
  //       "shopimg": "../../image/bk.png",
  //       "pmin": 30,
  //       "dist": 450,
  //       "shopicon": [
  //         "../../image/icon/准.png",
  //         "../../image/icon/减.png",
  //         "../../image/icon/折.png",
  //         "../../image/icon/特.png",
  //       ]
  //     },
  //     {
  //       "id": 'ycyk',
  //       "title": "优城悦客",
  //       "sellcount": 3720,
  //       "startsell": 25,
  //       "packagesell": 0,
  //       "shopimg": "../../image/ye.png",
  //       "pmin": 23,
  //       "dist": 550,
  //       "shopicon": [
  //         "../../image/icon/折.png",
  //         "../../image/icon/特.png",
  //       ]
  //     },
  //     {
  //       "id":'hdl',
  //       "title": "海底捞",
  //       "sellcount": 12360,
  //       "startsell": 120,
  //       "packagesell": 10,
  //       "shopimg": "../../image/hdl.png",
  //       "pmin": 36,
  //       "dist": 480,
  //       "shopicon": [
  //         "../../image/icon/减.png",
  //         "../../image/icon/折.png",
  //       ]
  //     },
  //     {
  //       "id": 'dj',
  //       "title": "笃记",
  //       "sellcount": 13720,
  //       "startsell": 120,
  //       "packagesell": 0,
  //       "shopimg": "../../image/dj.jpg",
  //       "pmin": 23,
  //       "dist": 20,
  //       "shopicon": [
  //         "../../image/icon/折.png",
  //         "../../image/icon/特.png",
  //         "../../image/icon/减.png",
          
  //       ]
  //     },
  //     {
  //       "id": 'xyx',
  //       "title": "鲜芋仙",
  //       "sellcount": 1720,
  //       "startsell": 20,
  //       "packagesell": 0,
  //       "shopimg": "../../image/xyx.jpg",
  //       "pmin": 20,
  //       "dist": 220,
  //       "shopicon": [
  //         "../../image/icon/折.png",
  //         "../../image/icon/减.png",

  //       ]
  //     },
  //   ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
  },

  onLoad() {
    // wx.cloud.database().collection('buy_goods').get()
    // .then(res=>{
    //   console.log(res)
    //   this.setData({ // 进行绑定
    //     goodsList: res.data // 获取的商品数组
    //   })
    // })
  },

  onShow() { // 实时刷新
    wx.cloud.database().collection('buy_goods').get()
    .then(res=>{
      console.log(res)
      this.setData({ // 进行绑定
        goodsList: res.data // 获取的商品数组
      })
    })
  },

  redTo: function(e) {
    let shopnum = e.currentTarget.dataset.shop // 获取设置的 data-shop="{{item.num}}" 的值
    console.log(shopnum)
    wx.navigateTo({ // 页面跳转
      url: 'category/category?d='+shopnum // 将 shopnum 作为参数 d 传入
      // 直接跳转到商品详情页面
      // url: '../details/details?d='+shopnum
    })
  },
})