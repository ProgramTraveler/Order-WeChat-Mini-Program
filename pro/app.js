App({
  onLaunch: function () {
    console.log('App Launch')
    wx.cloud.init({
      env:"",
      traceUser:true
    });
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false
  }
})
