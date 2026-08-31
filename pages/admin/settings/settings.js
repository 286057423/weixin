// pages/admin/settings/settings.js
// 基础设置页

const db = require('../../../utils/db.js')
const util = require('../../../utils/util.js')

Page({
  data: {
    settings: {
      banners: [],
      companyIntro: '',
      phone: '',
      qrcodeUrl: '',
      workTime: '',
      serviceArea: ''
    },
    loading: true
  },

  onLoad: function () {
    this.loadSettings()
  },

  /**
   * 加载设置
   */
  loadSettings: function () {
    // TODO: 调用云数据库查询设置
    // db.getList(db.COLLECTIONS.SETTINGS, {}, 1, 1)
    //   .then(res => {
    //     if (res.data.length > 0) {
    //       this.setData({ settings: res.data[0] })
    //     }
    //     this.setData({ loading: false })
    //   })
    //   .catch(err => {
    //     console.error('加载设置失败', err)
    //     this.setData({ loading: false })
    //   })

    // 临时占位数据
    setTimeout(() => {
      this.setData({
        settings: {
          banners: [1, 2, 3],
          companyIntro: '专业瓷砖修复服务，十年行业经验...',
          phone: '138-0000-0000',
          qrcodeUrl: '',
          workTime: '周一至周六 9:00-18:00',
          serviceArea: '全市范围上门服务'
        },
        loading: false
      })
    }, 500)
  },

  /**
   * 输入框变化
   */
  onInputChange: function (e) {
    const field = e.currentTarget.dataset.field
    const value = e.detail.value
    this.setData({
      [`settings.${field}`]: value
    })
  },

  /**
   * 选择图片
   */
  onChooseImage: function (e) {
    const type = e.currentTarget.dataset.type
    // TODO: 调用 wx.chooseImage 选择图片并上传到云存储
    wx.chooseImage({
      count: type === 'banner' ? 1 : 1,
      success: (res) => {
        console.log('选择图片:', res.tempFilePaths)
        // TODO: 上传到云存储并更新 data
      }
    })
  },

  /**
   * 删除图片
   */
  onDeleteImage: function (e) {
    const index = e.currentTarget.dataset.index
    // TODO: 从 data 中删除对应索引的图片，并调用云存储删除
    wx.showToast({ title: '删除图片占位', icon: 'none' })
  },

  /**
   * 保存设置
   */
  onSave: function () {
    // TODO: 调用云数据库更新设置
    util.showSuccess('保存成功')
  }
})
