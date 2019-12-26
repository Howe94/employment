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
          <el-button class="addStuInfBtn" type="primary" @click="addStuInf">添加</el-button>
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
        :model="stuInfoForm"
        label-width="120px"
        style="text-align: left; width: 80%;"
        :rules="editFormRules"
        ref="stuInfoForm"
      >
        <el-form-item label="学号" prop="stuNo">
          <el-input v-model="stuInfoForm.stuNo" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="stuName">
          <el-input v-model="stuInfoForm.stuName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="stuInfoForm.sex">
            <el-radio class="radio" :label="1">男</el-radio>
            <el-radio class="radio" :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="身份证" prop="idCard">
          <el-input v-model="stuInfoForm.idCard"></el-input>
        </el-form-item>
        <el-form-item label="院系" prop="department">
          <el-input placeholder="输入你的院系" v-model="stuInfoForm.department"></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="profession">
          <el-input placeholder="输入你的专业" v-model="stuInfoForm.profession"></el-input>
        </el-form-item>
        <el-form-item label="学历" prop="education">
          <el-radio-group v-model="stuInfoForm.education">
            <el-radio class="radio" :label="0">本科</el-radio>
            <el-radio class="radio" :label="1">硕士</el-radio>
            <el-radio class="radio" :label="2">博士</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="政治面貌" prop="politicalStatus">
          <el-radio-group v-model="stuInfoForm.politicalStatus">
            <el-radio class="radio" :label="0">团员</el-radio>
            <el-radio class="radio" :label="1">预备党员</el-radio>
            <el-radio class="radio" :label="2">党员</el-radio>
            <el-radio class="radio" :label="3">群众</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生源地" prop="biogenicLand">
          <v-distpicker
            hide-area
            :placeholders="defaultAddress"
            :province="formatAddress(stuInfoForm.biogenicLand,0)"
            :city="formatAddress(stuInfoForm.biogenicLand,1)"
            @selected="onChangeBiogenicLand"
          ></v-distpicker>
          <el-input v-model="stuInfoForm.biogenicLand" style="display:none"></el-input>
        </el-form-item>
        <el-form-item label="毕业时间" prop="graduationTime">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            format="yyyy-MM-dd"
            v-model="stuInfoForm.graduationTime"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="个人联系电话" prop="stuTel">
          <el-input v-model="stuInfoForm.stuTel"></el-input>
        </el-form-item>
        <el-form-item label="家庭联系人" prop="familyContact">
          <el-input v-model="stuInfoForm.familyContact" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="家庭电话" prop="homeTel">
          <el-input v-model="stuInfoForm.homeTel"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址" prop="homeAddress">
          <v-distpicker
            :placeholders="defaultAddress"
            :province="formatAddress(stuInfoForm.homeAddress,0)"
            :city="formatAddress(stuInfoForm.homeAddress,1)"
            :area="formatAddress(stuInfoForm.homeAddress,2)"
            @selected="onChangeHomeAddress"
          ></v-distpicker>
          <el-input v-model="stuInfoForm.homeAddress" style="display:none"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="dialogFormVisible=false" @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="updateData" v-if="editFlag">修改</el-button>
        <el-button type="primary" @click="addUserInfo" v-else>增加</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>

<script>
// import tabMenus from "./tabMenus/index"
import VDistpicker from "v-distpicker";
import { updateStuInfo, deleteStuInfo, addNewStu } from "../../../http/api";
import { Message, Loading } from "element-ui";
import { regular, validateOrder } from "../../../lib/validate";
export default {
  components: { VDistpicker },
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
      dialogStatus: "update",
      textMap: {
        update: "编辑信息",
        create: "增加学生基本信息"
      },
      editFlag: true,
      dialogFormVisible: false,
      editFormRules: {
        stuNo: [
          { required: true, message: "请输入学号", trigger: "blur" },
          {
            type: "string",
            len: 9,
            message: "学号必须为长度为9的数字值",
            trigger: "blur"
          }
        ],
        stuName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        sex: [{ required: true, message: "请输入性别", trigger: "blur" }],
        idCard: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
          {
            pattern: regular.IDCard,
            message: regular.IDCardMsg,
            trigger: "blur"
          }
        ],
        department: [
          { required: true, message: "请输入你的院系", trigger: "blur" }
        ],
        profession: [
          { required: true, message: "请输入专业", trigger: "blur" }
        ],
        education: [{ required: true, message: "请选择学历", trigger: "blur" }],
        politicalStatus: [
          { required: true, message: "请选择政治面貌", trigger: "blur" }
        ],
        biogenicLand: [
          { required: true, message: "请选择生源地", trigger: "blur" }
        ],
        graduationTime: [
          { required: true, message: "请选择毕业时间", trigger: "blur" }
        ],
        stuTel: [
          { required: true, message: "请输入个人联系方式", trigger: "blur" },
          {
            pattern: regular.mobilePhone,
            message: regular.mobilePhoneMsg,
            trigger: "blur"
          }
        ],
        familyContact: [
          { required: true, message: "请输入家庭联系人", trigger: "blur" }
        ],
        homeTel: [
          { required: true, message: "请输入家庭电话", trigger: "blur" },
          {
            pattern: regular.mobilePhone,
            message: regular.mobilePhoneMsg,
            trigger: "blur"
          }
        ],
        homeAddress: [
          { required: true, message: "请输入家庭地址", trigger: "blur" }
        ]
      },
      //编辑界面数据
      stuInfoForm: {
        stuNo: "", //学号
        stuName: "", //姓名
        sex: 0, //性别
        idCard: "", //身份证
        department: "", //院系
        profession: "", //专业
        education: 0, //学历
        politicalStatus: 1, //政治面貌
        biogenicLand: "", //生源地
        graduationTime: "", //毕业时间
        stuTel: "", //个人联系电话
        familyContact: "", //家庭联系人
        homeTel: "", //家庭联系电话
        homeAddress: "" //家庭住址
      },
      defaultAddress:{
        province: '-- 选择省 --',
        city: '-- 选择市 --',
        area: '-- 选择区 --',
      }
    };
  },
  methods: {
    //全选单选多选
    selsChange: function(sels) {
      this.sels = sels;
    },
    //编辑信息
    handleEdit(index, row) {
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.stuInfoForm = Object.assign({}, row);
      // console.log(this.stuInfoForm.homeAddress)//内蒙古自治区 阿拉善盟 阿拉善右旗
    },
    //格式地址信息
    formatAddress(areaList,areaLeave){
     var retAddress = areaList.split(" ")[areaLeave]
     return retAddress;
    },
    //选择生源地信息
    onChangeBiogenicLand(data) {
      this.stuInfoForm.biogenicLand = data.province.value;
    },
    //选择家庭地址信息
    onChangeHomeAddress(data) {
      console.log()
      this.stuInfoForm.homeAddress =
        data.province.value + " " + data.city.value + " " + data.area.value;
    },
    //删除某个同学的个人信息
    handleDelete(index, row) {
      const params = Object.assign({}, row);
      this.$confirm('永久删除该同学基本信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
      deleteStuInfo({ params }, "POST")
        .then(res => {
          console.log(res);
          if (res.status == "200") {
            this.getStuInformation();
            Message({
              message: res.data.msg,
              type: "success"
            });
          } else {
            Message({
              message: res.desc,
              type: "error"
            });
          }
        })
        })
        .catch(() => {
          Message({
            type: "info",
            message: "取消删除！"
          });
        });
    },
    //更新某个基本信息
    updateData() {
      const params = Object.assign({}, this.stuInfoForm);
      updateStuInfo({ params }, "POST")
        .then(res => {
          if (res.status == "200") {
            this.getStuInformation();
            Message({
              message: res.data.msg,
              type: "success"
            });
            this.dialogFormVisible = false;
          } else {
            Message({
              message: res.desc,
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
    // 添加新的基本信息按钮事件
    addStuInf() {
      this.editFlag = false;
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
    },
    // 添加新的基本信息
    addUserInfo() {
      this.$refs.stuInfoForm.validate(valid => {
        if (valid) {
          const params = Object.assign({}, this.stuInfoForm);
          console.log(params);
          addNewStu({ params }, "post").then(res => {
            if (res.status == "200") {
              this.getStuInformation();
              this.dialogFormVisible = false;
              Message({
                message: res.data.msg,
                type: "success"
              });
            }
          });
        } else {
          Message({
            message: "完善个人信息才能提交！！！",
            type: "error"
          });
        }
      });
    },
    closeDialog() {
      this.$refs["stuInfoForm"].resetFields();//清空填写内容
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
.distpicker-address-wrapper >>> select {
  width: 32%;
}
</style>
