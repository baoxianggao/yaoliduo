<template>
  <div class="siderBar">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <i class="el-icon-suitcase"></i>
            <span slot="title">全部分类</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-suitcase-1"></i>
            <span slot="title">专科用药</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-takeaway-box"></i>
            <span slot="title">常备用药</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-bank-card"></i>
            <span slot="title">其他用药</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="scss" >
.siderBar {
  float: left;
  .el-col-3 {
    width: 100%;
  }
}
</style>