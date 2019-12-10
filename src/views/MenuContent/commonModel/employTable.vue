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
    <el-dialog title="提示" :visible.sync="dialogVisible" width="100%" :before-close="handleClose">
      <div class="iframe-wrapper" ref="wrapper">
        <iframe
          class="iframe"
          @load="iframeLoad($event)"
          :src="url"
          frameborder="0"
        ></iframe>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
import { Message, Loading } from "element-ui";
export default {
  props: ["controlDatas"],
  data() {
    return {
      dialogVisible: false,
      iframeName: "",
      url: "http://localhost:8080/common/minstone/form/editForm.do?code=YWBD_WJW_HSZYZSHFYX",
      isReuse: false, // 是否是复用表单
      loadingInstance: null,
    };
  },
  methods: {
     // iframe onload
    iframeLoad(e) {
      if (this.url) {
        const height = e.target.contentWindow.document.documentElement.scrollHeight + 50;
        this.$refs.wrapper.style.height = height + "px";
      }
    },
    //全选单选多选
    selsChange: function(sels) {
      this.sels = sels;
    },
    handleEdit(index, row) {
      this.dialogVisible = true;
    },
    handleDelete(index, row) {},
    addEmployInf() {},
    handleClose() {}
  }
};
</script>