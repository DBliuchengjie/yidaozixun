// components/one/component-one.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: 'balabal',
      observer(newVal,oldVal,changePath){
        console.log(newVal, oldVal, changePath);
      }
    },
    id: String,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tap(e){
      var myEventDetail = {price: 123} // detail对象，提供给事件监听函数
      var myEventOption = {cup: 'X'} // 触发事件的选项
      this.triggerEvent('myEvent', myEventDetail, myEventOption);
    }
  }
})
