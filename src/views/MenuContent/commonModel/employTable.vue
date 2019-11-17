<template>
  <el-row class="container">
    <!-- <tabMenus></tabMenus> -->
    <el-table :data="controlDatas"
              style="width: 100%">
      <el-table-column label="序号"
                       type="index">
      </el-table-column>
      <el-table-column label="学号">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.stuNo }}</span>
        </template>
      </el-table-column>

      <el-table-column label="姓名">
        <template slot-scope="scope">
          <i class="el-icon-name"></i>
          <span style="margin-left: 10px">{{ scope.row.stuName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="就业单位名称">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.unitName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="岗位名称">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.jobName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="薪酬（月薪）">
        <template slot-scope="scope">
          <i class="el-icon-address"></i>
          <span style="margin-left: 10px">{{ scope.row.pay }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini"
                     type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>

<script>
export default {
  // components:{
  //   tabMenus
  // },
  props: ["controlDatas"],
  data () {
    return {
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
    }
  }
}
</script>