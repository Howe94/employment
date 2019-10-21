<template>
    <el-col :span="24" class="header">
      <el-col :span="4" class="logo" :class="isCollapse?'logo-collapse-width':'logo-width'">
        <img :src="this.logo" /><span>{{isCollapse?sysName:sysName}}</span>
      </el-col>
      <el-col :span="16">
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
            <el-menu-item index="2">{{$t("header.informationCenter")}}</el-menu-item>
            <el-menu-item index="3">{{$t("header.messagemanagement")}}</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="hover">
          <div>
            <span>{{userName}}</span><img :src="this.userAvatar" />
            <!-- <el-avatar :src="this.userAvatar">{{username}}</el-avatar> -->
          </div>
          <!-- <span class="el-dropdown-link userinfo-inner">
            <img :src="this.userAvatar" />
            {{username}}
          </span> -->
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
import axios from "axios";
import mock from "@/mock/index.js";
export default {
  data() {
    return {
      name: "",
      sysName: "",
      logo: "",
      userName: "",
      userAvatar: ""
    };
  },

  methods: {},
  mounted() {
    this.sysName = "Cassie";
    this.logo = require("@/assets/logo.png");
    var user = sessionStorage.getItem("user");
    if (user) {
      this.userName = user;
      this.userAvatar = require("@/assets/userInfo.png");
    }
  }
};
</script>
<style lang="scss" scoped>
    img {
        vertical-align: middle;
        width: 40px;
        margin: 12px;
    }
    .header span{
    color: #fff;
    margin-left: 12px;
    // vertical-align: middle;
    }

    .header{
        height: 61px;
        background-color: rgb(75, 95, 110);
        }
    .logo {
        height: 61px;
        border-right: 1px solid white;
        border-bottom: 1px solid white;
        vertical-align: middle;
    }
    .main{
        .aside{
        width: 100%;
        height: 100%;
        display: inline-block;
        float: left;
        color: #000;
        }
    }
    .userinfo{
        height: 61px;
        // border-left: 1px solid white;
        border-bottom: 1px solid white;
        img{
        border-radius: 10px;
        }
    }
</style>