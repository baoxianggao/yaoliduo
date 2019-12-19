<template>
  <div class="main">
    <div class="breadcrumb" v-if="isHome">
      <span class="title">当前位置: </span>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>药品信息</el-breadcrumb-item>
      </el-breadcrumb>
      <div></div>
    </div>
    <div
      class="commodityItem"
      v-for="(value, index) in commodityList"
      :key="index"
    >
      <CommodityItem :commodityInfo="value"></CommodityItem>
      <!-- {{ value }} -->
    </div>
  </div>
</template>
<script>
import CommodityItem from '../component/commodityItem'
export default {
  components: {
    CommodityItem
  },
  data () {
    return {
      isHome: false,
      arrInfo: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
    }
  },
  created () {
    console.log('this.$router_', this.$route)
    if (this.$route.name !== 'homeInfo') {
      this.isHome = true
    }
  },
  computed: {
    commodityList: function () {
      return this.$store.state.currentList
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  // display: inline-block;
  position: relative;
  width: 100%;
  .breadcrumb {
    position: absolute;
    top: -20px;
    left: 10px;
    float: left;

    .title {
      height: 14px;
      font-size: 14px;
      line-height: 1;
      float: left;
    }
    .el-breadcrumb {
      width: 500px;
    }
    .el-breadcrumb__separator {
      margin: 0px 5px;
    }
  }
  .commodityItem {
    width: auto;
    display: inherit;
  }
}
</style>