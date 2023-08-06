App({
  onLaunch: function () {
    console.log('App Launch')
    wx.cloud.init({
      env:"cloud1-8g9j0qpq33a49127",
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
