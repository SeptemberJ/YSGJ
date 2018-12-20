import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/Products/ProductDetail'
import NewsList from '@/pages/News/NewsList'
import NewsDetail from '@/pages/News//NewsDetail'
import Partner from '@/pages/Partner'
import AboutUs from '@/pages/AboutUs'

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
    {path: '*', redirect: '/Home'}
  ]
})
export default router
