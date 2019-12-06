<template>
  <div class="controlseq-content common-appoint">
    <el-tabs v-model="activeIndex" @tab-click="handleClick">
      <el-tab-pane :label="'全部班级'" name="allclass">
        <classTable :controlDatas="controlDatas"></classTable>
      </el-tab-pane>
      <el-tab-pane :label="'计算机科学与技术'" name="CSAT">
        <classTable :controlDatas="controlDatas"></classTable>
      </el-tab-pane>
      <el-tab-pane :label="'信息管理与信息系统'" name="IMAIS">
        <classTable :controlDatas="controlDatas"></classTable>
      </el-tab-pane>
      <el-tab-pane :label="'电子商务 '" name="E-commerce">
        <classTable :controlDatas="controlDatas"></classTable>
      </el-tab-pane>
    </el-tabs>
    <pagination :pageObj="pageObj"></pagination>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
@import "./index.scss";
</style>