<template>
  <el-row class="container">
    <!-- <tabMenus></tabMenus> -->

    <el-table
      :data="controlDatas"
      highlight-current-row
      @selection-change="selsChange"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="序号" type="index"></el-table-column>
      <el-table-column label="班级代号">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.classNo }}</span>
        </template>
      </el-table-column>

      <el-table-column label="班级名称">
        <template slot-scope="scope">
          <i class="el-icon-name"></i>
          <span style="margin-left: 10px">{{ scope.row.className }}</span>
        </template>
      </el-table-column>

      <el-table-column label="班级人数">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.classNum }}</span>
        </template>
      </el-table-column>

      <el-table-column label="班长">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.monitor }}</span>
        </template>
      </el-table-column>

      <el-table-column label="班长联系方式">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.monitorTel }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">班级详情</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>

<script>
// import pagination from "@/components/pagination/index"
// import tabMenus from "./tabMenus/index"
export default {
  // components:{
  //   tabMenus
  // },
  props: ["controlDatas"],
  data() {
    return {};
  },
  methods: {
    //全选单选多选
    selsChange: function(sels) {
      this.sels = sels;
    },
    handleEdit(index, row) {
      console.log(index, row)
      this.$router.push({ path:'/classDetail?classNo='+ row.classNo})
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>