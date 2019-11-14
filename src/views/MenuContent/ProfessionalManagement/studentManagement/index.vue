<template>
  <div class="controlseq-content common-appoint">
    <el-tabs @tab-click="handleClick">
      <el-tab-pane :label="'基本信息'" name="basicInformation">
        <formTable
          :formdata="formdata"
        ></formTable>
      </el-tab-pane>
      <el-tab-pane :label="'就业信息'" name="employmentInformation">
        <formTable
          :formdata="formdata"
        ></formTable>
      </el-tab-pane>
      <el-tab-pane :label="'已就业'" name="alreadyEmployed">
        <formTable
          :formdata="formdata"
        ></formTable>
      </el-tab-pane>
      <el-tab-pane :label="'未就业'" name="unemployed">
        <formTable
          :formdata="formdata"
        ></formTable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
@import "./index.scss";
</style>