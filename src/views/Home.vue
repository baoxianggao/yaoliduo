<template>
  <div class="home">
    <img src="../assets/banner1@2x.png" alt="" class="banner1" />
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
  components: {
    HomeContent
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
