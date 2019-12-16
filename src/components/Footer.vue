<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <img class="footer-img" src="../assets/logo.png" alt="">
        <div class="footer-imgText">燧人上海医疗科技有限公司</div>
      </div>
      <div class="footer-right">
        <div class="footer-guide">
          <div class="guide-home">
            <span>网站导航</span>
            <span>首页</span>
            <span>药品信息</span>
            <span>信息报告</span>
            <span>关于我们</span>
          </div>
          <div>
              <span>药品导航</span>
              <span>全部药品</span>
              <span>专科用药</span>
              <span>常备用药</span>
              <span>其他用药</span>
          </div>
        </div>
        <div class="footer-company">Copyright&copy; 2019 suiren.com.All rights reserved. 沪 ICP备 11000614 号</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .footer{
    width: 100%;
    height: 228px;
    background:rgba(81,84,96,1);
    box-sizing: border-box;
    color: #fff;
    position: absolute;
    bottom: 0;
    min-width: 1200px;
    font-size:16px;
    .a{}
    .footer-content{
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-flow: row nowrap;
      /* align-items: center; */
      .a{}
      .footer-left{
        text-align: center;
        height: 100%;
        margin-top: 40px;
        .a{}
        .footer-img{
          height: 82px;
          width: 82px;
        }
        .footer-imgText{
          width:168px;
          height:20px;
          font-size:14px;
          font-family:PingFangSC-Semibold,PingFang SC;
          font-weight:600;
          color:rgba(255,255,255,1);
          line-height:20px;
          font-weight: 600;
        }
      }
      .footer-right{
        height: 100%;
        flex: 1;
        margin-left: 75px;
        margin-bottom: 85px;
        .a{}
        .footer-guide{
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          margin-top: 72px;
          margin-bottom: 85px;
          .a{}
          .guide-home{
          }
        }
        .footer-company{
          width: 100%;
          text-align: center;
          font-size:13px;
          font-family:PingFang-SC-Medium,PingFang-SC;
          font-weight:500;
          color:rgba(255,255,255,1);
        }
      }
    }
  }
</style>
