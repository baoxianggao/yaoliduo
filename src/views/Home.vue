<template>
  <div class="home">
    <img v-if="imgInfo" src="../assets/banner1@2x.png" alt="" class="banner1" />
    <div class="homeContent">
      <router-view />
      <!-- <HomeContent></HomeContent> -->
    </div>
  </div>
</template>

<script>
import HomeContent from './homeContent/index'
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
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  .banner1 {
    width: 100%;
    height: 500px;
  }
  .homeContent {
    flex: 1;
    width: 80%;
    margin: 22px 22px;
  }
}
</style>
