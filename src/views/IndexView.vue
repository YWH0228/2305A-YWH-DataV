<template>
  <dv-full-screen-container class="index">
    <!-- <dv-loading v-if="loadFlag">Loading...</dv-loading> -->
    <dv-border-box-6>
      <div class="title">
        <dv-decoration-8 style="width: 28rem; height: 3.5rem" />
        <div class="title-name">
          <div class="name">百香果数字运营中心</div>
          <dv-decoration-5 style="width: 20rem; height: 2.5rem" />
        </div>
        <dv-decoration-8 :reverse="true" style="width: 28rem; height: 3.5rem" />
      </div>
      <div class="content">
        <div class="item"><outline></outline></div>
        <div class="item">
          <!-- 地块分类 -->
          <div class="ite ite1" @mouseenter="a = 1" @mouseleave="a = 0">
            <img src="../assets/imgs/组230@2x.png" alt="" v-if="a == 0" />
            <img src="../assets/imgs/组230@2x(1).png" alt="" v-else />
            <div class="item-contents">
              <div :class="a == 0 ? 'cons' : 'active'">科研地块1</div>
              <div :class="a == 0 ? 'cons' : 'active'">[利安2号]</div>
            </div>
          </div>
          <div class="ite ite2" @mouseenter="b = 1" @mouseleave="b = 0">
            <img src="../assets/imgs/组230@2x.png" alt="" v-if="b == 0" />
            <img src="../assets/imgs/组230@2x(1).png" alt="" v-else />
            <div class="item-contents">
              <div :class="b == 0 ? 'cons' : 'active'">科研地块2</div>
              <div :class="b == 0 ? 'cons' : 'active'">[利安3号]</div>
            </div>
          </div>
          <div class="ite ite3" @mouseenter="c = 1" @mouseleave="c = 0">
            <img src="../assets/imgs/组230@2x.png" alt="" v-if="c == 0" />
            <img src="../assets/imgs/组230@2x(1).png" alt="" v-else />
            <div class="item-contents">
              <div :class="c == 0 ? 'cons' : 'active'">科研地块3</div>
              <div :class="c == 0 ? 'cons' : 'active'">[利安1号]</div>
            </div>
          </div>
          <div class="ite ite4" @mouseenter="d = 1" @mouseleave="d = 0">
            <img src="../assets/imgs/组230@2x.png" alt="" v-if="d == 0" />
            <img src="../assets/imgs/组230@2x(1).png" alt="" v-else />
            <div class="item-contents">
              <div :class="d == 0 ? 'cons' : 'active'">科研地块4</div>
              <div :class="d == 0 ? 'cons' : 'active'">[利安6号]</div>
            </div>
          </div>

          <!-- 地块详情弹出栏 -->
          <div class="detail detail1" v-if="a == 1">
            <div class="titles">
              <img src="../assets/imgs/组3030.png" alt="" />
              <div class="titles-content">科研地块1[利安2号]</div>
            </div>
            <div class="bottom">
              <div class="images">
                <img src="../assets/imgs/蒙版组3@2x.png" alt="" />
                <img src="../assets/imgs/蒙版组6@2x.png" alt="" />
              </div>
              <div class="bottom-text"><span>扫码查看科技地块详情</span></div>
            </div>
          </div>
          <div class="detail detail2" v-if="b == 1">
            <div class="titles">
              <img src="../assets/imgs/组3030.png" alt="" />
              <div class="titles-content">科研地块2[利安3号]</div>
            </div>
            <div class="bottom">
              <div class="images">
                <img src="../assets/imgs/蒙版组3@2x.png" alt="" />
                <img src="../assets/imgs/蒙版组6@2x.png" alt="" />
              </div>
              <div class="bottom-text"><span>扫码查看科技地块详情</span></div>
            </div>
          </div>
          <div class="detail detail3" v-if="c == 1">
            <div class="titles">
              <img src="../assets/imgs/组3030.png" alt="" />
              <div class="titles-content">科研地块3[利安1号]</div>
            </div>
            <div class="bottom">
              <div class="images">
                <img src="../assets/imgs/蒙版组3@2x.png" alt="" />
                <img src="../assets/imgs/蒙版组6@2x.png" alt="" />
              </div>
              <div class="bottom-text"><span>扫码查看科技地块详情</span></div>
            </div>
          </div>
          <div class="detail detail4" v-if="d == 1">
            <div class="titles">
              <img src="../assets/imgs/组3030.png" alt="" />
              <div class="titles-content">科研地块4[利安6号]</div>
            </div>
            <div class="bottom">
              <div class="images">
                <img src="../assets/imgs/蒙版组3@2x.png" alt="" />
                <img src="../assets/imgs/蒙版组6@2x.png" alt="" />
              </div>
              <div class="bottom-text"><span>扫码查看科技地块详情</span></div>
            </div>
          </div>
        </div>
        <div class="item"><role></role></div>
        <div class="item"><weather></weather></div>
        <div class="item"><BaseWarning></BaseWarning></div>
        <div class="item"><massif></massif></div>
        <div class="item"><soil></soil></div>
        <div class="item"><fertility></fertility></div>
        <div class="item"><insect></insect></div>
        <div class="item"><harvest></harvest></div>
      </div>
    </dv-border-box-6>
  </dv-full-screen-container>
</template>

<script>
import weather from "../components/WeatherView.vue"
import fertility from "../components/FertilityView.vue"
import insect from "../components/InsectView.vue"
import soil from "../components/SoilView.vue"
import outline from "../components/OutlineView.vue"
import BaseWarning from "../components/BaseWarning.vue"
import massif from "../components/MassifView.vue"
import role from "../components/RoleView.vue"
import harvest from "../components/HarvestView.vue"
export default {
  data() {
    return {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      loadFlag: true
    }
  },
  methods: {
    // top1() {
    //   if (this.a == 0) {
    //     this.a == 1;
    //   } else {
    //     this.a == 0;
    //   }
    // },
    // top2() {
    //   if (this.b == 0) {
    //     this.b == 1;
    //   } else {
    //     this.b == 0;
    //   }
    // },
    // top3() {
    //   if (this.c == 0) {
    //     this.c == 1;
    //   } else {
    //     this.c == 0;
    //   }
    // },
    // top4() {
    //   if (this.d == 0) {
    //     this.d == 1;
    //   } else {
    //     this.d == 0;
    //   }
    // },
  },
  components: {
    weather,
    fertility,
    insect,
    soil,
    outline,
    BaseWarning,
    massif,
    role,
    harvest
  },
  created() {
    setTimeout(() => {
      this.loadFlag = false
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  height: 100%;
  background-image: url("../assets/imgs/bg.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    .title-name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 0.4rem;
      .name {
        font-size: 1.64rem;
        color: #fff;
        font-weight: bolder;
      }
    }
  }
  .content {
    width: 100%;
    height: calc(100vh - 3rem);
    box-sizing: border-box;
    padding: 0 0.8rem 0.8rem 0.8rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(9, 1fr);
    grid-gap: 0.6rem;
    grid-template:
      "a b b c" 1fr
      "a b b e" 1fr
      "a b b e" 1fr
      "d b b e" 1fr
      "d b b e" 1fr
      "d b b g" 1fr
      "d b b g" 1fr
      "f h i j" 1fr
      "f h i j" 1fr
      / 1fr 1fr 1fr 1fr;
    .item:nth-of-type(1) {
      grid-area: a;
      background-color: #0a2218a8;
      border: 0.16rem solid #537368;
      border-radius: 0.4rem;
    }
    .item:nth-of-type(2) {
      grid-area: b;
      background-color: rgba(0, 255, 255, 0);
      position: relative;
      //地块位置样式
      .ite {
        width: 5rem;
        height: 7rem;
        img {
          width: 100%;
          height: 3.6rem;
        }
        .item-contents {
          width: 100%;
          .cons {
            color: #9ddcc6;
            text-align: center;
          }
        }
      }

      // 地块位置定位
      .ite1 {
        position: absolute;
        left: 15.5rem;
        top: 5rem;
      }
      .ite2 {
        position: absolute;
        left: 23.5rem;
        top: 10rem;
      }
      .ite3 {
        position: absolute;
        left: 27rem;
        bottom: 6rem;
      }
      .ite4 {
        position: absolute;
        right: 16rem;
        bottom: 8.5rem;
      }

      //地块详情栏样式
      .detail {
        width: 16rem;
        height: 12.5rem;
        border: 0.16rem solid #537368;
        border-radius: 0.6rem;
        background-color: #0e1d18ce;
        .titles {
          width: 100%;
          height: 3rem;
          padding: 0.3rem 0.6rem;
          border-bottom: 0.16rem solid #3f5d53;
          display: flex;
          align-items: center;
          img {
            width: 2rem;
            height: 2rem;
            margin-right: 0.4rem;
          }
          .titles-content {
            color: #ca9b00;
            font-weight: bolder;
            font-style: oblique;
          }
        }
        .bottom {
          width: 100%;
          height: calc(12.5rem - 3rem);
          padding: 0.6rem 0.9rem;
          .images {
            height: 75%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
              width: 45%;
              height: 100%;
            }
          }
          .bottom-text {
            width: 100%;
            height: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
          }
        }
      }
      //地块详情栏定位

      .detail1 {
        position: absolute;
        left: 3rem;
        top: 12rem;
      }
      .detail2 {
        position: absolute;
        left: 30rem;
        top: 9rem;
      }
      .detail3 {
        position: absolute;
        bottom: 4rem;
        left: 10rem;
      }
      .detail4 {
        position: absolute;
        bottom: 0.8rem;
        right: 0rem;
      }
    }
    .item:nth-of-type(3) {
      background-color: #0a2218a8;
      border: 0.16rem solid #537368;
      border-radius: 0.6rem;
    }
    .item:nth-of-type(4) {
      grid-area: d;
      background-color: #0a2218a8;
      border: 0.16rem solid #537368;
      border-radius: 0.6rem;
    }
    .item:nth-of-type(5) {
      grid-area: e;
      background-color: #0a2218a8;
      border: 0.16rem solid #537368;
      border-radius: 0.6rem;
    }
    .item:nth-of-type(6) {
      grid-area: f;
      background-color: #0a2218a8;
      border: 0.16rem solid #537368;
      border-radius: 0.6rem;
    }
    /*害虫灾害预警*/
    .item:nth-of-type(7) {
      grid-area: g;
      background-color: #0a2218a8;
      border: 0.16rem solid #537368;
      border-radius: 0.6rem;
    }
    .item:nth-of-type(8) {
      grid-area: h;
      background-color: #0a2218a8;
      border: 0.16rem solid #537368;
      border-radius: 0.6rem;
    }
    .item:nth-of-type(9) {
      grid-area: j;
      background-color: #0a2218a8;
      border: 0.16rem solid #537368;
      border-radius: 0.6rem;
    }
    .item:nth-of-type(10) {
      grid-area: i;
      background-color: #0a2218a8;
      border: 0.16rem solid #537368;
      border-radius: 0.6rem;
    }
  }
}
.active {
  color: #d8b15c;
  width: 100%;
  text-align: center;
}
</style>
