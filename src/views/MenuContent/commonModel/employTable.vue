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
        <template slot="header">
          <el-button class="addEmployInfBtn" type="primary" @click="addEmployInf">添加</el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑弹框 -->
    <el-dialog
      :title="textMap[dialogStatus]"
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="true"
      :destroy-on-close="true"
      width="80%"
      @close="closeDialog"
    >
      <Step :active="active"/>
      <empolyAgreement
        :unitInform="unitInformation"
        :archivesWhereabouts="archivesWhereabouts"
        :studentInformation="studentInformation"
        :controlDatas="controlDatas"
      ></empolyAgreement>
      <!-- <employForm></employForm> -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="active--">上一步</el-button>
        <el-button @click="active++">下一步</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
import { Message, Loading } from "element-ui";
import empolyAgreement from "./empolyAgreement";
import employForm from "./employForm";
import Step from "@/components/step.vue"
export default {
  props: ["controlDatas"],
  components: { empolyAgreement, employForm, Step },
  data() {
    return {
      dialogStatus: "update",
      textMap: {
        update: "编辑就业信息",
        create: "增加学生就业信息"
      },
      editFlag: true,
      dialogFormVisible: false,
      unitInformation: {}, //单位信息
      archivesWhereabouts: {}, //档案去向
      studentInformation: {}, //毕业生信息
      active:1//步骤条状态
    };
  },
  methods: {
    //全选单选多选
    selsChange: function(sels) {
      this.sels = sels;
    },
    handleEdit(index, row) {
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {},
    addEmployInf() {},
    handleClose() {},
    closeDialog() {}
  }
};
</script>
<style>
/* .el-dialog__body{
  height: 700px;
} */
</style>