// pages/admin/stats/stats.js
// 数据统计页

const db = require('../../../utils/db.js')

Page({
  data: {
    totalVisits: 0,
    totalBookings: 0,
    totalCaseViews: 0,
    timeRange: 'week'
  },

  onLoad: function () {
    this.loadStats()
  },

  /**
   * 加载统计数据
   */
  loadStats: function () {
    // TODO: 调用云数据库或云函数获取统计数据
    // db.count(db.COLLECTIONS.APPOINTMENTS).then(res => {
    //   this.setData({ totalBookings: res.total })
    // })
    // db.count(db.COLLECTIONS.CASES).then(res => {
    //   this.setData({ totalCaseViews: res.total })
    // })

    // 临时占位数据
    this.setData({
      totalVisits: 128,
      totalBookings: 45,
      totalCaseViews: 256
    })
  },

  /**
   * 切换时间范围
   */
  onTimeRangeChange: function (e) {
    const range = e.currentTarget.dataset.range
    this.setData({ timeRange: range })
    this.loadStats()
  }
})
