import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
import login from '../views/login/index.vue'
import register from '../views/register/index.vue'
import Face from '../views/face.vue'
import findFace from '../views/findFace.vue'
import Job from '../views/content/Job/job.vue'
import Light from '../views/content/Light/light.vue'
import outWater from '../views/content/outWater/out_water.vue'
import Traffic from '../views/content/Traffic/traffic.vue'
import editMessage from '../views/editMessage.vue'
import Message from '../views/home/message.vue'
import jurisdiction from '../views/home/jurisdiction.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/message',
    name: 'message',
    component: Message,
  },
  {
    path: '/jurisdiction',
    name: 'jurisdiction',
    component: jurisdiction,
  },
  {
    path: '/face',
    name: 'Face',
    component: Face
  },
  {
    path: '/findFace',
    name: 'findFace',
    component: findFace
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/about.vue')
  },
  {
    path: '/Job',
    name: 'Job',
    component: Job
  },
  {
    path: '/Light',
    name: 'Light',
    component: Light
  },
  {
    path: '/outWater',
    name: 'outWater',
    component: outWater
  },
  {
    path: '/Traffic',
    name: 'Traffic',
    component: Traffic
  },
  {
    path: '/editMessage',
    name: 'editMessage',
    component: editMessage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 挂载路由守卫
router.beforeEach((to, form, next) => {
  // to 将要访问的路径
  // form 代表从那个路径跳转出来
  // next是一个函数 ，表示放行
  //  next()放行   next('/login') 强制跳转
  if (to.path === '/') {
    return next()
  }
  if (to.path === '/register') {
    return next()
  }
  if (to.path === '/findFace') {
    return next()
  }
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  const access_token = window.sessionStorage.getItem('access_token')
  if (!access_token && !tokenStr) {
    return next('/')
  }
  next()
})

export default router