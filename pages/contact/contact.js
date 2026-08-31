// pages/contact/contact.js
Page({
  data: {
    phone: '138-0000-0000',
    workTime: '周一至周六 9:00-18:00',
    serviceArea: '全市范围上门服务',
    qrcodeUrl: ''
  },

  onLoad(options) {
    // TODO: 加载二维码图片资源
    // TODO: 从云数据库或配置获取联系方式信息
  },

  /**
   * 拨打电话联系
   */
  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: this.data.phone.replace(/-/g, ''),
      fail(err) {
        // TODO: 处理用户取消拨打的情况
        console.log('取消拨打电话', err)
      }
    })
  },

  /**
   * 长按识别二维码（小程序内暂不支持直接长按识别 view，预留提示）
   */
  onPreviewQrcode() {
    // TODO: 使用 wx.previewImage 预览二维码图片，支持长按识别
    if (!this.data.qrcodeUrl) {
      wx.showToast({
        title: '二维码加载中',
        icon: 'none'
      })
    }
  }
})
