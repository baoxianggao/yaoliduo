<template>
  <div class="mainItem" @click="gotoDeatail">
    <img src="../../assets/banner-g.png" alt="" />
    <div class="commodityInfo">
      <div class="commodityName">易善复 多烯磷脂酰胆碱胶囊</div>
      <div class="commoditySpecification">228mg*36粒</div>
      <div class="commodityCompany">赛诺菲(北京)制药有限公司</div>
      <div class="commodityFunction">辅助改善中毒性肝损伤（如药物…</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'commodityItem',
  components: {

  },
  methods: {
    gotoDeatail: function (event) {
      this.$router.push({ name: 'commodityInfo', query: { id: '1' } })
    }
  }
}
</script>
<style lang="scss" scoped>
.mainItem {
  float: left;
  width: 260px;
  height: 370px;
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  align-items: center;
  background: #fff;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 10px;
  img {
    width: 198px;
    height: 198px;
    position: relative;
    left: -7px;
    top: 10px;
  }
  .commodityInfo {
    width: 220px;
    height: 140px;
    padding: 20px 20px;
    .commodityName {
      margin-top: 6px;
      width: 173px;
      height: 20px;
      font-size: 14px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(27, 27, 27, 1);
      line-height: 20px;
    }
    .commoditySpecification {
      margin-top: 2px;
      width: 84px;
      height: 20px;
      font-size: 14px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(27, 27, 27, 1);
      line-height: 20px;
    }
    .commodityCompany {
      margin-top: 13px;
      width: 100%;
      background: rgba(255, 255, 255, 1);
    }
    .commodityFunction {
      margin-top: 10px;
      width: 210px;
      height: 25px;
      font-size: 13px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(75, 143, 248, 1);
      line-height: 18px;
    }
  }
}
</style>
