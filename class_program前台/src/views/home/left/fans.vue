<template>
  <div style="width: 100%; height: 100%" id="fans"></div>
</template>

<script>
import echarts from "echarts";
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = echarts.init(document.getElementById("fans"));
      let dataTime = [
        "2021-1",
        "2021-2",
        "2021-3",
        "2021-4",
        "2021-5",
        "2021-6",
      ];
      let database = [5002.84, 9050, 3302.79, 6801.55, 3908.35, 2104.02];
      let option = {
        // backgroundColor: "#000E63",
        title: {
          show: false,
          text: "多线图",
          textStyle: {
            align: "center",
            color: "#fff",
            fontSize: 20,
          },
          top: "5%",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          top: "30",
          left: "0",
          right: "15%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",

            axisLabel: {
              rotate: -45,
              color: "#fff",
              interval: 0,
              textStyle: {
                fontSize: 12,
              },
              fontFamily: "LCDEF",
            },

            axisTick: {
              lineStyle: {
                //刻度颜色
                color: "#6499B9",
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#112D79",
              },
            },
            splitArea: {
              // show: true,
              color: "#fff",
              lineStyle: {
                color: "#fff",
              },
            },

            splitLine: {
              show: false,
            },
            boundaryGap: false,
            data: dataTime,
          },
        ],

        yAxis: [
          {
            type: "value",
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#112D79"], //网格线颜色
                //   opacity: 0.06
              },
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              margin: 20,
              textStyle: {
                fontSize: 12,
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            // name: '注册总量',
            type: "line",

            symbol: "circle",
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: "#00F5D3", //折线
              },
            },

            itemStyle: {
              color: "#fff", //点 0F2A76
              borderColor: "rgba(171,252,252, 1)",
              borderWidth: 1,
              shadowColor: "rgba(171,252,252, 1)",
              shadowBlur: 6,
            },
            tooltip: {
              show: true,
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0,249,213, 1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0,249,213, 0)",
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            data: database,
          },
        ],
      };
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
