<template>
  <div class="outline-view">
    <div class="title">
      <img src="../assets/imgs/weather.png" alt="" />
      <div class="title-name">百香果基地概要</div>
    </div>
    <div class="content">
      <div class="roleNum">
        <div class="roleNum-item">
          <img src="../assets/imgs/组3030@3x.png" alt="" />
          <div class="roleNum-item-num">
            <div class="top">基地设备</div>
            <div class="bottom">729件</div>
          </div>
        </div>
        <div class="roleNum-item">
          <img src="../assets/imgs/组3030@2x(1).png" alt="" />
          <div class="roleNum-item-num">
            <div class="top">种植人数</div>
            <div class="bottom1">52人</div>
          </div>
        </div>
        <div class="roleNum-item">
          <img src="../assets/imgs/组3030@2x(2).png" alt="" />
          <div class="roleNum-item-num">
            <div class="top">地块数量</div>
            <div class="bottom1">36个</div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="imgNum">
        <div class="left">
          <div class="text">
            <div class="title-num">基地设备</div>
            <div class="num">729</div>
          </div>
        </div>
        <div class="right">
          <div class="right-item">
            <div class="right-title">灾害检测仪</div>
            <div class="right-num">7</div>
          </div>
          <div class="right-item">
            <div class="right-title">肥力检测仪</div>
            <div class="right-num">7</div>
          </div>
          <div class="right-item">
            <div class="right-title">灾害检测仪</div>
            <div class="right-num">7</div>
          </div>
          <div class="right-item">
            <div class="right-title">灾害检测仪</div>
            <div class="right-num">7</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.outline-view {
  width: 100%;
  height: 100%;
  .title {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-bottom: 0.06rem solid #3f5d53;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.3rem 0;
    .roleNum {
      width: 100%;
      padding: 0.6rem 1.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .roleNum-item {
        display: flex;
        img {
          width: 3rem;
          height: 3rem;
          margin: 0 0.6rem;
        }
        .roleNum-item-num {
          .top {
            color: #fff;
            font-weight: bolder;
            text-align: center;
            margin-bottom: 0.12rem;
          }
          .bottom {
            color: #edb32b;
            font-weight: bolder;
            text-align: center;
          }
          .bottom1 {
            color: #c8eaeb;
            font-weight: bolder;
            text-align: center;
          }
        }
      }
    }
    .line {
      width: 60%;
      height: 0.06rem;
      margin-top: 0.6rem;
      background: linear-gradient(
        to right,
        rgba(173, 173, 173, 0.1) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(173, 173, 173, 0.1) 100%
      );
    }
    .imgNum {
      width: 100%;
      height: 9rem;
      padding: 0.6rem 1.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.6rem;
      .left {
        width: 40%;
        height: 100%;
        background-image: url("../assets/imgs/Group625.png");
        background-size: 150% 200%;
        background-position: 2.6rem 3rem;
        display: flex;
        justify-content: center;
        .title-num {
          color: #fff;
        }
        .num {
          text-align: center;
          color: #ffd710;
          font-weight: bolder;
          margin-top: 0.3rem;
        }
      }
      .right {
        width: 60%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        .right-item {
          width: 50%;
          height: 50%;
          text-align: center;
          .right-title {
            color: #fff;
          }
          .right-num {
            color: #c8eaeb;
          }
        }
      }
    }
  }
}
</style>
