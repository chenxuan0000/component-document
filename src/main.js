import Vue from 'vue'
import app from './app.vue'
import 'babel-polyfill'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import scroll from 'vue-seamless-scroll'
import svgBar from 'svg-progress-bar'

Vue.use(iView)
Vue.use(scroll,{componentName: 'seamless'})
Vue.use(svgBar,{componentName: 'svg-bar'})

new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
