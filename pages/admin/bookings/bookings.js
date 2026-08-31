// pages/admin/bookings/bookings.js - 预约管理
Page({
  data: {
    bookingList: [],
    filterStatus: 'all',
    loading: true
  },

  onLoad: function () {
    this.loadBookings();
  },

  onShow: function () {
    // 从详情页返回时可刷新
  },

  /**
   * 加载预约列表
   */
  loadBookings: function () {
    // TODO: 从云数据库加载预约列表，根据筛选条件过滤
    // const db = wx.cloud.database();
    // const _ = db.command;
    // let query = {};
    // if (this.data.filterStatus !== 'all') {
    //   query.status = this.data.filterStatus;
    // }
    // db.collection('bookings').where(query).orderBy('createTime', 'desc').get().then(res => {
    //   const list = res.data.map(item => {
    //     return Object.assign(item, this.getStatusInfo(item.status));
    //   });
    //   this.setData({ bookingList: list, loading: false });
    // }).catch(err => {
    //   console.error('加载预约失败:', err);
    //   this.setData({ loading: false });
    // });

    // 模拟数据
    this.setData({
      loading: false,
      bookingList: []
    });
  },

  /**
   * 获取状态对应的标签样式和文本
   */
  getStatusInfo: function (status) {
    // TODO: 返回状态映射
    // const map = {
    //   pending: { statusText: '待处理', statusClass: 'tag-warning' },
    //   contacted: { statusText: '已联系', statusClass: 'tag-primary' },
    //   completed: { statusText: '已完成', statusClass: 'tag-success' },
    //   cancelled: { statusText: '已取消', statusClass: 'tag-danger' }
    // };
    // return map[status] || { statusText: '未知', statusClass: 'tag-primary' };
    return { statusText: '待处理', statusClass: 'tag-warning' };
  },

  /**
   * 筛选状态切换
   */
  onFilterChange: function (e) {
    // TODO: 更新筛选状态并重新加载
    // const status = e.currentTarget.dataset.status;
    // this.setData({ filterStatus: status, loading: true });
    // this.loadBookings();
  },

  /**
   * 查看预约详情
   */
  onViewDetail: function (e) {
    // TODO: 跳转到预约详情页或弹出详情弹窗
    // const id = e.currentTarget.dataset.id;
    // wx.navigateTo({ url: '/pages/admin/booking-detail/booking-detail?id=' + id });
  },

  /**
   * 修改预约状态
   */
  onChangeStatus: function (e) {
    // TODO: 弹出状态选择器，修改预约状态
    // const id = e.currentTarget.dataset.id;
    // wx.showActionSheet({
    //   itemList: ['待处理', '已联系', '已完成', '已取消'],
    //   success: (res) => {
    //     const statusList = ['pending', 'contacted', 'completed', 'cancelled'];
    //     const newStatus = statusList[res.tapIndex];
    //     const db = wx.cloud.database();
    //     db.collection('bookings').doc(id).update({
    //       data: { status: newStatus }
    //     }).then(() => {
    //       wx.showToast({ title: '状态已更新' });
    //       this.loadBookings();
    //     });
    //   }
    // });
  }
});
