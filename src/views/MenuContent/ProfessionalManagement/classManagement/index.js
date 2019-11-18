import classTable from "../../commonModel/classTable.vue";
import pagination from "@/components/pagination/index"
import axios from "axios"
import {
  Loading
} from "element-ui";
export default {
  name: "appointment-content",
  components: {
    classTable,
    pagination
  },
  data() {
    return {
      pageObj: {
        total: 0,
      },
      activeIndex: "allclass",
      labelPosition: 'right',
      classdata: [],
      controlDatas: [],
      dataList: [],
      type: 3
    };
  },
  methods: {
    handleClick(tab, event) {
      let name = tab.name;
      switch (name) {
        case "allclass":
          this.type = "3";
          this.getInformation(this.type);
          break;
        case "CSAT":
          this.type = "0";
          this.getInformation(this.type);
          break;
        case "IMAIS":
          this.type = "1";
          this.getInformation(this.type);
          break;
        case "E-commerce":
          this.type = "2";
          this.getInformation(this.type);
          break;
      }
    },
    // 子组件中 分页触发 父组件的方法
    changePages(page_size, currentPage) {
      this.controlDatas = this.dataList.slice((currentPage - 1) * page_size, currentPage * page_size)
    },
    getInformation(type) {
      this.$api.classInfo.classInfo({
          type: type

        },
        "get"
      ).then(res => {
        if (res.status == "200") {
          this.dataList = res.data;
          this.pageObj.total = res.data.length;
          this.changePages(20, 1)
        }
      }).catch(err => {
        console.log(err);
      });
    }

  },
  created() {
    this.getInformation(3)
  }
};
