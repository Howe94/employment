import classTable from "../../commonModel/classTable.vue";
import pagination from "@/components/pagination/index"
import axios from "axios"
import { Loading } from "element-ui";
export default {
  name: "appointment-content",
  components: { classTable, pagination },
  data () {
    return {
      pageObj: {
        total: 0,
      },
      activeIndex: "allclass",
      labelPosition: 'right',
      classdata: [],
      controlDatas: []
    };
  },
  methods: {
    handleClick (tab, event) {
      let name = tab.name;
      this.getInformation(name);
    },
    // 子组件中 分页触发 父组件的方法
    changePages (page_size, currentPage) {
      this.controlDatas = this.classdata.slice((currentPage - 1) * page_size, currentPage * page_size)
    },
    getInformation (name) {
      this.$api.classInfo.classInfo({
        type: name

      },
        "get"
      ).then(res => {
        if (res.status == "200") {
          this.classdata = res.data;
          this.pageObj.total = res.data.length;
          this.changePages(20, 1)
        }
      }).catch(err => {
        console.log(err);
      });
    }

  },
  created () {
    this.getInformation()
  }
};
