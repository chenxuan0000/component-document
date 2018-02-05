import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// const index = () => import('views/index.vue')
const index = (resolve) => require(['views/index.vue'], resolve)
const introduce = (resolve) => require(['views/introduce.vue'], resolve)
const seamlessDefault = (resolve) => require(['views/components/seamless-default.vue'], resolve)
const seamlessSwitch = (resolve) => require(['views/components/seamless-switch.vue'], resolve)
const seamlessOthers = (resolve) => require(['views/components/seamless-others.vue'], resolve)
const svgBarDefault = (resolve) => require(['views/components/svg-bar-default.vue'], resolve)
const svgBarSuper = (resolve) => require(['views/components/svg-bar-super.vue'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/component/seamless-default',
      component: seamlessDefault
    },
    {
      path: '/introduce',
      component: introduce
    },
    {
      path: '/component/seamless-switch',
      component: seamlessSwitch
    },
    {
      path: '/component/seamless-others',
      component: seamlessOthers
    },
    {
      path: '/component/svg-bar-default',
      component: svgBarDefault
    },
    {
      path: '/component/svg-bar-super',
      component: svgBarSuper
    }
  ]
})
