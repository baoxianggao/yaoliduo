<template>
  <div class="mainItem" @click="gotoDeatail">
    <img :src="srcInfo" alt="" />
    <!-- <img src="../../assets/commodity/1.jpg" alt="" /> -->
    <div class="commodityInfo">
      <div class="commodityName">{{ commodityInfo["title"] }}</div>
      <div class="commoditySpecification">{{ commodityInfo["model"] }}</div>
      <div class="commodityCompany">{{ commodityInfo["manufacturer"] }}</div>
      <div class="commodityFunction">
        {{ commodityInfo["functionalIndication"] }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['commodityInfo'],
  name: 'commodityItem',
  data () {
    return {
      // srcInfo: require('../../assets/commodity/' + this.commodityInfo['pic1'] + '.jpg')
      // srcInfo: `/src/assets/commodity/${this.commodityInfo['pic1']}.jpg`
    }
  },
  computed: {
    srcInfo: function () {
      return require('../../assets/commodity/' + this.commodityInfo['pic1'] + '.jpg')
    }
  },
  components: {

  },
  methods: {
    gotoDeatail: function (event) {
      this.$store.dispatch('currentRecord', this.commodityInfo).then(() => {
        this.$router.push({ name: 'commodityInfo' })
      })
    }
  },
  created () {
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 13px;
      width: 100%;
      background: rgba(255, 255, 255, 1);
    }
    .commodityFunction {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      margin-top: 10px;
      width: 210px;
      height: 54px;
      font-size: 13px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(75, 143, 248, 1);
      line-height: 18px;
    }
  }
}
</style>
