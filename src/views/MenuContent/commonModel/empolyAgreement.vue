<template>
  <el-row class="container">
    <el-form ref="controlDatas" :model="controlDatas" label-width="120px">
      <el-form-item label="单位名称">
        <el-input v-model="controlDatas.unitName"></el-input>
      </el-form-item>
      <el-form-item label="邮编">
        <el-input v-model="controlDatas"></el-input>
      </el-form-item>
      <el-form-item label="统一社会信用代码或工商注册号">
        <el-input v-model="controlDatas.unifieSocialCreditCode"></el-input>
      </el-form-item>
      <el-form-item label="电子邮箱">
        <el-input v-model="controlDatas"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="controlDatas"></el-input>
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="controlDatas"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="controlDatas"></el-input>
      </el-form-item>
      <el-form-item label="单位性质">
        <el-input v-model="controlDatas"></el-input>
      </el-form-item>
      <el-form-item label="行业">
        <el-input v-model="controlDatas"></el-input>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
export default {
  props: [
    "controlDatas",
    "studentInformation",
    "archivesWhereabouts"
  ],
  data() {
    return {
      unitInform: {}
    };
  },
  methods: {
    //全选单选多选
    selsChange: function(sels) {
      this.sels = sels;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  created(){
    console.log("this.controlDatas")
    this.unitInform = this.controlDatas;
    console.log(this.unitInform)
  }
};
</script>
<style scoped>
/* .el-form-item {
    width: 40%;
    display: inline-block;
    border: 1px solid rgb(36, 35, 35);
} */
</style>