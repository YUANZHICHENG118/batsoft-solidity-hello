<template>
    <div class="box">
      <div class="content">
        <div class="item" :class="{'active':selected===item.value}" @click="changeActive(item)" v-for="(item) in data" :key="item.value">{{item.label}}</div>
      </div>
    </div>
</template>
<script>
    export default {
        props: {
            data: {
                type: Array,
                default: () => []
            },
            selected: {
                type: String,
                default: ''
            }

        },
        methods: {
            changeActive (item) {
                this.active = item.value
                this.$emit('changeSelect', item.value)
            }
        }
    }
</script>
<style lang="less" scoped>
  @import "../../styles/default/index";
  .box{
    box-sizing: border-box;
    /*position: fixed;*/
    inset: 0px;
    z-index: 9999;
    flex-direction: column-reverse;
    display: flex;
    padding:30px 0 0;
    .content{
      box-sizing: border-box;
      margin: 0px;
      min-width: 0px;
      overflow: auto;
      width: 100%;
      transition: all 0.5s ease 0s;
      height: 240px;
      background-color:#fff;
      .item{
        box-sizing: border-box;
        margin: 0px;
        min-width: 0px;
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-bottom: 1px solid rgb(234, 236, 239);
        &:last-child{
          border-bottom: none;
        }
        &.active{
           color: @primary-color;
        }
      }
    }
  }
</style>
