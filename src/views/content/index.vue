<template>
  <el-col :span="24" class="main">
    <div :class="collapse?'shrink-width aside-box':'expand-width aside-box'">
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
            <i class="el-icon-thirdCustomermanagement-fill icon-fontSize"></i>
            <span slot="title">{{$t("asideMenu.PM.title")}}</span>
          </template>
          <el-menu-item
            index="1-1"
            @click="$router.push('classManagement')"
          >{{$t("asideMenu.PM.CM")}}</el-menu-item>
          <el-menu-item
            index="1-2"
            @click="$router.push('studentManagement')"
          >{{$t("asideMenu.PM.SM")}}</el-menu-item>
          <el-menu-item
            index="1-3"
            @click="$router.push('InformationManagement')"
          >{{$t("asideMenu.PM.ES")}}</el-menu-item>

        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-thirdSimilarproducts-fill icon-fontSize"></i>
            <span slot="title">{{$t("asideMenu.EM.title")}}</span>
          </template>
          <el-menu-item
            index="2-1"
            @click="$router.push('userList')"
          >{{$t("asideMenu.EM.EIR")}}</el-menu-item>
           <el-menu-item
            index="2-2"
            @click="$router.push('userList')"
          >{{$t("asideMenu.EM.PER")}}</el-menu-item>
          <el-menu-item
            index="2-3"
            @click="$router.push('userList')"
          >{{$t("asideMenu.EM.CG")}}</el-menu-item>
          <el-menu-item
            index="2-3"
            @click="$router.push('userList')"
          >{{$t("asideMenu.EM.ES")}}</el-menu-item>
        </el-submenu>

        <el-menu-item index="3">
          <i class="el-icon-thirdform-fill icon-fontSize"></i>
          <span slot="title">{{$t("asideMenu.CI.title")}}</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting icon-fontSize"></i>
          <span slot="title">{{$t("asideMenu.AM.title")}}</span>
        </el-menu-item>
      </el-menu>
    </aside>
    </div>
    <div :class="collapse?'container-box expand-container':'container-box shrink-container'">
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
    height:85%;
    .aside-box {
      display: inline-block;
      float: left;
    }
    .shrink-width {
      width: 5%;
      transition:width 1s;
    }
    .expand-width {
      width: 15%;
      transition:width 1s;
    }
    .container-box {
      display: inline-block;
      .content-container{
        margin: 5% 5%;
      }
    }
    .shrink-container{
      width: 85%;
    }
    .expand-container{
      width: 95%;
    }

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
