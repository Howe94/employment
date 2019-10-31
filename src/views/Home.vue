<template>
  <el-row class="container">
  <!-- 头部导航栏 -->
  <HEADER></HEADER>
  <!-- 导航菜单栏 -->
  <CONTENT></CONTENT>
  <FOOTER></FOOTER>
  </el-row>
</template>

<script>
import CONTENT from "./content/index"
import HEADER from "./header/index"
import FOOTER from "./footer/index"
export default {
  components:{
    HEADER,
    CONTENT,
    FOOTER
    // error
  }
};
</script>

<style scoped lang="scss">

  .container {
    position:absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(12, 12, 12, 0.1);
  }
  .el-submenu__title{
    padding-left:0px !important;
  }
</style>  