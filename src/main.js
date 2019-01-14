// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './vuex/store'
import router from './router'
// import { Carousel } from 'iview'
// import iview from 'iview'
// import 'iview/dist/styles/iview.css'
// Vue.component('Carousel', Carousel)
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/main.css'



Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
