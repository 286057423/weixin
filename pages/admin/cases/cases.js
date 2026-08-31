// pages/admin/cases/cases.js - 案例管理
Page({
  data: {
    caseList: [],
    loading: true
  },

  onLoad: function () {
    this.loadCases();
  },

  onShow: function () {
    // 从编辑页返回时刷新列表
    // this.loadCases();
  },

  /**
   * 加载案例列表
   */
  loadCases: function () {
    // TODO: 从云数据库加载案例列表
    // const db = wx.cloud.database();
    // db.collection('cases').orderBy('createTime', 'desc').get().then(res => {
    //   this.setData({
    //     caseList: res.data,
    //     loading: false
    //   });
    // }).catch(err => {
    //   console.error('加载案例失败:', err);
    //   this.setData({ loading: false });
    // });

    // 模拟数据
    this.setData({
      loading: false,
      caseList: []
    });
  },

  /**
   * 新增案例
   */
  onAddCase: function () {
    // TODO: 跳转到案例编辑页（新增模式）
    // wx.navigateTo({ url: '/pages/admin/case-edit/case-edit' });
  },

  /**
   * 编辑案例
   */
  onEditCase: function (e) {
    // TODO: 跳转到案例编辑页（编辑模式）
    // const id = e.currentTarget.dataset.id;
    // wx.navigateTo({ url: '/pages/admin/case-edit/case-edit?id=' + id });
  },

  /**
   * 删除案例
   */
  onDeleteCase: function (e) {
    // TODO: 确认删除弹窗 + 云数据库删除
    // const id = e.currentTarget.dataset.id;
    // wx.showModal({
    //   title: '确认删除',
    //   content: '删除后不可恢复，确定删除该案例？',
    //   success: (res) => {
    //     if (res.confirm) {
    //       const db = wx.cloud.database();
    //       db.collection('cases').doc(id).remove().then(() => {
    //         wx.showToast({ title: '删除成功' });
    //         this.loadCases();
    //       });
    //     }
    //   }
    // });
  }
});
