<template>
  <div id="app">
    <!-- <div class="main-container">
      <Header></Header>
      <router-view/>
    </div> -->
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: PingFang-SC-Medium, "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1200px;
  /* display: flex;
  flex-flow: column nowrap; */
  background: #F7F7F7;
  overflow: hidden;
}
</style>
