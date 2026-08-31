// pages/booking/booking.js
// 预约登记页

const db = require('../../utils/db.js')
const util = require('../../utils/util.js')

Page({
  data: {
    form: {
      name: '',
      phone: '',
      address: '',
      date: '',
      period: '',
      description: ''
    },
    today: '',
    submitted: false,
    submitting: false
  },

  onLoad: function () {
    // 设置今天日期（日期选择器的最小值）
    const today = util.formatDate(new Date())
    this.setData({ today })
  },

  /**
   * 输入框变化事件
   */
  onInputChange: function (e) {
    const field = e.currentTarget.dataset.field
    const value = e.detail.value
    this.setData({
      [`form.${field}`]: value
    })
  },

  /**
   * 日期选择变化
   */
  onDateChange: function (e) {
    this.setData({
      'form.date': e.detail.value
    })
  },

  /**
   * 时段选择变化
   */
  onPeriodChange: function (e) {
    this.setData({
      'form.period': e.detail.value
    })
  },

  /**
   * 表单验证
   */
  validateForm: function () {
    const { form } = this.data
    if (!form.name.trim()) {
      util.showInfo('请输入姓名')
      return false
    }
    if (!util.isValidPhone(form.phone)) {
      util.showInfo('请输入正确的手机号码')
      return false
    }
    if (!form.address.trim()) {
      util.showInfo('请输入服务地址')
      return false
    }
    if (!form.date) {
      util.showInfo('请选择上门日期')
      return false
    }
    if (!form.period) {
      util.showInfo('请选择上门时段')
      return false
    }
    return true
  },

  /**
   * 提交预约
   */
  onSubmit: function () {
    // TODO: 验证表单并提交到云数据库
    if (!this.validateForm()) return

    this.setData({ submitting: true })

    // TODO: 调用云数据库添加预约记录
    // const appointmentData = {
    //   ...this.data.form,
    //   status: 'pending',
    //   openid: wx.getStorageSync('openid') || ''
    // }
    // db.add(db.COLLECTIONS.APPOINTMENTS, appointmentData)
    //   .then(res => {
    //     this.setData({ submitting: false, submitted: true })
    //   })
    //   .catch(err => {
    //     console.error('提交预约失败', err)
    //     util.showError('提交失败，请重试')
    //     this.setData({ submitting: false })
    //   })

    // 临时占位逻辑
    setTimeout(() => {
      this.setData({ submitting: false, submitted: true })
    }, 1000)
  },

  /**
   * 返回首页
   */
  onBackHome: function () {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})
