import classTable from "../../commonModel/classTable.vue";
import pagination from "@/components/pagination/index"
import axios from "axios"
import { Loading } from "element-ui";
export default {
  name: "appointment-content",
  components: { classTable, pagination},
  data() {
    return {
      pageObj: {
        total: 0,
      },
      page_size:[50, 100, 150, 200],
      activeIndex: "allclass",
      labelPosition: 'right',
      classdata:[]
    };
  },
  methods: {
    handleClick(tab, event) {
      let name = tab.name;
      this.getInformation(name);
    },
    getInformation(name){
      this.$api.classInfo.classInfo({
          type:name

        },
        "get"
        ).then(res => {
            if(res.status == "200"){
              this.classdata = res.data;
              this.pageObj.total = res.data.length;
              // console.log(this.classdata)
            }
        }).catch(err => {
            console.log(err);
          });
    }

  },
  created() {
    this.getInformation()
  }
};
