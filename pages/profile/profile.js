// pages/profile/profile.js
Page({
  data: {
    isLogin: false,
    userInfo: null
  },

  onShow() {
    // TODO: 每次显示页面时检查登录状态
    // const userInfo = wx.getStorageSync('userInfo')
    // if (userInfo) {
    //   this.setData({ isLogin: true, userInfo })
    // }
  },

  /**
   * 登录按钮点击
   */
  onLogin() {
    // TODO: 执行微信登录流程
    // wx.login({ ... })
    this.onGetUserProfile()
  },

  /**
   * 获取用户信息
   */
  onGetUserProfile() {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        // TODO: 将用户信息上传到云数据库并保存
        this.setData({
          isLogin: true,
          userInfo: res.userInfo
        })
        wx.setStorageSync('userInfo', res.userInfo)
      },
      fail(err) {
        // TODO: 处理用户拒绝授权的情况
        console.log('获取用户信息失败', err)
        wx.showToast({
          title: '授权已取消',
          icon: 'none'
        })
      }
    })
  },

  /**
   * 退出登录
   */
  onLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // TODO: 清除登录态和用户信息
          this.setData({
            isLogin: false,
            userInfo: null
          })
          wx.removeStorageSync('userInfo')
          wx.removeStorageSync('token')
          wx.showToast({
            title: '已退出登录',
            icon: 'none'
          })
        }
      }
    })
  },

  /**
   * 页面跳转
   */
  navigateTo(e) {
    const url = e.currentTarget.dataset.url
    if (!url) return
    wx.navigateTo({
      url: url,
      fail(err) {
        // TODO: 处理跳转失败（如 tabBar 页面需用 switchTab）
        console.log('跳转失败', err)
      }
    })
  }
})
