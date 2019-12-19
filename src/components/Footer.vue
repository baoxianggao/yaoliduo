<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <img class="footer-img" src="../assets/logo.png" alt="" />
        <div class="footer-imgText">燧人上海医疗科技有限公司</div>
      </div>
      <div class="footer-right">
        <div class="footer-guide">
          <div class="guide-home">
            <span class="guide-text">网站导航</span>
            <router-link to="/home" tag="span" class="guide-item">首页</router-link>
            <router-link to="/home/drugsDetails" tag="span" class="guide-item">药品信息</router-link>
            <router-link to="/informationReport" tag="span" class="guide-item">信息报告</router-link>
            <router-link to="/aboutus" tag="span" class="guide-item">关于我们</router-link>
          </div>
          <div class="guide-home">
            <span class="guide-text">药品导航</span>
            <span class="guide-item" @click="handelGuide('全部分类')">全部药品</span>
            <span class="guide-item" @click="handelGuide('专科用药')">专科用药</span>
            <span class="guide-item" @click="handelGuide('常备药品')">常备药品</span>
            <span class="guide-item" @click="handelGuide('其他药品')">其他药品</span>
          </div>
        </div>
        <div class="footer-company">
          Copyright&copy; 2019 suiren.com.All rights reserved. 沪 ICP备 11000614
          号
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handelGuide (classMessage) {
      this.$router.push({ name: 'drugsDetails'})
      //保存菜单
      this.$store.dispatch('classesModify', classMessage);
      // 依据菜单查询数据
      this.$store.dispatch('queryByClassification', classMessage);
    }
  },
}
</script>
<style lang="scss" scoped>
.footer {
  position: relative;
  bottom: 0px;
  width: 100%;
  height: 228px;
  background: rgba(81, 84, 96, 1);
  box-sizing: border-box;
  color: #fff;
  min-width: 1200px;
  font-size: 16px;
  overflow: hidden;
  .a {
  }
  .footer-content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    /* align-items: center; */
    .a {
    }
    .footer-left {
      text-align: center;
      height: 100%;
      margin-top: 40px;
      margin-left: 20px;
      .a {
      }
      .footer-img {
        height: 82px;
        width: 82px;
      }
      .footer-imgText {
        width: 168px;
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 20px;
        font-weight: 600;
      }
    }
    .footer-right {
      height: 100%;
      flex: 1;
      margin-left: 75px;
      margin-bottom: 85px;
      .a {
      }
      .footer-guide {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        margin-top: 72px;
        margin-right: 20px;
        margin-bottom: 85px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        .a {
        }
        .guide-home {
          .a {
          }
          .guide-text {
            font-size: 16px;
            font-weight: 600;
          }
          .guide-item {
            font-size: 13px;
            font-weight: 500;
            margin-left: 16px;
            cursor: pointer;
          }
        }
      }
      .footer-company {
        width: 100%;
        text-align: center;
        font-size: 13px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
