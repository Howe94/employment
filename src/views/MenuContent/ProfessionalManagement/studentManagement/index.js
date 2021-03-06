import formTable from "../../commonModel/formTable.vue";
import pagination from "@/components/pagination/index";
import employTable from "../../commonModel/employTable.vue"
import {
  getStuList,
  getEmployList
} from '../../../../http/api';
import axios from "axios"
import {
  Loading
} from "element-ui";
export default {
  name: "appointment-content",
  components: {
    formTable,
    pagination,
    employTable
  },
  data() {
    return {
      pageObj: {
        total: 0,
        page_size: 20,
        currentPage: 1,
      },
      activeIndex: "basicInformation",
      labelPosition: 'right',
      dataList: [],
      employdata: [],
      controlDatas: [],
      type: 3
    };
  },
  methods: {
    handleClick(tab, event) {
      this.controlDatas = [];
      let name = tab.name;
      switch (name) {
        case "basicInformation":
          this.getStuInformation(name);
          break;
        case "employmentInformation":
          this.type = 2;
          this.getEmploymentInformation(this.type);
          break;
        case "alreadyEmployed":
          this.type = 1;
          this.getEmploymentInformation(this.type);
          break;
        case "unemployed":
          this.type = 0;
          this.getEmploymentInformation(this.type);
          break;
      }
    },
    // 子组件中 分页触发 父组件的方法
    changePages(page_size, currentPage) {
      this.controlDatas = this.dataList.slice((currentPage - 1) * page_size, currentPage * page_size)
    },
    getStuInformation(stuNo) {
      getStuList({
        stuNo: stuNo//用于查询
        },
        "get"
      ).then(res => {
        if (res.status == "200") {
          this.dataList = res.data.stuList;
          this.pageObj.total = res.data.stuList.length;
          this.pageObj.page_size = 20;
          this.pageObj.currentPage = 1;
          this.changePages(20, 1)
        }
      }).catch(err => {
        console.log(err);
      });
    },
    getEmploymentInformation(type) {
      getEmployList({
          type: type
        },
        "get"
      ).then(res => {
        if (res.status == "200") {
          this.dataList = res.data.employList;
          this.pageObj.total = res.data.employList.length;
          this.changePages(20, 1)
        }
      }).catch(err => {
        console.log(err);
      });
    }
  },
  created() {
    this.getStuInformation()
  }

};
