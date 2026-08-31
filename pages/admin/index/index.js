// pages/admin/index/index.js - 后台管理首页
Page({
  data: {
    isAdmin: false,
    newBookingCount: 0
  },

  onLoad: function () {
    // TODO: 检查管理员权限
    this.checkAdmin();
  },

  onShow: function () {
    // TODO: 每次显示时刷新新预约数量
    // this.loadNewBookingCount();
  },

  /**
   * 检查当前用户是否为管理员
   */
  checkAdmin: function () {
    // TODO: 从云数据库或本地存储检查管理员身份
    // const userInfo = wx.getStorageSync('userInfo');
    // if (userInfo && userInfo.role === 'admin') {
    //   this.setData({ isAdmin: true });
    // } else {
    //   wx.showToast({ title: '无权限访问', icon: 'none' });
    //   setTimeout(() => wx.navigateBack(), 1500);
    // }
  },

  /**
   * 通用页面跳转
   */
  navigateTo: function (e) {
    // TODO: 实现页面跳转
    // const url = e.currentTarget.dataset.url;
    // if (url) {
    //   wx.navigateTo({ url });
    // }
  },

  /**
   * 加载待处理预约数量
   */
  loadNewBookingCount: function () {
    // TODO: 从云数据库查询待处理预约数
    // const db = wx.cloud.database();
    // db.collection('bookings').where({
    //   status: 'pending'
    // }).count().then(res => {
    //   this.setData({ newBookingCount: res.total });
    // });
  }
});
