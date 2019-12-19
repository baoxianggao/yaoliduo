import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '*',
    component: Home
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/',
        redirect: 'homeInfo'
      },
      {
        path: 'drugsDetails',
        name: 'drugsDetails',
        component: () => import('../views/homeContent/drugsDetails.vue')
      },
      {
        path: 'homeInfo',
        name: 'homeInfo',
        component: () => import('../views/homeContent/homeShow.vue')
      },
      {
        path: 'commodityInfo',
        name: 'commodityInfo',
        component: () => import('../views/homeContent/commodityDetail.vue')
      }
    ]
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: () => import('../views/AboutUs.vue')
  },
  {
    path: '/informationReport',
    name: 'informationReport',
    component: () => import('../views/InformationReport.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
