<template>
  <el-row class="container">
    <!-- <tabMenus></tabMenus> -->
    <el-table
      :data="formdata"
      style="width: 100%">
      <el-table-column
      label="序号"
        type="index">
      </el-table-column>
      <el-table-column
        label="学号">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.stuNo }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="姓名">
        <template slot-scope="scope">
          <i class="el-icon-name"></i>
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="性别">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.sex }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="联系方式">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.telphone }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="住址">
        <template slot-scope="scope">
          <i class="el-icon-address"></i>
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>


      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>

<script>
// import tabMenus from "./tabMenus/index"
  export default {
    // components:{
    //   tabMenus
    // },
    props: ["formdata"],
    data() {
      return {
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>