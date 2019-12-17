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
      <div class="address-guide">
        <div class="guide-title">交通方式</div>
        <div  class="guide-type">
          <table>
            <td style="width: 40px;">公交:</td>
            <td>
              <span style="display: inline-block;">郭守敬路牛顿路 <span class="guide-item">778路</span><span class="guide-item">张江环线</span></span>
              <span style="display: inline-block;margin-left: 32px;">郭守敬路科苑路 <span class="guide-item">大桥6线</span><span class="guide-item">浦东22路</span></span>
              <span style="display: inline-block;margin-left: 32px;">龙东大道科苑路<span class="guide-item">989路</span><span class="guide-item">浦东28路</span></span>
              <span style="display: inline-block;margin-top:23px;">科苑路郭守敬路<span class="guide-item">浦东11路</span></span>
              <span style="display: inline-block;margin-top:23px;margin-left: 42px;">居里路郭守敬路<span class="guide-item">1046路</span></span>
            </td>
          </table>          
        </div>
        <div class="guide-type">
          <table>
            <td style="width: 40px;">地铁:</td>
            <td>
              <span>张江高科-地铁站<span class="guide-item">2号线</span></span>
              <span style="display: inline-block;margin-left: 26px;">花木路-地铁站<span class="guide-item">7号线</span></span>
            </td>
          </table>
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
        margin-bottom: 16px;
      }
      .address-map{
        box-sizing: border-box;
        border: 1px dashed #ccc;
        background: url('../assets/地图.png') no-repeat;
        height: 479px;
      }
    }
    .address-guide{
      box-sizing: border-box;
      padding-top: 23px;
      padding-left: 43px;
      .a{}
      .guide-title{
        font-size:16px;
        font-family:PingFang-SC-Bold,PingFang-SC;
        font-weight:bold;
        color:rgba(27,27,27,1);
        line-height:22px;
      }
      .guide-type{
        margin-top: 16px;
        font-size:14px;
        font-family:PingFang-SC-Bold,PingFang-SC;
        font-weight:bold;
        color:rgba(27,27,27,1);
        line-height:20px;
        margin-bottom: 42px;
        .a{}
        .guide-item{
          display: inline-block;
          box-sizing: border-box;
          width:80px;
          height:28px;
          line-height: 28px;
          text-align: center;
          background:rgba(255,255,255,1);
          border-radius:4px;
          border:1px solid rgba(75,143,248,1);
          margin-right: 10px;
          margin-left: 10px;
          font-size:14px;
          font-family:PingFang-SC-Bold,PingFang-SC;
          font-weight:bold;
          color:rgba(75,143,248,1);
        }
      }
    }
  }
}
</style>
