<template>
    <el-col :span="24" class="main">
      <el-col :span="4">
      <aside class="aside">
        <!--导航菜单-->
        <el-menu
          default-active="1-3"
          class="el-menu-vertical-demo"
          @open="handleopen"
          @close="handleclose"
          @select="handleselect"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-comment"></i>
              <span slot="title">{{$t("asideMenu.information.title")}}</span>
            </template>
            <el-menu-item index="1-1" @click="$router.push('MessageOfMe')">{{$t("asideMenu.information.messageOfMe")}}</el-menu-item>
            <el-menu-item index="1-2" @click="$router.push('InformationManagement')">{{$t("asideMenu.information.informationManagement")}}</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('MyRumor')">{{$t("asideMenu.information.myRumor")}}</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span slot="title">{{$t("asideMenu.userManagement.title")}}</span>
            </template>
            <el-menu-item index="2-1" @click="$router.push('userList')">{{$t("asideMenu.userManagement.userList")}}</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" >
            <i class="el-icon-document"></i>
            <span slot="title">{{$t("asideMenu.informationStatistics.title")}}</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">{{$t("asideMenu.systemSettings.title")}}</span>
          </el-menu-item>
        </el-menu>
      </aside>
      </el-col>
      <el-col :span="20">
      <section class="content-container">
        <router-view></router-view>
      </section>
      </el-col>
    </el-col>
    

</template>

<script>
import axios from "axios";
import mock from "@/mock/index.js";
export default {
}

</script>
<style lang="scss" scoped>

</style>
