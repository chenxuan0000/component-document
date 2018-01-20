import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// const index = () => import('views/index.vue')
const index = (resolve) => require(['views/index.vue'], resolve)
const introduce = (resolve) => require(['views/introduce.vue'], resolve)
const seamlessDefault = (resolve) => require(['views/components/seamless-default.vue'], resolve)
const seamlessOthers = (resolve) => require(['views/components/seamless-others.vue'], resolve)
const seamlessWatch = (resolve) => require(['views/components/seamless-watch.vue'], resolve)

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
      path: '/component/seamless-others',
      component:seamlessOthers
    },
    {
      path: '/component/seamless-watch',
      component:seamlessWatch
    }
  ]
})
