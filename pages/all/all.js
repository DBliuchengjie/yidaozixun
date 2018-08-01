//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    hiddenImg: true,
    activeImg: '',
    animationData: {},
    animation: {},
    picArr: [
      {
        name: '1',
        url: '../../images/1.jpg'
      },
      {
        name: '2',
        url: '../../images/2.jpg'
      },
      {
        name: '3',
        url: '../../images/3.jpg'
      },
      {
        name: '4',
        url: '../../images/4.jpg'
      }
    ]
  },
  clickImage(e){
    console.log(e);
    console.log(this.data.hiddenImg);
    this.setData({
      hiddenImg: !this.data.hiddenImg,
      activeImg: e.target.dataset.url,
    });
    this.data.animation.scale(2,2).scale(0.5,0.5).step();
    this.setData({
      animationData: this.data.animation.export(),
    })
  },
  closeImgActive(){
    this.setData({
      hiddenImg: !this.data.hiddenImg,
    })
  },
  touchmove(){

  },
  onLoad: function () {
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })
    wx.setTabBarBadge({
      index: 1,
      text: '12'
    })
    // wx.hideTabBar();
    this.setData({
      animation: wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })})
  }
})
