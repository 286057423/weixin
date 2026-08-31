// pages/my-bookings/my-bookings.js
Page({
  data: {
    bookingList: [],
    filterStatus: 'all',
    loading: true,
    // 状态筛选 tab 列表
    statusTabs: [
      { key: 'all', label: '全部' },
      { key: 'pending', label: '待处理' },
      { key: 'contacted', label: '已联系' },
      { key: 'completed', label: '已完成' },
      { key: 'cancelled', label: '已取消' }
    ]
  },

  onLoad(options) {
    // TODO: 加载预约列表数据
    // this.loadBookings()
  },

  onShow() {
    // TODO: 每次显示时刷新数据（从其他页面返回后可能有状态变更）
    // this.loadBookings()
  },

  /**
   * 加载预约列表
   */
  loadBookings() {
    this.setData({ loading: true })

    // TODO: 从云数据库查询当前用户的预约记录
    // const db = wx.cloud.database()
    // const _ = db.command
    // let query = db.collection('bookings').where({ ... })
    //
    // if (this.data.filterStatus !== 'all') {
    //   query = query.where({ status: this.data.filterStatus })
    // }
    //
    // query.orderBy('createTime', 'desc')
    //   .limit(50)
    //   .get()
    //   .then(res => {
    //     this.setData({ bookingList: res.data, loading: false })
    //   })
    //   .catch(err => {
    //     console.error('加载预约列表失败', err)
    //     this.setData({ loading: false })
    //   })

    // 临时：模拟空数据
    this.setData({
      bookingList: [],
      loading: false
    })
  },

  /**
   * 切换状态筛选
   */
  onFilterChange(e) {
    const status = e.currentTarget.dataset.status
    this.setData({ filterStatus: status })
    // TODO: 重新加载筛选后的数据
    // this.loadBookings()
  },

  /**
   * 取消预约
   */
  onCancelBooking(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '确认取消',
      content: '确定要取消这条预约记录吗？',
      success: (res) => {
        if (res.confirm) {
          // TODO: 更新云数据库中的预约状态为 cancelled
          // const db = wx.cloud.database()
          // db.collection('bookings').doc(id).update({
          //   data: { status: 'cancelled', cancelTime: new Date() }
          // }).then(() => {
          //   wx.showToast({ title: '已取消', icon: 'success' })
          //   this.loadBookings()
          // })
          console.log('取消预约', id)
          wx.showToast({ title: '已取消', icon: 'success' })
        }
      }
    })
  },

  /**
   * 获取状态标签的样式类名
   */
  getStatusTagClass(status) {
    const classMap = {
      pending: 'tag-warning',
      contacted: 'tag-primary',
      completed: 'tag-success',
      cancelled: 'tag-danger'
    }
    return classMap[status] || 'tag-primary'
  },

  /**
   * 获取状态标签的文本
   */
  getStatusText(status) {
    const textMap = {
      pending: '待处理',
      contacted: '已联系',
      completed: '已完成',
      cancelled: '已取消'
    }
    return textMap[status] || status
  }
})
