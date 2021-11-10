<template>
  <div class="header">
    <div class="container ivu-text-center">
      <h2 class="ivu-tag-color-white ivu-mb">请输入您的问题</h2>
      <i-input placeholder="在这儿搜索" size="large" search style="width: 400px; max-width:90%;"></i-input>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .header {
    background-color: #14151A;
    padding: 20px 0;
    /deep/ .ivu-input {
      background-color: #2B2F36;
      color: #E6E8EA;
      border-color: #2B2F36;
    }
  }
</style>
