import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index'
import Details1 from './views/Details1'
import Details2 from './views/Details2'
import Details3 from './views/Details3'
import Details4 from './views/Details4'
import Details5 from './views/Details5'
import Products from './views/Products'
import Shopcart from './views/Shopcart'
import Login from './views/Login'
import NotFound from './views/NotFound'
//ES6

Vue.use(Router)

export default new Router({
  //解决跳转后页面显示不同位置的情况，跳转后结果总是在网页的头部
  /*mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },*/
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home, children:[
        { path:"", component: Index },
        { path:"details1/:lid", component:Details1 ,props:true},
        { path:"details2/:lid",component:Details2},
        { path:"details3/:lid",component:Details3},
        { path:"details4/:lid",component:Details4},
        { path:"details5/:lid",component:Details5},
        { path:"products", component: Products },
        {path:"login",component:Login},
        {path:"shopcart",component:Shopcart}
    ]},
    { path: '/*', component:NotFound }
  ]
})
