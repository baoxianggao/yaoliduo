<template>
  <div class="home">
    <router-view />
  </div>
</template>
<script>
import HomeContent from './homeContent/homeShow'
export default {
  name: 'home',
  data () {
    return {
      imgInfo: false
    }
  },
  components: {
    HomeContent
  },
  beforeRouteEnter (to, from, next) {
    // 这里还无法访问到组件实例，this === undefined
    next(vm => {
      if (to.name === 'homeInfo') {
        vm.imgInfo = true
        console.log('vm_', vm.imgInfo)
      }
    })
  }
}
</script>
<style lang="scss">
</style>
