// utils/util.js - 通用工具函数

/**
 * 格式化时间
 * @param {Date} date 日期对象
 * @returns {string} 格式化后的时间字符串 YYYY-MM-DD HH:mm:ss
 */
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('-')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

/**
 * 格式化日期（不含时间）
 * @param {Date} date 日期对象
 * @returns {string} YYYY-MM-DD
 */
const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${[year, month, day].map(formatNumber).join('-')}`
}

/**
 * 数字补零
 */
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

/**
 * 显示加载提示
 * @param {string} title 提示文字
 */
const showLoading = (title = '加载中...') => {
  wx.showLoading({ title, mask: true })
}

/**
 * 隐藏加载提示
 */
const hideLoading = () => {
  wx.hideLoading()
}

/**
 * 显示成功提示
 * @param {string} title 提示文字
 */
const showSuccess = (title = '操作成功') => {
  wx.showToast({ title, icon: 'success', duration: 1500 })
}

/**
 * 显示错误提示
 * @param {string} title 提示文字
 */
const showError = (title = '操作失败') => {
  wx.showToast({ title, icon: 'error', duration: 1500 })
}

/**
 * 显示信息提示
 * @param {string} title 提示文字
 */
const showInfo = (title) => {
  wx.showToast({ title, icon: 'none', duration: 2000 })
}

/**
 * 验证手机号格式
 * @param {string} phone 手机号
 * @returns {boolean}
 */
const isValidPhone = (phone) => {
  return /^1[3-9]\d{9}$/.test(phone)
}

/**
 * 防抖函数
 * @param {Function} fn 目标函数
 * @param {number} delay 延迟毫秒数
 */
const debounce = (fn, delay = 500) => {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

/**
 * 生成唯一ID
 * @returns {string}
 */
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
}

module.exports = {
  formatTime,
  formatDate,
  formatNumber,
  showLoading,
  hideLoading,
  showSuccess,
  showError,
  showInfo,
  isValidPhone,
  debounce,
  generateId
}
