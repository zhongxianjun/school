import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Search from '@/pages/search'
import Login from '@/pages/login'
import Regist from '@/pages/regist'
import Administ from '@/pages/administ'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/regist',
      name: 'regist',
      component: Regist
    },
    {
      path: '/administ',
      name: 'administ',
      component: Administ
    }
  ]
})
