// pages/admin/users/users.js
// 用户管理页

const db = require('../../../utils/db.js')

Page({
  data: {
    userList: [],
    loading: true
  },

  onLoad: function () {
    this.loadUsers()
  },

  /**
   * 加载用户列表
   */
  loadUsers: function () {
    // TODO: 调用云数据库查询用户列表
    // db.getList(db.COLLECTIONS.USERS, {}, 1, 100)
    //   .then(res => {
    //     this.setData({
    //       userList: res.data,
    //       loading: false
    //     })
    //   })
    //   .catch(err => {
    //     console.error('加载用户列表失败', err)
    //     this.setData({ loading: false })
    //   })

    // 临时占位数据
    setTimeout(() => {
      this.setData({
        userList: [
          { _id: '1', nickName: '张三', registerTime: '2024-01-15', bookingCount: 3 },
          { _id: '2', nickName: '李四', registerTime: '2024-01-20', bookingCount: 1 }
        ],
        loading: false
      })
    }, 500)
  },

  /**
   * 查看用户详情
   */
  onViewUserDetail: function (e) {
    const id = e.currentTarget.dataset.id
    // TODO: 跳转到用户详情页或弹窗展示预约历史
    wx.showToast({ title: '查看用户详情', icon: 'none' })
  }
})
