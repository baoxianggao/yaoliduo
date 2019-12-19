import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
require('normalize.css')
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
