<template>
  <div class="fertility-view">
    <div class="title">
      <img src="../assets/imgs/weather.png" alt="" />
      <div class="title-name">土壤肥力分析</div>
    </div>
    <div id="main" style="width: 100%; height: 138px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
    return {}
  },
  mounted() {
    var chartDom = document.getElementById("main")
    var myChart = echarts.init(chartDom)
    var option

    option = {
      tooltip: {
        trigger: "item",
        formatter: "{b}:({d}%)"
      },
      legend: [
        {
          top: "center",
          orient: "vertical",
          right: "10%",
          itemWidth: 5,
          itemHeight: 5,
          icon: "circle",
          itemGap: 10,
          textStyle: {
            color: "#4E5969",
            fontSize: 10,
            padding: [0, 0, 0, 10]
          },
          data: ["优质土壤", "一般土壤", "差质土壤", "贫瘠土壤", "其他土壤", "不可使用土壤"]
        }
      ],
      grid: {
        containLabel: true
      },
      title: {
        textStyle: {
          rich: {
            a: {
              fontSize: 14,
              color: "#1D2129"
            }
          }
        },
        subtextStyle: {
          rich: {
            a: {
              fontSize: 14,
              color: "#1D2129",
              padding: [0, 0, 0, 7]
            }
          }
        },
        x: "37%",
        y: "46%"
      },
      series: [
        {
          type: "pie",
          radius: ["40%", "60%"],
          center: ["40%", "50%"],
          color: ["#86DF6C", "#249EFF", "#0E42D2", "#846BCE", "#21CCFF", "#3a27bc"],
          label: {
            position: "outside",
            show: true,
            color: "#4E5969",
            fontSize: 16,
            formatter: function (params) {
              if (params.name !== "") {
                return params.percent + "%"
              }
            }
          },
          labelLine: {
            show: true,
            length2: 30,
            length: 10
          },
          itemStyle: {
            normal: {
              borderWidth: 2
            }
          },
          data: [
            { value: "44", name: "优质土壤" },
            { value: "48", name: "一般土壤" },
            { value: "24", name: "差质土壤" },
            { value: "16", name: "贫瘠土壤" },
            { value: "12", name: "其他土壤" },
            { value: "2", name: "不可使用土壤" }
          ]
        }
      ]
    }

    option && myChart.setOption(option)
  }
}
</script>

<style lang="scss" scoped>
.fertility-view {
  width: 100%;
  height: 100%;
  .title {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-bottom: 2px solid #3f5d53;
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
    .title-name {
      margin-left: 0.4rem;
      font-size: 1rem;
      color: #ccc;
    }
  }
}
</style>
