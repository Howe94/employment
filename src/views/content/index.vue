<template>
  <el-col :span="24" class="main">
    <div :class="collapse?'el-col-1':'el-col-4'">
    <aside class="aside">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="collapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-comment icon-fontSize"></i>
            <span slot="title">{{$t("asideMenu.SM.title")}}</span>
          </template>
          <el-menu-item
            index="1-1"
            @click="$router.push('MessageOfMe')"
          >{{$t("asideMenu.SM.BI")}}</el-menu-item>
          <el-menu-item
            index="1-2"
            @click="$router.push('InformationManagement')"
          >{{$t("asideMenu.SM.EI")}}</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-user-solid icon-fontSize"></i>
            <span slot="title">{{$t("asideMenu.EIM.title")}}</span>
          </template>
          <el-menu-item
            index="2-1"
            @click="$router.push('userList')"
          >{{$t("asideMenu.EIM.EIM")}}</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-document icon-fontSize"></i>
          <span slot="title">{{$t("asideMenu.CMS.title")}}</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting icon-fontSize"></i>
          <span slot="title">{{$t("asideMenu.CI.title")}}</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting icon-fontSize"></i>
          <span slot="title">{{$t("asideMenu.AM.title")}}</span>
        </el-menu-item>
      </el-menu>
    </aside>
    </div>
    <div :class="collapse?'el-col-23':'el-col-20'">
      <section class="content-container">
        <router-view></router-view>
      </section>
    </div>
  </el-col>
</template>

<script>
import {mapState} from 'vuex';
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
  },
  computed: {
    ...mapState({
      collapse: state => state.app.collapse,
    })
  }
};
</script>
<style lang="scss" scoped>
.main, .main div, aside, section, ul{
    height:100%;
}
.aside {
    border-right: solid 1px #e6e6e6;
    span{
    display: inline-block;
    font-size: initial;
    width: 50%;
    text-align: left;
  }
}
.icon-fontSize {
  position: absolute;
  top: 50%;
  left: 15px;
  margin-top: -7px;

}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
}
.el-menu--collapse{
    width: 100%;
}
</style>
