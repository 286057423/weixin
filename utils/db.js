// utils/db.js - 云数据库操作封装

const db = wx.cloud.database()
const _ = db.command

/**
 * 集合名称常量
 */
const COLLECTIONS = {
  USERS: 'users',
  CASES: 'cases',
  APPOINTMENTS: 'appointments',
  SETTINGS: 'settings',
  ADMINS: 'admins',
  STATISTICS: 'statistics'
}

/**
 * 获取集合引用
 * @param {string} name 集合名称
 */
const getCollection = (name) => {
  return db.collection(name)
}

/**
 * 添加文档
 * @param {string} collection 集合名称
 * @param {Object} data 文档数据
 * @returns {Promise}
 */
const add = (collection, data) => {
  return getCollection(collection).add({
    data: {
      ...data,
      createTime: db.serverDate(),
      updateTime: db.serverDate()
    }
  })
}

/**
 * 根据 ID 获取文档
 * @param {string} collection 集合名称
 * @param {string} id 文档ID
 * @returns {Promise}
 */
const getById = (collection, id) => {
  return getCollection(collection).doc(id).get()
}

/**
 * 查询文档列表
 * @param {string} collection 集合名称
 * @param {Object} where 查询条件
 * @param {number} page 页码（从1开始）
 * @param {number} pageSize 每页数量
 * @param {Object} orderBy 排序 { field: 'asc'|'desc' }
 * @returns {Promise}
 */
const getList = (collection, where = {}, page = 1, pageSize = 20, orderBy = { createTime: 'desc' }) => {
  let query = getCollection(collection).where(where)

  // 应用排序
  Object.keys(orderBy).forEach(field => {
    query = query.orderBy(field, orderBy[field])
  })

  // 分页
  query = query.skip((page - 1) * pageSize).limit(pageSize)

  return query.get()
}

/**
 * 更新文档
 * @param {string} collection 集合名称
 * @param {string} id 文档ID
 * @param {Object} data 更新数据
 * @returns {Promise}
 */
const update = (collection, id, data) => {
  return getCollection(collection).doc(id).update({
    data: {
      ...data,
      updateTime: db.serverDate()
    }
  })
}

/**
 * 删除文档
 * @param {string} collection 集合名称
 * @param {string} id 文档ID
 * @returns {Promise}
 */
const remove = (collection, id) => {
  return getCollection(collection).doc(id).remove()
}

/**
 * 统计文档数量
 * @param {string} collection 集合名称
 * @param {Object} where 查询条件
 * @returns {Promise}
 */
const count = (collection, where = {}) => {
  return getCollection(collection).where(where).count()
}

/**
 * 上传文件到云存储
 * @param {string} cloudPath 云存储路径
 * @param {string} filePath 本地文件路径
 * @returns {Promise}
 */
const uploadFile = (cloudPath, filePath) => {
  return wx.cloud.uploadFile({
    cloudPath,
    filePath
  })
}

/**
 * 删除云存储文件
 * @param {Array<string>} fileList 文件ID列表
 * @returns {Promise}
 */
const deleteFiles = (fileList) => {
  return wx.cloud.deleteFile({ fileList })
}

module.exports = {
  db,
  _,
  COLLECTIONS,
  getCollection,
  add,
  getById,
  getList,
  update,
  remove,
  count,
  uploadFile,
  deleteFiles
}
