import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    // redirect: '/informationReport'
    component: Home
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [{ path: '/', name: 'home', component: Home }],
    redirect: '/aboutus'
    // component: Home
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
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
