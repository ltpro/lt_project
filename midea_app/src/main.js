import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import $ from 'jquery'
//阻止启动生产消息，关闭生产模式下给出的提示
Vue.config.productionTip = false

Vue.prototype.axios=axios;

new Vue({
  router,
  store,
  // Vue.js 里面的 createElement 函数，这个函数的作用就是生成一个 VNode节点，render 函数得到这个 VNode 节点之后，返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上。
  render: h => h(App)
}).$mount('#app')//挂载到根节点上
