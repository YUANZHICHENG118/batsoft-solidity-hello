<template>
  <div class="wrap">
    <div class="container" :style="innerStyle">
      <div class="d-flex justify-content-between ">
        <a @click="$router.back()" >
          <Icon type="ios-arrow-back" v-font="20" />
          <span class="ivu-tag-color-white">{{ name }}</span>
        </a>
        <div>
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        props: ['name', 'innerStyle']
    };
</script>
<style lang="less" scoped>
.wrap {
  height: 80px;
  box-sizing: content-box;
  background-color: #1b2945;
  width: 100%;
  display: flex;
  align-items: flex-end;
  .container {
    color: #fff;
    height: 56px;
    font-size: 16px;
    line-height: 56px;
  }
}
</style>
