<template>
  <div class="role-view">
    <div class="role-item">
      <div class="num bg1"><span>51</span></div>
      <div class="name">土壤监测专家</div>
    </div>
    <div class="role-item">
      <div class="num bg2"><span>66</span></div>
      <div class="name">植被专家</div>
    </div>
    <div class="role-item">
      <div class="num bg3"><span>96</span></div>
      <div class="name">虫害监测专家</div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.role-view {
  width: 100%;
  height: 100%;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  .role-item {
    width: 100px;
    height: 100%;
    .num {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: right;
      padding: 5px 20px 0 0;
      color: #6d8b7f;
      font-weight: bolder;
      background-size: 100% 100%;
    }
    .bg1 {
      background-image: url("../assets/imgs/组3038@2x.png");
    }
    .bg2 {
      background-image: url("../assets/imgs/组3038@3x(1).png");
    }
    .bg3 {
      background-image: url("../assets/imgs/组3038@3x(2).png");
    }
    .name {
      width: 100%;
      text-align: center;
      color: #dcf6f1;
      font-size: 14px;
      margin-top: 5px;
    }
  }
}
</style>
