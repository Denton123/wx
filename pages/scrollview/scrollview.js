//获取应用实例
const app = getApp()
Page({
  data: {
    markers: [{
      iconPath: "../../static/image/girl.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    controls: [{
      id: 1,
      iconPath: '../../static/image/gloves.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#000000",
      width: 10,
      dottedLine: true
    }],
    imgUrls: [
      '../../static/image/1.jpg',
      '../../static/image/2.jpg',
      '../../static/image/3.png',
      '../../static/image/4.jpg'
    ],
    x: 0,
    y: 0,
    indicatorDots: true, //是否显示指示点
    autoplay: true,
    interval: 5000,
    duration: 1000,
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }],
    src: ''
  },
  tap: function (e) {
    this.setData({
      x: 30,
      y: 30
    });
  },
  onChange: function (e) {
    console.log(e.detail)
  },
  onScale: function (e) {
    console.log(e.detail)
  },
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
  },
  play() {
    this.videoCtx.play()
  },
  pause() {
    this.videoCtx.pause()
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'hight',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas')

    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
  }
})
