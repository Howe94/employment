<template>
  <div class="step-com">
    <el-steps :active="active-0">
      <el-step v-for="(item,i) in dataStep" :key="i" :title="item.title" :description="item.desc"></el-step>
    </el-steps>
  </div>
</template>
<script>
import { Message } from "element-ui";
export default {
  name: "step",
  data() {
    return {
      dataStep: [
                {
                  title: "甲方",
                  desc: "用人单位"
                },
                {
                  title: "档案去向信息",
                  desc: ""
                },
                {
                  title: "乙方",
                  desc: "毕业生"
                },
                {
                  title: "完成",
                  desc: ""
                }
              ],
    };
  },
  props: ["active"],
  methods: {
  },
};
</script>
<style lang="scss">
$gray: #c0c4cc;
.step-com {
  text-align: left;
  margin: 20px 0 57px;
  .el-step__icon {
    width: 24px;
    height: 24px;
    font-size: 16px;
    background-color: #fff;
    color: #999;
    border: 2px solid #dddddd;
  }
  .el-step__main{
    padding-top: 5px;
  }
  .el-step__head.is-finish .el-step__icon {
    background-color: #245cca;
    border: 2px solid #245cca;
    font-size: 16px;
    color: #ffffff;
  }
  .el-step__title {
    font-size: 16px;
    color: #999;
    line-height: 22px;
  }
  .is-finish {
    font-size: 16px;
    color: #254cca;
    border-color: #254cca;
    line-height: 22px;
  }
  .is-process {
    font-weight: normal;
    color:#999;
  }
  .el-step__icon-inner{
    font-weight: 500;
  }
}
</style>

