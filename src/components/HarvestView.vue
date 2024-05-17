<template>
  <div class="harvest-view">
    <div class="title">
      <div class="left">
        <img src="../assets/imgs/weather.png" alt="" />
        <div class="title-name">地块动态</div>
      </div>
      <div class="right">
        <button :class="btnTob == 1 ? 'bts1 active ' : 'bts1'" @click="btnTob = 1">全部</button>
        <button :class="btnTob == 2 ? 'bts2 active' : 'bts2'" @click="btnTob = 2">全部</button>
      </div>
    </div>
    <div class="content">
      <div class="content-item">
        <div class="product">
          <div class="top">产品</div>
          <div class="bottom">百香果</div>
        </div>
        <div class="product">
          <div class="top">实际收成</div>
          <div class="bottom">481斤</div>
        </div>
        <div class="product">
          <div class="top">预计收入</div>
          <div class="bottom">549斤</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="content-item">
        <div class="product">
          <div class="top">加工后</div>
          <div class="bottom">百香果茶</div>
        </div>
        <div class="product">
          <div class="top">预计收成</div>
          <div class="bottom">200斤</div>
        </div>
        <div class="product">
          <div class="top">实际</div>
          <div class="bottom">291斤</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HarvestView",
  data() {
    return {
      btnTob: "1"
    }
  }
}
</script>

<style lang="scss" scoped>
.harvest-view {
  width: 100%;
  height: 100%;
  .title {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-bottom: 0.12rem solid #3f5d53;
    .left {
      display: flex;
      img {
        width: 1.5rem;
        height: 1.5rem;
        align-items: center;
      }
      .title-name {
        margin-left: 0.4rem;
        font-size: 1rem;
        color: #ccc;
      }
    }
    .right {
      .bts1 {
        width: 3.6rem;
        height: 1.8rem;
        border-radius: 0.76rem 0 0 0.75rem;
        border: 0.12rem solid #3e6254;
        background-color: #214134c9;
        color: #92a59d;
        font-weight: bolder;
        border-right: none;
      }
      .bts2 {
        width: 3.6rem;
        height: 1.8rem;
        border-radius: 0 0.76rem 0.76rem 0;
        border: 0.12rem solid #3e6254;
        background-color: #214134c9;
        border-left: none;
        color: #92a59d;
        font-weight: bolder;
      }
    }
  }
  .content {
    width: 100%;
    padding: 0.6rem 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content-item {
      width: 100%;
      display: flex;
      justify-content: space-around;
      .product {
        width: 32%;
        .top {
          text-align: center;
          color: #e3f8f6;
        }
        .bottom {
          text-align: center;
          color: #d6981b;
        }
      }
    }
    .line {
      width: 60%;
      height: 0.06rem;
      margin: 0.6rem 0;
      background: linear-gradient(
        to right,
        rgba(173, 173, 173, 0.1) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(173, 173, 173, 0.1) 100%
      );
    }
  }
}
.active {
  color: #d6981b !important;
  border: 0.12rem solid #af7d19 !important;
}
</style>
