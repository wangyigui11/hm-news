<template>
  <div class="hm-button" @click="clickFn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    clickFn() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="less" scoped>
.hm-button {
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  background: #cc3300;
  margin: 20px;
  border-radius: 25px;
  color: white;
}
</style>
