<template>
  <el-row class="container">
    <!-- 查询页面 -->
    <!-- <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="controlDatas">
				<el-form-item>
					<el-input v-model="controlDatas.name" placeholder="输入您要查询的信息"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUsers">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增</el-button>
				</el-form-item>
			</el-form>
    </el-col>-->

    <!-- 列表页面 -->
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

      <el-table-column label="性别">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.sex ? "男" : "女" }}</span>
        </template>
      </el-table-column>

      <el-table-column label="联系方式">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.stuTel }}</span>
        </template>
      </el-table-column>

      <el-table-column label="住址">
        <template slot-scope="scope">
          <i class="el-icon-address"></i>
          <span style="margin-left: 10px">{{ scope.row.homeAddress }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <!-- <template slot="header">
          <p>操作</p>
        </template>-->
        <template slot="header">
          <el-button
            class="addStuInfBtn"
            type="primary"
            @click="addStuInf"
          >添加</el-button>
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
      @close="closeDialog"
    >
      <el-form
        :model="editForm"
        label-width="100px"
        style="text-align: left"
        :rules="editFormRules"
        ref="editForm"
      >
        <el-form-item label="学号" prop="stuNo">
          <el-input v-model="editForm.stuNo" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="stuName">
          <el-input v-model="editForm.stuName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="editForm.sex">
            <el-radio class="radio" :label="1">男</el-radio>
            <el-radio class="radio" :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="身份证">
          <el-input v-model="editForm.idCard"></el-input>
        </el-form-item>
        <el-form-item label="院系">
          <el-input placeholder="输入你的院系" v-model="editForm.department"></el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input placeholder="输入你的专业" v-model="editForm.profession"></el-input>
        </el-form-item>
        <el-form-item label="学历">
          <el-radio-group v-model="editForm.education">
            <el-radio class="radio" :label="0">本科</el-radio>
            <el-radio class="radio" :label="1">硕士</el-radio>
            <el-radio class="radio" :label="2">博士</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="政治面貌">
          <el-radio-group v-model="editForm.politicalStatus">
            <el-radio class="radio" :label="0">团员</el-radio>
            <el-radio class="radio" :label="1">预备党员</el-radio>
            <el-radio class="radio" :label="2">党员</el-radio>
            <el-radio class="radio" :label="3">群众</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生源地">
          <v-distpicker
            hide-area
            :province="selectBiogenicLand.province"
            :city="selectBiogenicLand.city"
            @selected="onChangeAddress"
          ></v-distpicker>
          <el-input v-model="editForm.biogenicLand" style="display:none"></el-input>
        </el-form-item>
        <el-form-item label="毕业时间">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            format="yyyy-MM-dd"
            v-model="editForm.graduationTime"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="个人联系电话">
          <el-input v-model="editForm.stuTel"></el-input>
        </el-form-item>
        <el-form-item label="家庭联系人">
          <el-input v-model="editForm.familyContact" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="家庭电话">
          <el-input v-model="editForm.homeTel"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址">
          <v-distpicker
            :province="selectHomeAddress.province"
            :city="selectHomeAddress.city"
            :area="selectHomeAddress.area"
            @selected="onChangeAddress"
          ></v-distpicker>
          <el-input v-model="editForm.homeAddress" style="display:none"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="dialogFormVisible=false" @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="updateData" v-if="editFlag">修改</el-button>
        <el-button type="primary" @click="addUserInfo" v-else>增加</el-button>
        <!-- <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button> -->
      </div>
    </el-dialog>
  </el-row>
</template>

<script>
// import tabMenus from "./tabMenus/index"
import VDistpicker from "v-distpicker";
import { updateStuInfo } from "../../../http/api";
import { Message, Loading } from "element-ui";

export default {
  components: { VDistpicker },
  // components:{
  //   tabMenus
  // },
  // props: ["controlDatas"],
  props: {
    controlDatas: {
      type: Array,
      default: {}
    },
    getStuInformation: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      dialogStatus: "create",
      textMap: {
        update: "编辑信息",
        create: "Create"
      },
      editFlag: true,
      dialogFormVisible: false,
      editFormRules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }]
      },
      //编辑界面数据
      editForm: {
        stuNo: "", //学号
        stuName: "", //姓名
        sex: 0, //性别
        idCard: "", //身份证
        department: "", //院系
        profession: "", //专业
        education: "", //学历
        politicalStatus: "", //政治面貌
        biogenicLand: "", //生源地
        graduationTime: "", //毕业时间
        stuTel: "", //个人联系电话
        familyContact: "", //家庭联系人
        homeTel: "", //家庭联系电话
        homeAddress: "" //家庭住址
      },
      selectBiogenicLand: {
        province: "",
        city: ""
      },
      selectHomeAddress: {
        province: "",
        city: "",
        area: ""
      }
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
      this.editForm = Object.assign({}, row);
      var biogenic_landStr = this.editForm.biogenicLand.split(" ");
      var count = 0;
      for (var key in this.selectBiogenicLand) {
        this.selectBiogenicLand[key] = biogenic_landStr[count];
        count++;
      }
      var home_addressStr = this.editForm.homeAddress.split(" ");
      var count1 = 0;
      for (var key in this.selectHomeAddress) {
        this.selectHomeAddress[key] = home_addressStr[count1];
        count1++;
      }
    },
    onChangeAddress(data) {
      console.log(data);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    updateData() {
      const params = Object.assign({}, this.editForm);
      updateStuInfo({ params }, "POST")
        .then(res => {
          if (res.status == "200") {
            this.getStuInformation();
            Message({
              message: "修改成功！",
              type: "success"
            });
            this.dialogFormVisible = false;
          } else {
            Message({
              message: res.decs,
              type: "error"
            });
          }
        })
        .catch(() => {
          Message({
            type: "info",
            message: "未修改"
          });
        });
    },
    addStuInf() {
      this.editFlag = false
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
    },
    addUserInfo() {
      
    },
    closeDialog() {
      this.editForm = Object.assign({});
      this.selectHomeAddress = Object.assign({});
      this.selectBiogenicLand = Object.assign({});
    }
  }
};
</script>


<style scoped lang="scss">
.addStuInfBtn {
  margin-left: 30px;
}
.el-form-item__content {
  text-align: left;
}
select {
  color: #089feb;
  &:nth-of-type(3) {
    display: none;
  }
}
</style>
