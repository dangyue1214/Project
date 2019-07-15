import Vue from 'vue'
import Router from 'vue-router'
import QihooClientIndex from '../pages/QihooClientIndex.vue'
import QihooClientGoodsClassify from "../pages/QihooClientGoodsClassify"
import QihooClientRegister from "../pages/QihooClientRegister"
import QihooClientRegisterSucceed from "../pages/QihooClientRegisterSucceed"
import QihooClientLogin from "../pages/QihooClientLogin"
import QihooClientGoodsDetail from "../pages/QihooClientGoodsDetail"
import QihooClientCarts from "../pages/QihooClientCarts"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',//首页
      name: 'QihooClientIndex',
      component: QihooClientIndex
    },
    {
      path: '/goodsClassify',//商品列表
      name: 'QihooClientGoodsClassify',
      component: QihooClientGoodsClassify
    },
    {
      path: '/goodsDetail',
      name: 'QihooClientGoodsDetail',//商品详情
      component: QihooClientGoodsDetail
    },
    {
      path: '/Cart',
      name: 'QihooClientCarts',//购物车
      component: QihooClientCarts
    },
    {
      path: '/login',
      name: 'QihooClientLogin',//登录
      component: QihooClientLogin
    },
    {
      path: '/register',
      name: 'QihooClientRegister',//注册
      component: QihooClientRegister
    },
    {
      path: '/skip',
      name: 'QihooClientRegisterSucceed',//注册成功
      component: QihooClientRegisterSucceed
    }
  ]
})
