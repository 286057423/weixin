// cases.js - 案例列表页
const app = getApp()

Page({
  data: {
    caseList: [],         // 案例列表
    filterType: 'all',    // 当前筛选类型
    loading: true,        // 是否正在加载
    page: 1,              // 当前页码
    hasMore: true         // 是否有更多数据
  },

  /**
   * 生命周期 - 页面加载
   */
  onLoad: function (options) {
    // TODO: 如果从首页传入了修复类型参数，设置筛选类型
    if (options && options.type) {
      this.setData({ filterType: options.type })
    }
    // TODO: 加载案例列表数据
    this.loadCases()
  },

  /**
   * 生命周期 - 页面显示
   */
  onShow: function () {
    // TODO: 如有需要刷新数据
  },

  /**
   * 加载案例列表
   */
  loadCases: function () {
    var that = this
    this.setData({ loading: true })

    // TODO: 从云数据库查询案例列表
    // const db = app.getCollection('cases')
    // 根据 filterType 构建查询条件
    // 分页查询：skip((page-1)*pageSize).limit(pageSize)
    // 查询成功后 setData 更新 caseList

    // 模拟加载完成
    setTimeout(function () {
      that.setData({
        loading: false,
        caseList: [
          { id: '1', title: '客厅地砖空鼓修复', typeName: '空鼓修复', desc: '业主家客厅800*800地砖出现大面积空鼓，采用注浆修复技术，免砸砖完美修复。' },
          { id: '2', title: '卫生间墙砖裂缝修复', typeName: '裂缝修复', desc: '卫生间墙面瓷砖出现纵向裂缝，使用专业填缝材料修复，恢复美观。' },
          { id: '3', title: '厨房地砖划痕处理', typeName: '划痕修复', desc: '厨房地面瓷砖被硬物划伤，经过专业抛光处理后焕然一新。' }
        ]
      })
    }, 500)
  },

  /**
   * 切换筛选类型
   */
  onFilterChange: function (e) {
    var type = e.currentTarget.dataset.type
    this.setData({
      filterType: type,
      page: 1,
      caseList: [],
      hasMore: true
    })
    // TODO: 重新加载对应类型的案例数据
    this.loadCases()
  },

  /**
   * 触底加载更多
   */
  onReachBottom: function () {
    if (!this.data.hasMore) return
    // TODO: 加载下一页数据
    this.setData({ page: this.data.page + 1 })
    this.loadCases()
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    this.setData({ page: 1, caseList: [], hasMore: true })
    this.loadCases()
    wx.stopPullDownRefresh()
  }
})
