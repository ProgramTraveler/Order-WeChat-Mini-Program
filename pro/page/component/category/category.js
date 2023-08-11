Page({
    data: {
        detail:[],
        curIndex: 0,
        isScroll: false,
        toView: 'guowei'
    },
    onLoad: function (options) {
      // 判断进入路由参数，进行相应路由渲染
      // 注意传入的 num 是 string 类型的
      if (options.d === '1001') {
        console.log('冰沙')
        this.setData({
          category: [
            { name: '冰沙', id: 'bingsha' },
            // { name: '套餐', id: 'taocan' },
            // { name: '早餐', id: 'zaocan' },
            // { name: '小食', id: 'xiaoshi' },
            // { name: '甜点', id: 'tiandian' },
            // { name: '饮料', id: 'yinliao' }
          ],
          detail: [
            {
              // id: "hanbao",
              id: "bingsha",
              banner: 'https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/18731691720325960_IMG_20230811_101557.JPG?sign=1a866b50cd2ec1b5a03a2f3f3efda2c3&t=1691721025',
              // cate: '汉堡',
              cate:'冰沙',
              detail: [
                {
                  id: 'bs1',
                  thumb: "https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/16781691721555919_麻薯芋泥冰.jpg?sign=d39bdf7f241f470d93e4abae2eb87bf1&t=1691723264",
                  name: "麻薯芋泥冰",
                  price: 15,
                  stock: '有货',
                  detail: '这里是麻薯芋泥冰详情。',
                  parameter: 'test',
                  service: '不支持退货'
                },
                {
                  id: 'bs2',
                  thumb: "https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/18061691721583780_西瓜耶耶.jpg?sign=831dfb11fcaecbc0f6ed9ab0a5fedbea&t=1691723307",
                  name: "西瓜耶耶(中杯)",
                  price: 8,
                  stock: '有货',
                  detail: '这里是西瓜耶耶详情。',
                  parameter: 'test',
                  service: '不支持退货'
                },
                {
                  id: 'bs3',
                  thumb: "https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/19091691721598921_杨枝甘露.jpg?sign=a9ae835b775fb86e63f422ab90962a06&t=1691723340",
                  name: "杨枝甘露(中杯)",
                  price: 8,
                  stock: '有货',
                  detail: '这里是杨枝甘露详情。',
                  parameter: 'test',
                  service: '不支持退货'
                },
                // {
                //   id: 'bs4',
                //   thumb: "https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/16781691721555919_麻薯芋泥冰.jpg?sign=d39bdf7f241f470d93e4abae2eb87bf1&t=1691723264",
                //   name: "麻薯芋泥冰(大杯)",
                //   price: 12,
                //   stock: '有货',
                //   detail: '这里是麻薯芋泥冰详情。',
                //   parameter: 'test',
                //   service: '不支持退货'
                // },
                {
                  id: 'bs4',
                  thumb: "https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/18061691721583780_西瓜耶耶.jpg?sign=831dfb11fcaecbc0f6ed9ab0a5fedbea&t=1691723307",
                  name: "西瓜耶耶(大杯)",
                  price: 12,
                  stock: '有货',
                  detail: '这里是西瓜耶耶详情。',
                  parameter: 'test',
                  service: '不支持退货'
                },
                {
                  id: 'bs5',
                  thumb: "https://636c-cloud1-8g9j0qpq33a49127-1319768573.tcb.qcloud.la/kit-cms-upload/2023-08-11/19091691721598921_杨枝甘露.jpg?sign=a9ae835b775fb86e63f422ab90962a06&t=1691723340",
                  name: "杨枝甘露(大杯)",
                  price: 12,
                  stock: '有货',
                  detail: '这里是杨枝甘露详情。',
                  parameter: 'test',
                  service: '不支持退货'
                }
              ]
            },
            // {
            //   id: "taocan",
            //   banner: '../../../image/bk/banner.png',
            //   cate: '套餐',
            //   detail: [
            //     {
            //       id: 'bk4',
            //       thumb: "../../../image/bk/c4.png",
            //       name: "小霸王套餐",
            //       price: 45,
            //       stock: '有货',
            //       detail: '这里是王堡详情。',
            //       parameter: 'test',
            //       service: '不支持退货'
            //     },
            //     {
            //       id: 'bk5',
            //       thumb: "../../../image/bk/c5.png",
            //       name: "美式鸡排套餐",
            //       price: 55,
            //       stock: '有货',
            //       detail: '这里是美式鸡排套餐详情。',
            //       parameter: 'test',
            //       service: '不支持退货'
            //     },
            //     {
            //       id: 'bk6',
            //       thumb: "../../../image/bk/c6.png",
            //       name: "鸡腿堡套餐",
            //       price: 35,
            //       stock: '有货',
            //       detail: '这里是王堡详情。',
            //       parameter: 'test',
            //       service: '不支持退货'
            //     }
            //   ]
            // },
            // {
            //   id: "zaocan",
            //   banner: '../../../image/bk/banner.png',
            //   cate: '早餐',
            //   detail: [
            //     {
            //       id: 'bk7',
            //       thumb: "../../../image/bk/c7.png",
            //       name: "猪肉可颂",
            //       price: 8,
            //       stock: '有货',
            //       detail: '这里是猪肉可颂详情。',
            //       parameter: 'test',
            //       service: '不支持退货'
                  
            //     },
            //     {
            //       id: 'bk8',
            //       thumb: "../../../image/bk/c8.png",
            //       name: "蛋包芝士可颂",
            //       price: 10,
            //       stock: '有货',
            //       detail: '这里是蛋包芝士可颂详情。',
            //       parameter: 'test',
            //       service: '不支持退货'
                  
            //     },
            //     {
            //       id: 'bk9',
            //       thumb: "../../../image/bk/c9.png",
            //       name: "培根蛋包卷",
            //       price: 7,
            //       stock: '有货',
            //       detail: '这里是培根蛋包卷详情。',
            //       parameter: 'test',
            //       service: '不支持退货'
                  
            //     },
            //     {
            //       id: 'bk10',
            //       thumb: "../../../image/bk/c10.png",
            //       name: "猪肉蛋包卷",
            //       price: 6,
            //       stock: '有货',
            //       detail: '这里是猪肉蛋包卷详情。',
            //       parameter: 'test',
            //       service: '不支持退货'
                  
            //     }
            //   ]
            // },
            // {
            //   id: "xiaoshi",
            //   banner: '../../../image/bk/banner.png',
            //   cate: '小食',
            //   detail: [
            //     {
            //       id: 'bk11',
            //       thumb: "../../../image/bk/c11.png",
            //       name: "霸王鸡条",
            //       price: 15,
            //       stock: '有货',
            //       detail: '这里是霸王鸡条详情。',
            //       parameter: 'test',
            //       service: '不支持退货'
            //     },
                
            //   ]
            // },
            // {
            //   id: "tiandian",
            //   banner: '../../../image/bk/banner.png',
            //   cate: '甜点',
            //   detail: [
            //     {
            //       id: 'bk12',
            //       thumb: "../../../image/bk/c12.png",
            //       name: "火炬冰淇淋",
            //       price: 5,
            //       stock: '有货',
            //       detail: '这里是火炬冰淇淋详情。',
            //       parameter: 'test',
            //       service: '不支持退货'
            //     },

            //   ]
            // },
            // {
            //   id: "yinliao",
            //   banner: '../../../image/bk/banner.png',
            //   cate: '饮料',
            //   detail: [
            //     {
            //       id: 'bk13',
            //       thumb: "../../../image/bk/c13.png",
            //       name: "纯果乐果汁",
            //       price: 15,
            //       stock: '有货',
            //       detail: '这里是纯果乐果汁详情。',
            //       parameter: 'test',
            //       service: '不支持退货'
            //     },

            //   ]
            // },
          ]
        })
      }
      
      // if (options.d === 'ycyk') {
      //   console.log('优城悦客')
      //   this.setData({
      //     category: [
      //       { name: '经典扒餐', id: 'guowei' },
      //       { name: '布丁松饼', id: 'shucai' },
      //       { name: '意式咖啡', id: 'chaohuo' },
      //       { name: '私房小菜', id: 'danfan' }
      //     ]
      //   })
      // } else if (options.d === 'dj') {
      //   this.setData({
      //     category: [
      //       { name: '点心', id: 'dianxin' },
      //       { name: '粥类', id: 'zoulei' },
      //       { name: '炖汤', id: 'duntang' },
      //       { name: '炒点', id: 'chaodian' },
      //     ]
      //   })
      //   console.log('笃记')
      // }
      
      // if (options.d === 'xyx') {
      //   console.log('鲜芋仙')
      //   this.setData({
      //     category: [
      //       { name: '鲜芋仙', id: 'xianyuxian' },
      //       { name: '冰类', id: 'binglei' },
      //       { name: '饮品', id: 'yingpin' },
      //     ]
      //   })
      // } 
      
      // if (options.d === 'hdl') {
      //   console.log('海底捞')
      //   this.setData({
      //     category: [
      //       { name: '汤底', id: 'guodi' },
      //       { name: '特色菜品', id: 'teshecaipin' },
      //       { name: '海鲜', id: 'haixian' },
      //       { name: '豆面制品', id: 'doumianzhipin' },
      //       { name: '叶菜类', id: 'yecailei' },
      //     ]
      //   })
      // } 
      // else {
      //   this.setData({
      //     category: [
      //       { name: '汤底', id: 'guodi' },
      //       { name: '特色菜品', id: 'teshecaipin' },
      //       { name: '海鲜', id: 'haixian' },
      //       { name: '豆面制品', id: 'doumianzhipin' },
      //       { name: '叶菜类', id: 'yecailei' },
      //     ]
      //   })
      // }
      // 页面初始化 options为页面跳转所带来的参数
    },
    onReady(){
        // var self = this;
        // wx.request({
        //     url:'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
        //     success(res){
        //         self.setData({
        //             detail : res.data
        //         })
        //     }
        // });
        
    },
    switchTab(e){
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)
    },
    redTo: function(e) {
      // 获取物品详细信息
      let shopdetail = e.currentTarget.dataset.value 
      console.log("value", shopdetail)
      // 将json对象转化为string 以url get的方式传送数据
      shopdetail = JSON.stringify(shopdetail)
      // 页面跳转
      wx.navigateTo({
        url: '../details/details?d='+encodeURIComponent(shopdetail)
      })
    }
    
})