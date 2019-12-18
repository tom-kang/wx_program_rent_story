//app.js
var app = getApp();
App({
  onLaunch: function () {


    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude

        console.log("地址1" + latitude)
        console.log("地址2" + longitude)

        wx.request({
          url: 'http://api.map.baidu.com/reverse_geocoding/v3/?ak=MdFkosT9KGkAiykIGhZpmTatKhgTQiNl&output=json&coordtype=wgs84ll&location=' + latitude + ',' + longitude,
          method: "get",
          success: function (res) {
           
            wx.setStorageSync('location', res.data.result.formatted_address.substr(res.data.result.formatted_address.indexOf('市') + 1, 10))
          }
        })
      },
      fail: function (res) {
      }
    })
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },


  globalData: {
    userInfo: null,
    location: ""
  }
})
