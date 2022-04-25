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
   
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('../views/Manage.vue'),
    mata:{authRequired: true },
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
      },
      {
        path: '/jump3',
        component: () => import('../views/Page3.vue'),
        meta: { title: ['数据管理', '数据管理2'], auth: true }
      },
      {
        path: '/jump4',
        component: () => import('../views/Page4.vue'),
        meta: { title: ['数据管理', '数据管理2'], auth: true }
      },
      

    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,form,next)=>{
  const token= localStorage.getItem('token');
  if (to.name !=='Login' && !token) next({name: 'Login' }) 
  else next()
})

export default router
