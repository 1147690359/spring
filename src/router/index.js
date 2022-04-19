import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { auth: false }
  },

  // {
  //   path: '/jump1',
  //   name: 'Page1',
  //   component: () => import('../views/Page1.vue'),
  //   meta: { auth: false }
  // },
   
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('../views/Manage.vue'),
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: { title: ['首页'], auth: true }
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('../views/User.vue'),
        meta: { title: ['数据管理', '用户管理'], auth: true }  //header
      },
      {
        path: '/jump2',
        component: () => import('../views/Page2.vue'),
        meta: { title: ['数据管理', '数据管理2'], auth: true }
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
