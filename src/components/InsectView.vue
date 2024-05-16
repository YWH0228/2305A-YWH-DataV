<template>
  <div class="insect-view">
    <div class="title">
      <img src="../assets/imgs/weather.png" alt="" />
      <div class="title-name">病虫灾害监测预警</div>
    </div>
    <div class="content">
      <div class="left">
        <img src="../assets/imgs/图层2.png" alt="" />
      </div>
      <div class="center"></div>
      <div class="right">{{ text1 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InsectView",
  data() {
    return {
      text1:
        "据全国农作物病虫害测报网监测和专家会商分析，预计2022年小麦、水稻、玉米、马铃薯等粮食作物重大病虫害呈重发态势，全国发生面积21.4亿亩次，比2021年和近5年平均发生面积分别增加13.5%、10.7%，对70%以上的产区构成威胁。"
    }
  }
}
</script>

<style lang="scss" scoped>
.insect-view {
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
  .content {
    width: 100%;
    height: 138px;
    display: flex;
    align-items: center;
    padding: 10px;
    .left {
      width: 45%;
      height: 100%;
      padding: 10px 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .center {
      width: 1px;
      height: 60%;
      margin-top: 10px;
      background: linear-gradient(
        to bottom,
        rgba(173, 173, 173, 0.1) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(173, 173, 173, 0.1) 100%
      );
    }
    .right {
      width: 55%;
      height: 100%;
      font-size: 12px;
      color: #fff;
      padding: 5px 20px;
    }
  }
}
</style>
