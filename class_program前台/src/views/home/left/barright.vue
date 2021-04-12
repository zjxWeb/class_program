<template>
  <div style="width: 100%; height: 100%" id="barRight"></div>
</template>

<script>
import echarts from "echarts";
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = echarts.init(document.getElementById("barRight"));
      var seriesData = [
        {
          name: "其他",
          value: "4808",
        },
        {
          name: "兰州",
          value: "4571",
        },
        {
          name: "全国",
          value: "6262",
        },
      ];
      var legendData = ["其他", "兰州", "全国"];
      var colorList = ["#73DDFF", "#43BB2E", "#FDB36A"];
      var option = {
        backgroundColor: "#000E63",
        tooltip: {
          trigger: "item",
          borderColor: "rgba(255,255,255,.3)",
          backgroundColor: "rgba(13,5,30,.6)",
          borderWidth: 1,
          padding: 5,
          formatter: function (parms) {
            var str =
              parms.marker +
              "" +
              parms.data.name +
              "</br>" +
              "数量：" +
              parms.data.value +
              "</br>" +
              "占比：" +
              parms.percent +
              "%";
            return str;
          },
        },
        grid: {
          left: "22%",
          top: "4%",
          bottom: "28%",
        },
        legend: {
          type: "scroll",
          orient: "horizontal",
          left: "25%",
          bottom: "0%",
          itemWidth: 10,
          itemHeight: 8,
          textStyle: {
            color: "#fff",
          },
          data: legendData,
        },
        series: [
          {
            type: "pie",
            z: 3,
            center: ["50%", "50%"],
            radius: ["30%", "55%"],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 5,
            itemStyle: {
              normal: {
                color: function (params) {
                  return colorList[params.dataIndex];
                },
              },
            },
            label: {
              show: false,
            },
            data: seriesData,
          },
        ],
      }
      //使用制定的配置项和数据显示图表
      myChart.setOption(option);
      function createExample(option, tooltipOption) {
        // 基于准备好的dom，初始化echarts图表
        // 为echarts对象加载数据
        myChart.setOption(option);
        tools.loopShowTooltip(myChart, option, tooltipOption); //第一个参数需要改一下
      }
      createExample(option, {
        loopSeries: true,
        // 间隔时间
        interval: 2000,
      });
    },
  },
};
</script>
