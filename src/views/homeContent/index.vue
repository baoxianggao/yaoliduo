<template>
  <div class="content_home">
    <SiderBar></SiderBar>
    <CommodityList></CommodityList>
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
.content_home {
  display: flex;
}
</style>