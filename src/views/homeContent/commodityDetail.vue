<template>
  <div class="main">
    <div class="detailInfo">
      <div class="breadcrumb">
        <span class="title">当前位置: </span>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/home/drugsDetails' }"
            >药品信息</el-breadcrumb-item
          >
          <el-breadcrumb-item>药品详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div></div>
      </div>
      <div class="commidity_introduce">
        <div class="carousel">
          <el-carousel height="400px">
            <el-carousel-item v-for="(value, index) in srcInfo" :key="index">
              <img :src="value" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="introduce">
          <div class="title">{{ commdityInfo["title"] }}</div>
          <div class="content">商品名称：{{ commdityInfo["productName"] }}</div>
          <div class="content">通用名称：{{ commdityInfo["commonName"] }}</div>
          <div class="content">
            批准文号：{{ commdityInfo["approvalNumber"] }}
          </div>
          <div class="content">规格：{{ commdityInfo["model"] }}</div>
          <div class="content">
            有效期：{{ commdityInfo["expirationDate"] }}
          </div>
          <div class="content">
            生产企业：{{ commdityInfo["manufacturer"] }}
          </div>
          <div class="content">剂型：{{ commdityInfo["dosageForm"] }}</div>
          <div class="footer">
            适应症/功能主治：{{ commdityInfo["functionalIndication"] }}
          </div>
          <div class="footer">
            不良反应：{{ commdityInfo["adverseReactions"] }}
          </div>
          <div class="footer">用法用量：{{ commdityInfo["dosage"] }}</div>
        </div>
      </div>
      <div class="commidity_details">
        {{ commdityInfoTest }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      commdityInfo: this.$route.params,
      commdityInfoTest: this.$route.params.manual
    }
  },
  computed: {
    srcInfo: function () {
      let srcArr = []
      const params = this.$route.params
      for (let item in params) {
        if (item.indexOf('pic') > -1) {
          // srcArr.push(params[item])
          const srcItem = require('../../assets/commodity/' + params[item] + '.jpg')
          srcArr.push(srcItem)
        }
      }
      return srcArr
      // return require('../../assets/commodity/' + this.$route.params['pic1'] + '.jpg')
    }
  },
  created () {
    const a = this.$route.params.manual.replace(/\n/g, '<br>')
  }
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
      display: flex;
      justify-content: space-around;
      align-items: center;
      .carousel {
        width: 400px;
        height: 400px;
        border: 1px solid rgba(204, 204, 204, 1);
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
      .introduce {
        .title {
          width: auto;
          height: 30px;
          font-size: 22px;
          font-family: PingFang-SC-Heavy, PingFang-SC;
          font-weight: 800;
          color: rgba(27, 27, 27, 1);
          line-height: 30px;
          margin-bottom: 9px;
        }
        .content {
          margin-top: 15px;
          width: auto;
          height: 22px;
          font-size: 16px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(27, 27, 27, 1);
          line-height: 22px;
          margin-bottom: 12px;
        }
        .footer {
          margin-top: 11px;
          width: 460px;
          height: 20px;
          font-size: 14px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(137, 137, 137, 1);
          line-height: 20px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
        }
      }
    }
    .commidity_details {
      margin-top: 19px;
      background: #fff;
      padding: 26px 36px;
      width: 1020px;
      // height: 1391px;
      font-size: 14px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(137, 137, 137, 1);
      line-height: 40px;
      white-space: pre-wrap;
      // div {
      //   height: 20px;
      //   line-height: 20px;
      // }
    }
  }
}
</style>
