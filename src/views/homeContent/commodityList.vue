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
    <div class="commodity-content">
      <div
        class="commodityItem"
        v-for="(value, index) in commodityList"
        :key="index"
      >
        <CommodityItem :commodityInfo="value"></CommodityItem>
        <!-- {{ value }} -->
      </div>
    </div>
    <div class="pagenation-content">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :page-size="pageSize"
        :current-page="currentPage"
        :total="total"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
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
      isHome: false
    }
  },
  created () {
    this.$store.dispatch('pageChange', 1)
    this.$store.dispatch('classesModify', '全部分类')
    this.$store.dispatch('queryByClassification', '全部分类');
    if (this.$route.name !== 'homeInfo') {
      this.isHome = true
    }
  },
  computed: {
    currentPage: function ()  {
      return this.$store.state.currentPage
    },
    total: function ()  {
      return this.$store.state.total
    },
    pageSize: function ()  {
      return this.$store.state.pageSize
    },
    commodityList: function () {
      let { pageSize, currentPage, total } = this.$store.state
      return this.$store.state.currentList.slice((currentPage-1)*pageSize, currentPage*pageSize)
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.$store.dispatch('pageChange', val);
    }
  },
}
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  margin-bottom: 60px;
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
  .commodity-content{
    margin-bottom: 50px;
  }
  .commodityItem {
    width: auto;
    display: inherit;
  }
  .pagenation-content{
    position: absolute;
    bottom: -30px;
    left: 0;
    right: 0;
    text-align: center;
  }
}
</style>
