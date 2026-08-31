// app.js - 瓷砖修复服务小程序入口
App({
  onLaunch: function () {
    // 初始化云开发环境
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        // env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        // 此处请填入环境 ID, 环境 ID 可打开云控制台查看
        // 如不填则使用默认环境（第一个创建的环境）
        // 不填 env 则使用默认环境（第一个创建的环境）
        // 如有多个环境，可填入具体环境 ID，如：'prod-xxxxx'
        traceUser: true
      })
    }

    // 获取系统信息
    this.globalData.systemInfo = wx.getSystemInfoSync()

    // 检查登录状态
    this.checkLoginStatus()
  },

  /**
   * 检查本地登录状态
   */
  checkLoginStatus: function () {
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.globalData.userInfo = userInfo
      this.globalData.isLogin = true
    }
  },

  /**
   * 获取云数据库引用
   */
  getDB: function () {
    return wx.cloud.database()
  },

  /**
   * 获取云数据库集合引用
   * @param {string} collectionName 集合名称
   */
  getCollection: function (collectionName) {
    return wx.cloud.database().collection(collectionName)
  },

  globalData: {
    userInfo: null,
    isLogin: false,
    systemInfo: null,
    // 主题色配置
    themeColor: '#1a5fa8',      // 主色 - 蓝色
    accentColor: '#ff6b35',     // 强调色 - 橙色（预约按钮）
    successColor: '#52c41a',    // 成功色 - 绿色
    warningColor: '#faad14',    // 警告色 - 黄色
    dangerColor: '#ff4d4f',     // 危险色 - 红色
    // 预约状态映射
    bookingStatusMap: {
      pending: '待处理',
      contacted: '已联系',
      completed: '已完成',
      cancelled: '已取消'
    },
    // 修复类型映射
    repairTypeMap: {
      hollow: '空鼓修复',
      crack: '裂缝修复',
      scratch: '划痕修复',
      falloff: '脱落修复',
      grout: '美缝服务'
    }
  }
})
