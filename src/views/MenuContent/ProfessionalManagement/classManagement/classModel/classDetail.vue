<template>
  <el-col :span="24" class="main">
    <div>
      <h3 style="display:inline-block">{{this.$route.query.classNo}}班就业信息</h3>
      <el-button class="chartBtn" type="primary" @click="changeChart()">{{tip}}</el-button>
    </div>
    <div class="pieBox" v-if="pieFlage">
      <pieChart></pieChart>
      <tag-cloud :data="hotTag" @clickTag="clickTagItem"></tag-cloud>
    </div>
    <div class="lineBox" v-else>
      <lineChart></lineChart>
    </div>
  </el-col>
</template>
<script>
import pieChart from "@/components/dataAnalysisChart/pieChart.vue";
import lineChart from "@/components/dataAnalysisChart/lineChart.vue";
export default {
  components: { pieChart, lineChart },
  data() {
    return {
      tip: "查看就业趋势折线图",
      pieFlage: true,
      hotTag: [
        { id: "05023f8da31c4b4187cc6899e2a3aec2", name: "前端开发工程师" },
        { id: "0ef028e5278f4f5ca31f99f1bd22b1cc", name: "前端开发工程师" },
        { id: "1a32ef04d3c548eaa6777abb46da32f2", name: "前端开发工程师" },
        { id: "2c26488325bd493687d16315fe0e5fdd", name: "前端开发工程师" },
        { id: "3a786111828a4b9f89ae9da25753eedd", name: "前端开发工程师" },
        { id: "4ed593eed91b4244969995237f5c96c5", name: "前端开发工程师" }, 
        { id: "615d2c178f1a47cb8d473823e74f5386", name: "后端开发工程师" },
        { id: "76f652df03db43349272a9aff492b065", name: "测试工程师" },
        { id: "8ff29d0d35e548feb945063b34ed9c9b", name: "测试工程师" },
        { id: "a8ac2170008746fdadc05ea461bc5e37", name: "后端开发工程师" },
        { id: "0ef028e5278f4f5ca31f99f1bd22b1cc", name: "测试工程师" },
        { id: "1a32ef04d3c548eaa6777abb46da32f2", name: "微信小程序开发" },
        { id: "2c26488325bd493687d16315fe0e5fdd", name: "后端开发工程师" },
        { id: "3a786111828a4b9f89ae9da25753eedd", name: "安卓开发工程师" },
        { id: "4ed593eed91b4244969995237f5c96c5", name: "前端开发工程师" }, 
        { id: "615d2c178f1a47cb8d473823e74f5386", name: "安卓开发工程师" },
        { id: "76f652df03db43349272a9aff492b065", name: "测试工程师" },
        { id: "8ff29d0d35e548feb945063b34ed9c9b", name: "安卓开发工程师" },
        { id: "a8ac2170008746fdadc05ea461bc5e37", name: "后端开发工程师" },
        { id: "0ef028e5278f4f5ca31f99f1bd22b1cc", name: "微信小程序开发" },
        { id: "1a32ef04d3c548eaa6777abb46da32f2", name: "微信小程序开发" },
        { id: "2c26488325bd493687d16315fe0e5fdd", name: "后端开发工程师" },
        { id: "3a786111828a4b9f89ae9da25753eedd", name: "安卓开发工程师" },
        { id: "4ed593eed91b4244969995237f5c96c5", name: "捡破烂" }, 
        { id: "615d2c178f1a47cb8d473823e74f5386", name: "安卓开发工程师" },
        { id: "76f652df03db43349272a9aff492b065", name: "测试工程师" },
        { id: "8ff29d0d35e548feb945063b34ed9c9b", name: "捡破烂" },
        { id: "a8ac2170008746fdadc05ea461bc5e37", name: "创业" },
        { id: "0ef028e5278f4f5ca31f99f1bd22b1cc", name: "创业" },
        { id: "1a32ef04d3c548eaa6777abb46da32f2", name: "微信小程序开发" },
        { id: "2c26488325bd493687d16315fe0e5fdd", name: "务农" },
        { id: "3a786111828a4b9f89ae9da25753eedd", name: "安卓开发工程师" },
        { id: "4ed593eed91b4244969995237f5c96c5", name: "打杂" }, 
        { id: "615d2c178f1a47cb8d473823e74f5386", name: "安卓开发工程师" },
        { id: "76f652df03db43349272a9aff492b065", name: "测试工程师" },
        { id: "8ff29d0d35e548feb945063b34ed9c9b", name: "捡破烂" },
        { id: "a8ac2170008746fdadc05ea461bc5e37", name: "回家养老" }
      ]
    };
  },

  methods: {
    changeChart() {
      this.tip = this.pieFlage ? "查看班级就业饼状图" : "查看就业趋势折线图";
      this.pieFlage = this.pieFlage ? false : true;
    },
    clickTagItem(tag) {
      // TODO
      console.log(tag)
    }
  },
  created() {}
};
</script>
<style scoped>
.chartBtn {
  float: right;
}
</style>