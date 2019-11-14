import formTable from "../../commonModel/formTable.vue";
import axios from "axios"
import { Loading } from "element-ui";
export default {
  name: "appointment-content",
  components: { formTable },
  data() {
    return {
      activeIndex: "first",
      labelPosition: 'right',
      formdata:[]
    };
  },
  methods: {
    handleClick(tab, event) {
      let name = tab.name;
      this.getInformation(name);
    },
    getInformation(name){
      this.$api.information.information({
          type:name
        },
        "get"
        ).then(res => {
            if(res.status == "200"){
              this.formdata = res.data;
              console.log(this.formdata)
            }
        }).catch(err => {
            console.log(err);
          });
    }

  },
  created() {
  }
};
