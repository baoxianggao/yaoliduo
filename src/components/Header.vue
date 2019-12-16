<template>
  <div class="page-header">
    <div class="header-content">
      <div class="home-logo">
        <img class="logo-img" src="../assets/logo@2x.png" alt="">
        <span class="logo-text">燧人医疗</span>
      </div>
      <div class="home-search">
        <div class="search-input"><input  type="text" placeholder="搜索药品，如「阿托伐他汀钙片」"></div>
        <div class="search-btn"><img src="../assets/search.png" alt=""></div>
      </div>
      <div class="hone-navbar">
        <div class="nav-item active">首页</div>
        <div class="nav-item">药品信息</div>
        <div class="nav-item">信息报告</div>
        <div class="nav-item">关于我们</div>
      </div>
    </div>
  </div>
</template>
<script>
// import store from '@/store/index.js'
// import router from '@/router'
// import { mapState } from 'vuex'
export default {
}
</script>
<style lang="scss" scoped>
.page-header{
  width: 100%;
  height: 100px;
  background: #ffffff;
  box-sizing: border-box;
  .header-content{
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .home-logo{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      .logo-img{
        width: 50px;
        height: 50px;
      }
      .logo-text{
        font-size:22px;
        font-weight:bold;
        color:rgba(86,133,245,1);
        display: inline-block;
        margin-left: 10px;
      }
    }
    .home-search{
      width: 452px;
      height: 42px;
      background:rgba(255,255,255,1);
      border-radius:24px;
      border:2px solid rgba(75,143,248,1);
      margin-left: 80px;
      box-sizing: border-box;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      
      .search-input{
        box-sizing: border-box;
        flex: 1;
        height:38px;
        /* width: 384px; */
        padding-left: 31px;
        padding-top: 7px;
        padding-bottom: 8px;
        padding-right: 10px;
        
        input{
          height: 100%;
          width: 100%;
          outline-style: none ;
          border: 0px;
          /* width:280px; */
          font-size:16px;
        }
      }
      .search-btn{
        box-sizing: border-box;
        width:64px;
        height: 38px;
        text-align: center;
        background:rgba(75,143,248,1);
        border-radius:24px;
        cursor: pointer;
        margin-right: -2px;
        
        img{
          padding-top: 10px;
        }
      }
    }
    .hone-navbar{
      margin-left: 64px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      font-size:18px;
      font-weight: 400;
      color:rgba(40,40,40,1);
      font-family:PingFang-SC-Medium,PingFang-SC;
      
      .nav-item{
        margin-right: 32px;
        cursor: pointer;
      }
      .active{
        font-size:18px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(75,143,248,1);
      }
    }
  }
}
</style>
