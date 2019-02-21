import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/Products/ProductDetail'
import NewsList from '@/pages/News/NewsList'
import NewsDetail from '@/pages/News//NewsDetail'
import Partner from '@/pages/Partner'
import AboutUs from '@/pages/AboutUs'
import Order from '@/pages/Order/Order'
import SearchOrderH from '@/pages/Order/SearchOrderH'
import SearchOrderS from '@/pages/Order/SearchOrderS'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {requireAuth: false}
    },
    {
      path: '/ProductDetail',
      name: 'ProductDetail',
      component: ProductDetail,
      meta: {requireAuth: false}
    },
    {
      path: '/NewsList',
      name: 'NewsList',
      component: NewsList,
      meta: {requireAuth: false}
    },
    {
      path: '/NewsDetail',
      name: 'NewsDetail',
      component: NewsDetail,
      meta: {requireAuth: false}
    },
    {
      path: '/Partner',
      name: 'Partner',
      component: Partner,
      meta: {requireAuth: false}
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs,
      meta: {requireAuth: false}
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
      meta: {requireAuth: false}
    },
    {
      path: '/SearchOrderH',
      name: 'SearchOrderH',
      component: SearchOrderH,
      meta: {requireAuth: false}
    },
    {
      path: '/SearchOrderS',
      name: 'SearchOrderS',
      component: SearchOrderS,
      meta: {requireAuth: false}
    },
    {path: '*', redirect: '/Home'}
  ]
})
// 登录控制
router.beforeEach((to, from, next) => {
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
  // if (to.name === 'Home') {
  //   document.documentElement.scrollTop = 0
  //   document.body.scrollTop = 0
  // } else {
  //   document.documentElement.scrollTop = 1
  //   document.body.scrollTop = 1
  // }
  next()
})
export default router
