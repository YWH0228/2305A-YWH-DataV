<template>
  <div class="BaseWarning">
    <div class="title">
      <img src="../assets/imgs/weather.png" alt="" />
      <div class="title-name">百香果基地预警</div>
    </div>
    <div class="content">
      <div class="top">
        <div class="item">
          <div class="top-item top-item-num1">
            <span style="color: #ba3939; font-weight: bolder">729</span>
          </div>
          <div class="top-name">本月预警数</div>
        </div>
        <div class="item">
          <div class="top-item top-item-num2">
            <span style="color: #b2e1d1; font-weight: bolder">729</span>
          </div>
          <div class="top-name">本月预警数</div>
        </div>
        <div class="item">
          <div class="top-item top-item-num3">
            <span style="color: #af8a08; font-weight: bolder">729</span>
          </div>
          <div class="top-name">本月预警数</div>
        </div>
      </div>
      <div class="centers"></div>
      <div class="bottom">
        <div class="bottom-left">
          <div class="bottom-left-item"><span>24小时预警</span></div>
        </div>
        <div class="bottom-right">
          <div class="bottom-right-item">
            <div class="items">
              <div class="name">害虫灾害</div>
              <div class="num">29</div>
            </div>
            <div class="items">
              <div class="name">水质灾害</div>
              <div class="num">57</div>
            </div>
            <div class="items">
              <div class="name">土壤灾害</div>
              <div class="num">247</div>
            </div>
            <div class="items">
              <div class="name">天气灾害</div>
              <div class="num">37</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.BaseWarning {
  width: 100%;
  height: 100%;
  .title {
    width: 100%;
    height: 3rem;
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
    padding: 0.6rem 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .top {
      width: 100%;
      display: flex;

      .item {
        width: 33%;
        height: 11.4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .top-item {
          width: 100%;
          height: 80%;
          background-size: 100% 100%;
          display: flex;
          justify-content: center;
          padding: 2rem 0 0 0;
          font-size: 1.3rem;
        }
        .top-item-num1 {
          background-image: url("../assets/imgs/组3299@3x.png");
        }
        .top-item-num2 {
          background-image: url("../assets/imgs/组3300@3x.png");
        }
        .top-item-num3 {
          background-image: url("../assets/imgs/组3301@3x.png");
        }
        .top-name {
          color: #fff;
        }
      }
    }
    .centers {
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
    .bottom {
      width: 100%;
      height: 6.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bottom-left {
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .bottom-left-item {
          width: 7.6rem;
          height: 3rem;
          background-image: url("../assets/imgs/Rectangle605@3x.png");
          background-size: 100% 100%;
          text-align: center;
          line-height: 3rem;
          color: #ba3939;
          font-weight: bolder;
        }
      }
      .bottom-right {
        width: 60%;
        height: 100%;
        .bottom-right-item {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          .items {
            display: flex;
            .name {
              margin-right: 0.6rem;
              font-size: 0.96rem;
              color: #fff;
            }
            .num {
              color: #913f3b;
            }
          }
        }
      }
    }
  }
}
</style>
