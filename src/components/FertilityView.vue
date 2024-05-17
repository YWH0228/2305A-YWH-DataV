<template>
  <div class="fertility-view">
    <div class="title">
      <img src="../assets/imgs/weather.png" alt="" />
      <div class="title-name">土壤肥力分析</div>
    </div>
    <div id="main" style="width: 100%; height: 10rem"></div>
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

    // 图表渲染参数开始
    option = {
      tooltip: {
        trigger: "item",
        // formatter: "{b} : {d}%"
        formatter: function (a) {
          var c = a.name
          var d = c.split(":")
          return d[0] + " : " + a.percent + "%"
        }
      },
      legend: [
        {
          icon: "square",
          orient: "vertical",
          left: "left",
          top: "center",
          itemGap: 18,
          padding: 15,
          textStyle: {
            color: "#fff",
            padding: [0, 0, 0, -5]
          },
          data: ["警: 90", "自危害: 120", "攻击入侵: 110"]
          // data: dataResult.name[0]
        },
        {
          icon: "square",
          orient: "vertical",
          left: "right",
          top: "center",
          itemGap: 18,
          padding: 15,
          textStyle: {
            color: "#fff",
            padding: [0, -100, 0, -60]
          },
          data: ["安全预警: 150", "信息刺探: 70", "恶意代码: 60"]
          // data: dataResult.name[1]
        }
      ],
      grid: {
        right: 100
      },
      series: [
        {
          type: "pie",
          radius: ["40%", "60%"],
          center: ["50%", "50%"],

          label: {
            normal: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false,
              length2: 10
            }
          },
          data: [
            {
              value: 90,
              // value: dataResult.value[3],
              name: "警" + ": " + 90,
              // name: dataResult.name[0][3],
              itemStyle: {
                normal: {
                  color: "#ffff00"
                }
              }
            },
            {
              value: 120,
              // value: dataResult.value[4],
              name: "自危害" + ": " + 120,
              // name: dataResult.name[0][4],
              itemStyle: {
                normal: {
                  color: "#ff0000"
                }
              }
            },

            {
              value: 110,
              // value: dataResult.value[5],
              name: "攻击入侵" + ": " + 110,
              // name: dataResult.name[0][5],
              itemStyle: {
                normal: {
                  color: "#ff1a40"
                }
              }
            },

            {
              value: 150,
              // value: dataResult.value[9],
              name: "安全预警" + ": " + 150,
              // name: dataResult.name[1][3],
              itemStyle: {
                normal: {
                  color: "#0000ff"
                }
              }
            },

            {
              value: 70,
              // value: dataResult.value[10],
              name: "信息刺探" + ": " + 70,
              // name: dataResult.name[1][4],
              itemStyle: {
                normal: {
                  color: "#de3d1c"
                }
              }
            },
            {
              value: 60,
              // value: dataResult.value[11],
              name: "恶意代码" + ": " + 60,
              // name: dataResult.name[1][5],
              itemStyle: {
                normal: {
                  color: "#4ec968"
                }
              }
            }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
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
    height: 2.4rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-bottom: 0.12rem solid #3f5d53;
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
