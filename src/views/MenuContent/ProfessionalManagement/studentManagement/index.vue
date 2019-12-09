<template>
  <div class="controlseq-content common-appoint">
    <el-tabs v-model="activeIndex" @tab-click="handleClick">
      <el-tab-pane :label="'基本信息'" name="basicInformation">
        <formTable :controlDatas="controlDatas" :getStuInformation="getStuInformation" @clickPages="changePages"></formTable>
      </el-tab-pane>
      <el-tab-pane :label="'就业信息'" name="employmentInformation">
        <employTable :controlDatas="controlDatas" @clickPages="changePages"></employTable>
      </el-tab-pane>
      <el-tab-pane :label="'已就业'" name="alreadyEmployed">
        <employTable :controlDatas="controlDatas" @clickPages="changePages"></employTable>
      </el-tab-pane>
      <el-tab-pane :label="'未就业'" name="unemployed">
        <employTable :controlDatas="controlDatas" @clickPages="changePages"></employTable>
      </el-tab-pane>
    </el-tabs>
    <pagination :pageObj="pageObj" @clickPages="changePages"></pagination>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
@import "./index.scss";
</style>