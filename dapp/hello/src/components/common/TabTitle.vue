<template>
  <div class="ivu-tabs-bar">
    <div class="ivu-tabs-nav-container">
      <div class="ivu-tabs-nav-wrap">
        <div class="ivu-tabs-nav-scroll" ref="wrapper">
          <div class="ivu-tabs-nav" ref="cont" >
            <div
              class="ivu-tabs-tab  ivu-tabs-tab-focused"
              :class="{'ivu-tabs-tab-active':active===item.label}"
              v-for="item in tabs"
              :key="item.label"
              @click="handleChange(item.label)"
            >
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        props: {
            tabs: {
                type: Array,
                default: () => []
            },
            value: {
                type: String,
                default: ''
            }
        },
        methods: {
            handleChange (data) {
                this.active = data; // 通过赋值操作来触发属性 on 的 set 方法
                this.$emit('change', this.active); // 发送 change 事件,作为一个事件钩子,方便用户处理自己的逻辑
            },
            verScroll () {
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new BScroll(this.$refs.wrapper, {
                            startX: 0,
                            click: true,
                            scrollX: true,
                            scrollY: false,
                            eventPassthrough: 'vertical'
                        })
                    } else {
                        this.scroll.refresh() // 如果dom结构发生改变调用该方法
                    }
                })
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.verScroll()
            })
        },
        computed: {
            active: {
                get () {
                    return this.value;
                },
                set (val) { // set时发送 input 事件
                    this.$emit('input', val);
                }
            }
        }
    }
</script>
<style lang="less" scoped>
  .ivu-tabs-tab{
    margin-right:0;
    &:after{
      content:'';
      height: 2px;
      box-sizing: border-box;
      background-color: #2d8cf0;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 1px;
      z-index: 1;
      width: 0;
      /*transition: width 0.3s ease-in-out;*/
    }
    &:hover{
      &:after{
        content:'';
        width: 100%;
      }
    }
    &.ivu-tabs-tab-active{
      &:after{
        content:'';
        width: 100%;
      }
    }
  }

</style>
