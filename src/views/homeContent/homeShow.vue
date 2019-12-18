<template>
  <div class="home">
    <img src="../../assets/banner1@2x.png" alt="" class="banner1" />
    <div class="homeContent">
      <div class="content_home">
        <SiderBar></SiderBar>
        <CommodityList></CommodityList>
      </div>
    </div>
  </div>
</template>
<script>
import SiderBar from '@/components/SiderBar.vue'
import CommodityList from './commodityList.vue'
export default {
  components: {
    SiderBar,
    CommodityList
  }
}
</script>
<style lang="scss" scoped>
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
  .content_home {
    display: flex;
    margin-top: 10px;
  }
}
</style>