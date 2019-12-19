<template>
  <div class="siderBar">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          :default-active="classes"
          class="el-menu-vertical-demo"
          @select="handleOpen"
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
            <span slot="title">常备药品</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-bank-card"></i>
            <span slot="title">其他药品</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    classes: function () {
      // 因为要做修改 num 的值 所以放在 计算属性里
      // return this.$store.state.num
      let classesInfo = '1'
      switch (this.$store.state.currentClasses) {
        case '全部分类':
          classesInfo = '1'
          break;
        case '专科用药':
          classesInfo = '2'
          break;
        case '常备药品':
          classesInfo = '3'
          break;
        case '其他药品':
          classesInfo = '4'
          break;
        default:
          break;
      }
      return classesInfo
    }
  },
  methods: {
    handleOpen (index, indexPath) {
      let classesInfo = index + ''
      let classMessage
      switch (classesInfo) {
        case '1':
          classMessage = '全部分类'
          break;
        case '2':
          classMessage = '专科用药'
          break;
        case '3':
          classMessage = '常备药品'
          break;
        case '4':
          classMessage = '其他药品'
          break;
        default:
          break;
      }
      //保存菜单
      this.$store.dispatch('classesModify', classMessage);
      // 依据菜单查询数据
      this.$store.dispatch('queryByClassification', classMessage);
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
