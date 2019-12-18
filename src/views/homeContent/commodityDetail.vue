<template>
  <div class="main">
    <div class="detailInfo">
      <div class="breadcrumb">
        <span class="title">当前位置: </span>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">活动列表</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div></div>
      </div>
      <div class="commidity_introduce">
        <div class="carousel">
          <el-carousel height="400px">
            <el-carousel-item v-for="item in 4" :key="item">
              <img src="../../assets/commodity/1.jpg" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="introduce">
          <div class="title"></div>
          <div class="name"></div>
          <div class="approvalNumber"></div>
          <div class="specification"></div>
          <div class="validity"></div>
          <div class="company"></div>
          <div class="dosage"></div>
        </div>
      </div>
      <div class="commidity_details"></div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  .detailInfo {
    margin-top: 48px;
    width: 1092px;
    position: relative;
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
    }
    //下面是布局
    .commidity_introduce {
      width: 1092px;
      height: 472px;
      background: #fff;
      .carousel {
        width: 400px;
        height: 400px;
        background: red;
        position: relative;
        img {
          width: 307px;
          height: 307px;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -153px;
          margin-left: -153px;
        }
      }
    }
  }
}
</style>