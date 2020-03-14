<template>
  <div class="HmHeader">
    <div class="left iconfont iconjiantou2" @click="$router.go(-1)"></div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.HmHeader {
  display: flex;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  border-bottom: 1px solid #ccc;
  .right,
  .left {
    width: 30px;
  }
  .center {
    text-align: center;
    flex: 1;
    font-weight: 700;
    font-size: 14px;
  }
}
</style>
