<template>
  <div class="block">
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="pageObj.currentPage"
                   :page-sizes="page_sizes"
                   :page-size="pageObj.page_size"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="pageObj.total">
    </el-pagination>
  </div>
</template>
<script>
export default {
  props: ["pageObj"],
  data () {
    return {
      currentPage: 1,
      page_sizes: [20, 40, 80, 100],
      page_size: 20,
    }
  },
  methods: {
    handleSizeChange (val) {
      
      this.pageObj.page_size = val;
      this.$emit("clickPages", this.pageObj.page_size, this.pageObj.currentPage);
    },
    handleCurrentChange (val) {
      this.pageObj.currentPage = val;
      this.$emit("clickPages", this.pageObj.page_size, this.pageObj.currentPage);
    },

  },
  created() {
  }
}
</script>
<style lang="scss" scoped>
.el-pagination {
  text-align: right;
  margin-top: 12px;
}
</style>