<template>
  <el-col :span="24" class="main">
    <pieChart></pieChart>
    <lineChart></lineChart>
  </el-col>
</template>
<script>
import pieChart from '@/components/dataAnalysisChart/pieChart.vue'
import lineChart from '@/components/dataAnalysisChart/lineChart.vue'
export default {
  components: {pieChart, lineChart},
  data() {
    return {

    }
  },

  mounted:{
  },
  created() {}
};
</script>
<style scoped>
</style>