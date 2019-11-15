<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="page_sizes"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageObj.total">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    props: ["pageObj"],
    // data() {
    //   return {
    //     
    //   }
    // },
    data(){
        return{
        currentPage: 1,
        page_sizes:[20, 40, 80, 100],
        page_size: 20,
        }
    },
    methods: {
      handleSizeChange(val) {
        this.page_size = val;
        this.$emit("clickPages", this.page_size, this.currentPage);
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
          this.currentPage = val;
        console.log(`当前页: ${val}`);
      },
      
    },
    
    created: {
        
    },
    mounted(){
        // console.log("+++++++++++++++++"+this.test)
    }
  }
</script>
<style lang="scss" scoped>
    .el-pagination{
        text-align: right;
        margin-top: 12px;
    }
    
</style>