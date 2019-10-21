<template>
  <el-row class="container">
  <!-- 头部导航栏 -->
  <HEADER></HEADER>
  <!-- 导航菜单栏 -->
  <MAIN></MAIN>
  </el-row>
</template>

<script>
import MAIN from "./main/index"
import HEADER from "./header/index"
export default {
  components:{
    HEADER,
    MAIN
  }
};
</script>

<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  .container {
    position:absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    // background: rgba(224, 234, 235, 0.1);
  }
</style>  