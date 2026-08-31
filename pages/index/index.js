// index.js - 首页
const app = getApp()

Page({
  data: {
    // 轮播图数据
    banners: [
      { id: 1, title: '专业瓷砖修复服务', bgColor: '#1a5fa8' },
      { id: 2, title: '空鼓裂缝一站式解决', bgColor: '#4a8fd4' },
      { id: 3, title: '焕然一新 省时省钱', bgColor: '#0d3f7a' }
    ],

    // 服务项目
    services: [
      { type: 'hollow', name: '空鼓修复', icon: '🔧' },
      { type: 'crack', name: '裂缝修复', icon: '🔨' },
      { type: 'scratch', name: '划痕修复', icon: '✨' },
      { type: 'falloff', name: '脱落修复', icon: '🏗️' },
      { type: 'grout', name: '美缝服务', icon: '🎨' }
    ],

    // 公司简介
    companyIntro: '我们是一支专业的瓷砖修复团队，拥有多年行业经验。采用先进修复技术，无需砸砖重装，即可解决瓷砖空鼓、裂缝、划痕、脱落等问题，为您节省时间和费用。'
  },

  /**
   * 生命周期 - 页面加载
   */
  onLoad: function () {
    // TODO: 从云数据库加载轮播图数据
    // TODO: 从云数据库加载公司简介
  },

  /**
   * 生命周期 - 页面显示
   */
  onShow: function () {
    // TODO: 刷新数据（如有需要）
  },

  /**
   * 点击服务项目
   */
  onServiceTap: function (e) {
    var type = e.currentTarget.dataset.type
    // TODO: 跳转到案例列表页并传递修复类型筛选参数
    wx.switchTab({
      url: '/pages/cases/cases'
    })
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    // TODO: 刷新页面数据
    wx.stopPullDownRefresh()
  }
})
