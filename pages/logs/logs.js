//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    console.log(new Date() == Date.now())
    console.log(new Date().getFullYear())
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        // console.log(new Date(log))
        return util.formatTime(new Date(log))
      })
    })
  }
})
