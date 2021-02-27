// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

axios({
  url:'http://123.207.32.32:8000/home/multidata',
  method:'Get'
}).then(res=>{
  console.log(res)
})

//加载更多
axios({
  url:'http:123.207.32.32:8000/home/data',
  //后面的字符拼接
  params:{
    type:'pop',
    page:1
  }
}).then(res=>{
  console.log(res)
})

//axios发送并发请求
axios.all([axios(),axios()]).then(results=>{
  
})

