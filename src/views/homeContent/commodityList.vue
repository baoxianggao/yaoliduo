<template>
  <div class="main">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">活动列表</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  components: {}
}
</script>
<style lang="scss" scoped>
.main {
  // display: inline-block;
  float: left;
  .breadcrumb {
    position: relative;
    top: -15px;
  }
}
</style>