<template>
  <el-col :span="24" class="main">
    <div>
      <div id="chartLineBox" style="width: 100%;height: 70vh;"></div>
    </div>
  </el-col>
</template>
<script>
//先要导入依赖的实例
import echarts from "echarts";
export default {
  data() {
    return {};
  },

  //挂载前初始化echarts实例
  mounted: function() {
    this.chartLine = echarts.init(document.getElementById("chartLineBox"));

    // 指定图表的配置项和数据
    var option = {
      tooltip: {
        //设置tip提示
        trigger: "axis"
      },

      legend: {
        //设置区分（哪条线属于什么）
        data: ["年级就业人数", "班级就业人数"]
      },
      color: ["#8AE09F", "#FA6F53"], //设置区分（每条线是什么颜色，和 legend 一一对应）
      xAxis: {
        //设置x轴
        type: "category",
        boundaryGap: false, //坐标轴两边不留白
        data: [
          "2019-06",
          "2019-07",
          "2019-08",
          "2019-09",
          "2019-10",
          "2019-11",
          "2019-12",
          "2020-01",
          "2020-02",
          "2020-03",
          "2020-04",
          "2020-05"
        ],
        name: "签约时间", //X轴 name
        nameTextStyle: {
          //坐标轴名称的文字样式
          color: "rgb(39, 39, 39)",
          fontSize: 16,
          padding: [0, 0, 0, 20]
        },
        axisLine: {
          //坐标轴轴线相关设置。
          lineStyle: {
            color: "rgb(39, 39, 39)"
          }
        }
      },
      yAxis: {
        name: "就业人数",
        nameTextStyle: {
          color: "rgb(39, 39, 39)",
          fontSize: 16,
          padding: [0, 0, 10, 0]
        },
        axisLine: {
          lineStyle: {
            color: "rgb(39, 39, 39)"
          }
        },
        type: "value"
      },
      series: [
        {
          name: "年级就业人数",
          data: [100, 120, 130, 150, 200, 230, 250, 750],
          type: "line", // 类型为折线图
          lineStyle: {
            // 线条样式 => 必须使用normal属性
            normal: {
              color: "#8AE09F"
            }
          }
        },
        {
          name: "班级就业人数",
          data: [12, 20, 21, 32, 40, 42, 45, 53],
          type: "line",
          lineStyle: {
            normal: {
              color: "#FA6F53"
            }
          }
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    this.chartLine.setOption(option);
  },
  created() {}
};
</script>
<style scoped>
.wrapper {
  width: 7rem;
  height: 5rem;
  color: rgb(39, 39, 39);
}
</style>