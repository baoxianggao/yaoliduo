<template>
  <div class="page-header">
    <div class="header-content">
      <div class="home-logo">
        <img class="logo-img" src="../assets/logo@2x.png" alt="" />
        <span class="logo-text">即医</span>
      </div>
      <div class="home-search">
        <div class="search-input">
          <input
            v-model="searchText"
            @keyup.enter="handleSearch()"
            type="text"
            placeholder="搜索药品，如「阿托伐他汀钙片」"
          />
        </div>
        <div class="search-btn" @click="handleSearch()">
          <img src="../assets/search.png" alt="" />
        </div>
      </div>
      <div class="hone-navbar">
        <router-link
          to="/"
          tag="div"
          class="nav-item"
          :class="{ active: isActive === 'homeInfo' }"
          >首页</router-link
        >
        <router-link
          to="/home/drugsDetails"
          tag="div"
          class="nav-item"
          :class="{ active: isActive === 'drugsDetails' }"
          >药品信息</router-link
        >
        <router-link
          to="/informationReport"
          tag="div"
          class="nav-item"
          :class="{ active: isActive === 'informationReport' }"
          >信息报告</router-link
        >
        <router-link
          to="/aboutus"
          tag="div"
          class="nav-item"
          :class="{ active: isActive === 'aboutus' }"
          >关于我们</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isActive: 'home',
      searchText: ''
    }
  },
  watch: {
    $route (to, from) {
      this.isActive = to.name
    }
  },
  methods: {
    handleSearch () {
      this.$router.push({ name: 'drugsDetails' })
      //保存菜单
      this.$store.dispatch('classesModify', '全部分类');
      // 依据菜单查询数据
      this.$store.dispatch('queryByName', this.searchText);
    }
  },
}
</script>
<style lang="scss" scoped>
.page-header {
  width: 100%;
  height: 100px;
  background: #ffffff;
  box-sizing: border-box;
  .header-content {
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .home-logo {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin-left: 20px;
      .logo-img {
        width: 50px;
        height: 50px;
      }
      .logo-text {
        font-size: 22px;
        font-weight: bold;
        color: rgba(86, 133, 245, 1);
        display: inline-block;
        margin-left: 10px;
      }
    }
    .home-search {
      width: 452px;
      height: 42px;
      background: rgba(255, 255, 255, 1);
      border-radius: 24px;
      border: 2px solid rgba(75, 143, 248, 1);
      margin-left: 80px;
      box-sizing: border-box;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;

      .search-input {
        box-sizing: border-box;
        flex: 1;
        height: 38px;
        /* width: 384px; */
        padding-left: 31px;
        padding-top: 7px;
        padding-bottom: 8px;
        padding-right: 10px;
        input {
          height: 100%;
          width: 100%;
          outline-style: none;
          border: 0px;
          /* width:280px; */
          font-size: 16px;
        }
      }
      .search-btn {
        box-sizing: border-box;
        width: 64px;
        height: 38px;
        text-align: center;
        background: rgba(75, 143, 248, 1);
        border-radius: 24px;
        cursor: pointer;
        margin-right: -2px;
        img {
          padding-top: 10px;
        }
      }
      .search-btn:active {
        padding-top: 2px;
        padding-left: 2px;
        background: #3a8ee6;
      }
    }
    .hone-navbar {
      margin-left: 64px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      font-size: 18px;
      font-weight: 400;
      color: rgba(40, 40, 40, 1);
      font-family: PingFang-SC-Medium, PingFang-SC;

      .nav-item {
        margin-right: 32px;
        cursor: pointer;
      }
      .active {
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: rgba(75, 143, 248, 1);
      }
    }
  }
}
</style>
