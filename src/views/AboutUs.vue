<template>
  <div class="container">
    <div class="container-banner"></div>
    <div class="container-text">
      <div class="company-info">
          燧人（上海）医疗科技有限公司，2018年10月10日成立，经营范围包括从事医疗科技领域内的技术开发、技术咨询、技术服务、技术转让，云平台服务，云软件服务，人工智能应用软件开发，商务信息咨询，药品研发，医疗器械研发、经营，软件开发，系统集成，计算机软硬件及辅助设备、仪器仪表、办公用品的销售，从事货物及技术的进出口业务。
      </div>
      <div class="company-address">
        <div class="address-text">公司地址：中国（上海）自由贸易试验区牛顿路393.421号2幢201室</div>
        <div class="address-map"></div>
      </div>
      <div>
        <div>交通方式</div>
        <div>
          公交：郭守敬路牛顿路
        </div>
        <div>
          公交：郭守敬路牛顿路
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutus'
}
</script>
<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  .a{}
  .container-banner{
    height: 370px;
    background: url('../assets/banner-g.png') no-repeat;
    background-size: 100% 100%;
  }
  .container-text{
    margin: 0 auto;
    box-sizing: border-box;
    width:1092px;
    height:917px;
    background:rgba(255,255,255,1);
    font-family:PingFangSC-Regular,PingFang SC;
    font-size:16px;
    font-weight:400;
    color:#1B1B1B;
    box-sizing: border-box;
    /* padding: 35px 46px 55px 41px; */
    /* text-indent:25px;
    line-height:22px */
    .a{}
    .company-info{
      font-size:14px;
      text-indent:25px;
      line-height:20px;
      padding: 29px;
    }
    .company-address{
      .a{}
      .address-text{
        font-size:14px;
        font-family:PingFang-SC-Bold,PingFang-SC;
        font-weight:bold;
        color:rgba(75,143,248,1);
        line-height:20px;
        padding-left: 25px;
        margin-bottom: 10px;
      }
      .address-map{
        box-sizing: border-box;
        border: 1px dashed #ccc;
        background: url('../assets/地图.png') no-repeat;
        height: 479px;
      }
    }
    
  }
}
</style>
