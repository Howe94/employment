<template>
  <el-col :span="24" class="main">
    <div :class="$store.state.collapse?'el-col-1':'el-col-4'">
    <aside class="aside">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="$store.state.collapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-comment"></i>
            <span slot="title">{{$t("asideMenu.information.title")}}</span>
          </template>
          <el-menu-item
            index="1-1"
            @click="$router.push('MessageOfMe')"
          >{{$t("asideMenu.information.messageOfMe")}}</el-menu-item>
          <el-menu-item
            index="1-2"
            @click="$router.push('InformationManagement')"
          >{{$t("asideMenu.information.informationManagement")}}</el-menu-item>
          <el-menu-item
            index="1-3"
            @click="$router.push('MyRumor')"
          >{{$t("asideMenu.information.myRumor")}}</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span slot="title">{{$t("asideMenu.userManagement.title")}}</span>
          </template>
          <el-menu-item
            index="2-1"
            @click="$router.push('userList')"
          >{{$t("asideMenu.userManagement.userList")}}</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">{{$t("asideMenu.informationStatistics.title")}}</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">{{$t("asideMenu.systemSettings.title")}}</span>
        </el-menu-item>
      </el-menu>
    </aside>
    </div>
    <div :class="$store.state.collapse?'el-col-23':'el-col-20'">
      <section class="content-container">
        <router-view></router-view>
      </section>
    </div>
  </el-col>
</template>

<script>
import axios from "axios";
import mock from "@/mock/index.js";
import store from "@/store/index.js";
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.main, .main div, aside, section, ul{
    height:100%;
}
.aside{
    border-right: solid 1px #e6e6e6;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
}
.el-menu--collapse{
    width: 100%;
}
</style>
