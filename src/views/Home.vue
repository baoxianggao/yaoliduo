<template>
  <div class="home">
    <img src="../assets/banner1@2x.png" alt="" class="banner1" />
    <div class="homeContent">2131</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  text-align: center;
  .banner1 {
    width: 100%;
    height: 500px;
  }
  .homeContent {
    display: inline-block;
    flex: 1;
    width: 100%;
    background: red;
  }
}
</style>
