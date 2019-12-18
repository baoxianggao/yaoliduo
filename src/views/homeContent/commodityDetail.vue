<template>
  <div>
    <div class="commidity_introduce">
      <div class="carousel">
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
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
</template>
<script>
export default {

}
</script>
<style lang="scss">
</style>