<template>
  <div class="main">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">活动列表</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div></div>
    </div>
    <div class="commodityItem">
      <CommodityItem></CommodityItem>
    </div>
  </div>
</template>
<script>
import CommodityItem from '../component/commodityItem'
export default {
  components: {
    CommodityItem
  }
}
</script>
<style lang="scss" scoped>
.main {
  // display: inline-block;
  position: relative;
  .breadcrumb {
    position: absolute;
    top: -20px;
    left: 10px;
    float: left;
  }
  .commodityItem {
    width: auto;
  }
}
</style>