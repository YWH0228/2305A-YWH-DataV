<template>
  <div class="soil-view">
    <div class="title">
      <img src="../assets/imgs/weather.png" alt="" />
      <div class="title-name">土壤灾情监测预警</div>
    </div>
    <div class="content">
      <div class="left">
        <img src="../assets/imgs/图层1.png" alt="" />
      </div>
      <div class="center"></div>
      <div class="right">{{ text1 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SoiltView",
  data() {
    return {
      text1:
        "中国土壤侵蚀空间分布数据是依据中华人民共和国行业标准SL190-96《土壤侵蚀分类分级标准》的总体要求，编制而成。土壤侵蚀制图的内容涉及侵蚀营力、方式、形态及下垫面条件等因素，首先确定土壤侵蚀类型，然后在侵蚀类型的基础上确定土壤侵蚀强度。"
    }
  }
}
</script>

<style lang="scss" scoped>
.soil-view {
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
  .content {
    width: 100%;
    height: 7.5rem;
    display: flex;
    align-items: center;
    padding: 0.6rem;
    .left {
      width: 45%;
      height: 100%;
      padding: 0.6rem 1.8rem;
      img {
        width: 100%;
        height: 100%;
        margin-top: 1rem;
      }
    }
    .center {
      width: 0.06rem;
      height: 60%;
      margin-top: 0.6rem;
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
      font-size: 0.72rem;
      color: #fff;
      padding: 0 1.2rem;
    }
  }
}
</style>
