<template>
  <div class="weather-view">
    <div class="title">
      <img src="../assets/imgs/weather.png" alt="" />
      <div class="title-name">天气预报</div>
    </div>
    <div class="main">
      <el-table :data="tableData" style="width: 100%" :show-header="false">
        <el-table-column prop="day"> </el-table-column>
        <el-table-column prop="date"> </el-table-column>
        <el-table-column>
          <template v-slot="scope">
            <div class="weather-icon">
              <img src="../assets/imgs/83@2x.png" alt="" />
              <span>{{ scope.row.weather }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column width="200">
          <template v-slot="scope">
            <div class="temperature">
              <div class="weathers">{{ scope.row.Temperature[0] }} ℃</div>
              <el-slider v-model="scope.row.Temperature" range show-stops :max="40" style="width: 80px" disabled>
              </el-slider>
              <div class="weathers">{{ scope.row.Temperature[1] }} ℃</div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherView",
  data() {
    return {
      tableData: [
        {
          day: "今天",
          date: "05/14",
          weather: "晴",
          Temperature: [9, 30]
        },
        {
          day: "明天",
          date: "05/15",
          weather: "晴",
          Temperature: [10, 32]
        },
        {
          day: "后天",
          date: "05/16",
          weather: "晴",
          Temperature: [7, 36]
        },
        {
          day: "星期五",
          date: "05/17",
          weather: "晴",
          Temperature: [2, 34]
        },
        {
          day: "星期六",
          date: "05/18",
          weather: "晴",
          Temperature: [6, 33]
        },
        {
          day: "星期日",
          date: "05/19",
          weather: "晴",
          Temperature: [15, 30]
        },
        {
          day: "下星期一",
          date: "05/17",
          weather: "晴",
          Temperature: [13, 26]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.weather-view {
  width: 100%;
  height: 100%;

  .title {
    width: 100%;
    height: 50px;
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
  .main {
    height: calc(100% - 50px);
    .weather-icon {
      display: flex;
      align-items: center;
      img {
        width: 15px;
        height: 15px;
        margin-right: 5px;
      }
    }
    .temperature {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

// 去除el-table表格的边框和背景色
::v-deep .el-table,
::v-deep .el-table__header-wrapper th,
::v-deep .el-table__body-wrapper td,
::v-deep .el-table__body-wrapper tr,
::v-deep .el-table__body tr td {
  border: none !important;
  background-color: transparent !important; /* 使用 !important 来确保样式被应用 */
}
:deep .el-table .cell {
  line-height: 18px;
}
:deep .el-table {
  height: 100%;
}
:deep .el-table .el-table__cell {
  padding: 5px 0;
}
::v-deep .el-table::after {
  border: none !important;
}

//改变Slider 滑块的颜色

/* 如果需要改变滑块轨道的颜色 */
::v-deep .el-slider__bar {
  background-color: #fae20a !important; /* 绿色轨道 */
}
.weathers {
  width: 100px;
  text-align: center;
}
::v-deep .el-slider__button-wrapper {
  display: none;
}
::v-deep .el-slider__stop {
  background-color: #3f5d53a6 !important;
}
</style>
