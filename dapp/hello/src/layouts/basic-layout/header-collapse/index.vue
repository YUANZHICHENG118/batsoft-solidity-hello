<template>
  <span
    class="i-layout-header-trigger mobile-collapse-button"
    :class="{ 'i-layout-header-trigger-min': showReload }"
    @click="handleToggleMenuSide"
  >
    <Icon custom="iconfont icon-menu-unfold" />
  </span>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        name: 'iHeaderCollapse',
        computed: {
            ...mapState('layout', ['showReload'])
        },
        methods: {
            // 展开/收起侧边栏
            handleToggleMenuSide (state) {
                this.$emit('on-toggle-drawer', state);
            }
        },
        watch: {
            // 切换页面时，在移动端自动收起侧边栏
            // 强行传参 false 是因为有的路由不是在菜单栏发生的，toggle 会使其显示
            $route () {
                this.handleToggleMenuSide(false);
            }
        }
    };
</script>
<style scoped lang="less">
.mobile-collapse-button {
  display: none;
}

@media screen and (max-width: 768px) {
  .mobile-collapse-button {
    display: inline-block;
  }
}
</style>
