// pages/case-detail/case-detail.js
// 案例详情页

const db = require('../../utils/db.js')

Page({
  data: {
    caseDetail: null,
    loading: true
  },

  onLoad: function (options) {
    // TODO: 从路由参数获取案例ID并加载详情
    const id = options.id
    if (id) {
      this.loadDetail(id)
    }
  },

  /**
   * 加载案例详情
   * @param {string} id 案例ID
   */
  loadDetail: function (id) {
    // TODO: 调用云数据库查询案例详情
    // db.getById(db.COLLECTIONS.CASES, id)
    //   .then(res => {
    //     this.setData({
    //       caseDetail: res.data,
    //       loading: false
    //     })
    //   })
    //   .catch(err => {
    //     console.error('加载案例详情失败', err)
    //     wx.showToast({ title: '加载失败', icon: 'none' })
    //   })

    // 临时占位数据
    this.setData({
      caseDetail: {
        title: '案例标题占位',
        typeName: '空鼓修复',
        description: '这是案例描述的占位内容，实际内容从数据库读取。',
        images: [1, 2, 3],
        video: true
      },
      loading: false
    })
  }
})
