import formTable from "../../commonModel/formTable.vue";
import pagination from "@/components/pagination/index"
import axios from "axios"
import { Loading } from "element-ui";
export default {
  name: "appointment-content",
  components: { formTable, pagination },
  data() {
    return {
      pageObj: {
        total: 0,
      },
      activeIndex: "basicInformation",
      labelPosition: 'right',
      formdata: [],
      controlDatas: []
    };
  },
  methods: {
    handleClick(tab, event) {
      let name = tab.name;
      this.getInformation(name);
    },
    // 子组件中 分页触发 父组件的方法
    changePages(page_size, currentPage) {
      this.controlDatas = this.formdata.slice((currentPage-1)*page_size, currentPage*page_size)
      console.log("this.controlDatas")
      console.log(this.controlDatas)
      // this.getInformation(this.typeVal, page_size, currentPage)

    },
    getInformation(name){
      // console.log("++++++++++++"+page_size)
      this.$api.information.information({
          type:name
        },
        "get"
        ).then(res => {
            if(res.status == "200"){
              this.formdata = res.data;
              console.log("获取formdata")
              this.pageObj.total = res.data.length;
            }
        }).catch(err => {
            console.log(err);
          });
    }
  },
  created() {
    this.getInformation()
    .then(res => {
      console.log("this.formdata")
      this.changePages(20,1)
    })
  .catch(err => { });
    
  },
  
};
