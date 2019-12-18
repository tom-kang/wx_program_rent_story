// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [
      { url: '/pages/images/home1.png' },
      { url: '/pages/images/home2.png' },
      { url: '/pages/images/home3.png' },
      { url: '/pages/images/home1.png' },
      { url: '/pages/images/home2.png' },
      { url: '/pages/images/home3.png' }
     ],
    house: [
      {
        "id" :1,
        "name": "整租-南京市秦淮区祠堂巷小区",
        "src": "/pages/images/home3.png",
        "star": 4.5,
        "sales": 641,
        "initial_price": 0,
        "distribution_price": 0,
        "distance": "156m",
        "time": 33,
        "compoundName": "南京市秦淮区祠堂巷小区",
        "layout":"2室1厅1卫",//发布框限制  输入 n 室n厅 n卫
        "storey": "2/6",
        "area": "60㎡",
        "deliveryTime": "3月前",
        "describe":"不讲价，整租3000.距离大行宫地铁站走路2分钟",
        "price":3000,
        "unit": "月"
      },
      {
        "id": 2,
        "name": "整租-南京市建邺区虹苑新寓-二村",
        "star": 4.5,
        "sales": 731,
        "src": "/pages/images/home2.png",
        "initial_price": 15,
        "distribution_price": 0,
        "distance": "1.3km",
        "time": 52,
        "compoundName":"南京市秦淮区祠堂巷小区",
        "layout": "2室1厅1卫",//发布框限制  输入 n 室n厅 n卫
        "storey": "2/6",
        "area": "60㎡",
        "deliveryTime": "3月前",
        "describe": "不讲价，整租3000.距离大行宫地铁站走路2分钟",
         "price": 3000,
        "unit": "月"
      },
      {
        "id": 3,
        "name": "整租-南京市鼓楼区回龙桥-8号院",
        "star": 5,
        "sales": 1161,
        "src": "/pages/images/home1.png",
        "initial_price": 20,
        "distribution_price": 0,
        "distance": "1.5km",
        "time": 30,
        "compoundName": "南京市秦淮区祠堂巷小区",
        "layout": "2室1厅1卫",//发布框限制  输入 n 室n厅 n卫
        "storey": "2/6",
        "area":"60㎡",
        "deliveryTime":"3月前",
        "describe": "不讲价，整租3000.距离大行宫地铁站走路2分钟",
        "price": 3000,
        "unit":"月"
      }
     ],
     selected: 0,
     sortSelected: "综合排序",
     location: "",
     search:"仙居华庭"
  },
  finish: function () {
   
  },
  onTapTag: function (e) {
    this.setData({
      selected: e.currentTarget.dataset.index
    });
  },
  lower: function (e) {
     
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var info = wx.getStorageSync('location');
    var that = this;

    if(info) {
      that.setData({
        location: info
      });
    } else {
      wx.getLocation({
        type: 'gcj02',
        success: function (res) {
          var latitude = res.latitude
          var longitude = res.longitude

          wx.request({
            url: 'http://api.map.baidu.com/reverse_geocoding/v3/?ak=MdFkosT9KGkAiykIGhZpmTatKhgTQiNl&output=json&coordtype=wgs84ll&location=' + latitude + ',' + longitude,
            method: "get",
            success: function (res) {
              var loc = res.data.result.formatted_address.substr(res.data.result.formatted_address.indexOf('市') + 1, 10);
              wx.setStorageSync('location', loc)
              that.setData({
                location: loc
              });
            
            }
          })
        },
        fail: function (res) {
        }
      })//获取 地址end
     
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    var that = this;
    var info = wx.getStorageSync('location')
    this.setData({
      location: info
    });
    

  },

  /**
   * 生命周期函数--监听页面显示
   * 定义是页面显示，切入前台触发，用我的话来讲就是这个页面出现一次，他就被调用一次包括你前进后退到这个页面
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})