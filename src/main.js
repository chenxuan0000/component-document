import Vue from 'vue'
import app from './app.vue'
import 'babel-polyfill'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import scroll from 'vue-seamless-scroll'

Vue.use(iView)
Vue.use(scroll)
new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
