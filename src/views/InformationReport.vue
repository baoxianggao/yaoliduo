<template>
  <div class="container">
    <div class="container-banner">
      <!-- <img src="../assets/banner-x@2x.png" alt=""> -->
    </div>
    <div class="container-text">
      <p>
        我公司自成立以来秉承“质量第一、服务至上、以人为本”的服务宗旨，一直与国内多家医疗机构战略合作，收集药品在临床预防、诊断、治疗或调节生理功能的正常用法用量下出现有害和意外反应，通过医院药剂科监测员与临床科室医生共同讨论病例，做出药品安全的分析小结和评价结果。
      </p>
      <p>
        我公司向药品生产企业推出药品不良反应信息数据分析服务，依照药品生产企业提出的药品类别分析需求，出具该药品不良反应信息分析报告，为企业在药物研发、药品稳定性控制方面提供数据支持。
      </p>
      <p>
        如果涉药企业、其他组织或个人对我公司撰写的药品数据信息报告有需求，需支付相应的费用进行查看。我们用优质、用心的服务赢得了众多企业的信赖和好评。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'informationReport'
}
</script>
<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  .a{}
  .container-banner{
    height: 370px;
    background: url('../assets/banner-x.png') no-repeat;
    background-size: 100% 100%;
  }
  .container-text{
    margin: 0 auto;
    box-sizing: border-box;
    width:1092px;
    height:297px;
    background:rgba(255,255,255,1);
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:#1B1B1B;
    padding: 35px 46px 55px 41px;
    text-indent:25px;
    line-height:22px
  }
}
</style>
