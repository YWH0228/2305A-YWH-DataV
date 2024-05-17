<template>
  <div class="massif-view">
    <div class="title">
      <div class="left">
        <img src="../assets/imgs/weather.png" alt="" />
        <div class="title-name">地块动态</div>
      </div>
      <div class="right">
        <button>全部</button>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <div class="item-name">
          <img src="../assets/imgs/组239@3x.png" alt="" />
          <div class="name">科研地块： 科研一号</div>
        </div>
        <div class="bts">
          <button>全部</button>
          <button>肥力</button>
          <button>状态</button>
        </div>
      </div>
      <div class="item">
        <div class="item-name">
          <img src="../assets/imgs/组3030@2x(2).png" alt="" />
          <div class="name" style="color: #708f84">科研地块： 科研一号</div>
        </div>
        <div class="bts">
          <button>全部</button>
          <button>肥力</button>
          <button>状态</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.massif-view {
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
      button {
        width: 3.6rem;
        height: 1.8rem;
        border-radius: 0.76rem;
        border: 0.12rem solid #3e6254;
        background-color: #214134c9;
        color: #92a59d;
        font-weight: bolder;
      }
    }
  }
  .content {
    padding: 0.9rem 1.2rem;
    width: 100%;
    .item {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: space-between;
      margin: 0.6rem 0;
      .item-name {
        display: flex;
        align-items: center;
        .name {
          margin-left: 0.6rem;
          color: #ab8402;
        }
        img {
          width: 2rem;
          height: 2rem;
        }
      }
      button {
        width: 3.6rem;
        height: 1.8rem;
        border-radius: 0.8rem;
        border: 0.12rem solid #3e62545e;
        background-color: #214134c9;
        color: #92a59d;
        font-weight: bolder;
        margin: 0 0.3rem;
      }
    }
  }
}
</style>
