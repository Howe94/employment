<template>
  <el-col :span="24" class="header">
    <!-- <el-col :span="4" class="logo" :class="this.$store.state.collapse?'menu-bar-collapse-width':'el-col-4'">
      <img :src="this.logo" /><span>{{isCollapse?sysName:sysName}}</span>
    </el-col>-->
    <div class="logo" :class="$store.state.app.collapse?'shrink-width':'expand-width'">
      <img :src="this.logo" />
      <span>{{$store.state.app.collapse?"":sysName}}</span>
    </div>
    <el-col :span="1">
      <div class="tools" @click.prevent="collapse">
        <i :class="$store.state.app.collapse?'el-icon-s-unfold':'el-icon-menu'"></i>
      </div>
    </el-col>

    <el-col :span="15">
      <div class="hearNavBar">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          background-color="#4b5f6e"
          text-color="#fff"
          active-text-color="#ffd04b"
          mode="horizontal"
          @select="handleSelectHearNavBar"
        >
          <el-menu-item index="1">{{$t("header.home")}}</el-menu-item>
          <el-menu-item index="2">{{$t("header.EIM")}}</el-menu-item>
          <el-menu-item index="3">{{$t("header.CEIM")}}</el-menu-item>
        </el-menu>
      </div>
    </el-col>
    <el-col :span="4" class="userinfo">
      <el-dropdown trigger="hover">
        <div>
          <span>{{userName}}</span>
          <img :src="this.userAvatar" />
          <!-- <el-avatar :src="this.userAvatar">{{username}}</el-avatar> -->
        </div>
        <!-- <span class="el-dropdown-link userinfo-inner">
          <img :src="this.userAvatar" />
          {{username}}
        </span>-->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>{{$t("userinfo.userCenter")}}</el-dropdown-item>
          <el-dropdown-item>{{$t("userinfo.setting")}}</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">{{$t("userinfo.signOut")}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-col>
</template>
<script>
import { mapState } from "vuex";
import store from "@/store/index";
import mock from "@/mock/index";
export default {
  data() {
    return {
      name: "",
      sysName: "",
      logo: "",
      userName: "",
      userAvatar: "",
      activeIndex: "true"
      // collapse: "false",
    };
  },

  methods: {
    //折叠导航栏
    collapse: function() {
      this.$store.commit("collapse");
      console.log(this.collapse);
    },
    //退出登录
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          sessionStorage.removeItem("user");
          this.$router.push("/login");
        })
        .catch(() => {});
    },
    handleSelectHearNavBar: function() {}
  },
  created: {},
  mounted() {
    // this.sysName = this.$store.state.collapse+"1"
    this.sysName = "就业信息管理系统";
    this.logo = require("@/assets/logo.png");
    var user = sessionStorage.getItem("user");
    if (user) {
      this.userName = user;
      this.userAvatar = require("@/assets/userInfo.png");
    }
  }
  // computed: {
  //   ...mapState({
  //     collapse: state => state.app.collapse,
  //   })
  // }
};
</script>

<style lang="scss" scoped>
img {
  vertical-align: middle;
  width: 40px;
  margin: 12px;
}
.header span {
  color: #fff;
  font-family: cursive;
  font-size: unset;
  // vertical-align: middle;
}

.header {
  height: 60px;
  background-color: rgb(75, 95, 110);
  .tools {
    // border-bottom: 1px solid #fff;
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    width: 40px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }
  .logo {
    display: inline-block;
    float: left;
  }
  .hearNavBar {
    font-size: 18px;
    font-weight: bold;
  }
  .shrink-width {
    width: 5%;
    transition: width 1s;
  }
  .expand-width {
    width: 15%;
    transition: width 1s;
  }
}
.logo {
  height: 61px;
  border-right: 1px solid white;
  // border-bottom: 1px solid white;
  vertical-align: middle;
}
.main {
  .aside {
    width: 100%;
    height: 100%;
    display: inline-block;
    // float: left;
    color: #000;
  }
}
.userinfo {
  float: right;
  height: 61px;
  // border-left: 1px solid white;
  // border-bottom: 1px solid white;
  img {
    border-radius: 10px;
  }
  span {
    font-family: -webkit-pictograph;
    font-size: larger;
  }
}
.menu-bar-width {
  width: 61px;
}
.menu-bar-collapse-width {
  width: 30px;
}
</style>