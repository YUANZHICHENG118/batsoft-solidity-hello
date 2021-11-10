<template>
  <div>
    <!--<div class="i-layout-sider-logo" :class="{ 'i-layout-sider-logo-dark': siderTheme === 'dark' }">
      <transition name="fade-quick">
        <nuxt-link :to="$i18n.path('/')" v-show="!hideLogo">
          <img src="@/assets/images/logo.png" v-if="siderTheme === 'light'">
          <img src="@/assets/images/logo-dark.png" v-else>
        </nuxt-link>
      </transition>
    </div>-->
    <!--登录注册-->
<!--    <div class="ivu-bb py-3" v-show="!isLogin">-->
<!--      <div class="mx-5">-->
<!--        <Button type="text" class="ivu-tag-color-white" long>{{ $t('global.login') }}</Button>-->
<!--        <Button type="primary" long class="mt-3">{{ $t('global.register') }}</Button>-->
<!--      </div>-->
<!--    </div>-->
    <Menu
      ref="menu"
      class="i-layout-menu-side i-scrollbar-hide"
      :theme="siderTheme"
      :accordion="menuAccordion"
      :active-name="activePath"
      :open-names="openNames"
      width="auto">
      <template v-for="(item, index) in filterSider">
        <i-menu-side-item v-if="item.children === undefined || !item.children.length" :menu="item" :key="index"/>
        <i-menu-side-submenu v-else :menu="item" :key="index"/>
      </template>
    </Menu>
    <!--下载和语言-->
    <div class="ivu-bt menu-list-box">
<!--      <div class="menu-item">-->
<!--        <Icon custom="iconfont icon-xiazai"/>-->
<!--          <nuxt-link :to="$i18n.path('download')">-->
<!--          {{ $t('global.download') }}-->
<!--          </nuxt-link>-->
<!--      </div>-->
      <div class="menu-item" @click="showLangModal=true">
        <Icon custom="iconfont icon-yuyan"/>
          {{ $t('global.language') }}
      </div>
    </div>
    <!--语言的弹窗-->
    <Modal v-model="showLangModal" fullscreen :title="$t('global.languageAndArea')" footer-hide>
      <div>{{ $t('global.selLanguageAndArea') }}</div>
      <!--list-->
      <div>
        <div @click="handleClick(item.locale)" class="lang-item" :class="{'active':locale === item.locale}" v-for="(item, key) in languages"  :key="key">
          <span>{{item.language}}</span>
          <Icon v-font="20" type="md-checkmark" v-show="locale === item.locale" />
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
    import Languages from '@/i18n/locale'
    import iMenuSideItem from './menu-item'
    import iMenuSideSubmenu from './submenu'
    import iMenuSideCollapse from './menu-collapse'
    import tTitle from '../mixins/translate-title'

    import { mapState, mapActions, mapGetters } from 'vuex'
    // 菜单
    import menuHeader from '@/menu/header'

    // 元素是否在可视区域
    function isElementInViewport (el) {
        let rect = el.getBoundingClientRect()
        return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth))
    }

    export default {
        name: 'iMenuSide',
        mixins: [tTitle],
        components: { iMenuSideItem, iMenuSideSubmenu, iMenuSideCollapse },
        props: {
            hideLogo: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                showLangModal: false,
                languages: Languages
            }
        },
        computed: {
            ...mapState('layout', [
                'siderTheme',
                'menuAccordion'
            ]),
            ...mapState('menu', [
                'activePath',
                'openNames'
            ]),
            ...mapGetters('user', ['isLogin']),
            ...mapState('i18n', ['locale']),
            filterSider () {
                return menuHeader
            }
        },
        watch: {
            '$route': {
                handler () {
                    this.handleUpdateMenuState()
                },
                immediate: true
            }
        },
        methods: {
            ...mapActions('i18n', ['setLocale']),
            handleClick (locale) {
                const routeLang = this.$route.params.lang;
                const newLang = locale.toLowerCase();
                if (locale === this.locale) return;
                if (routeLang !== newLang) {
                    this.$router.replace(this.$route.fullPath.replace(routeLang, newLang));
                }
                this.setLocale({ locale, vm: this });
            },
            handleUpdateMenuState () {
                this.$nextTick(() => {
                    if (this.$refs.menu) {
                        this.$refs.menu.updateActiveName()
                        if (this.menuAccordion) this.$refs.menu.updateOpened()
                        // 聚焦当前项
                        this.$nextTick(() => {
                            const $activeMenu = document.getElementsByClassName('ivu-menu-item ivu-menu-item-active ivu-menu-item-selected')
                            if ($activeMenu && $activeMenu.length && !isElementInViewport($activeMenu[0])) {
                                const activeMenuTop = $activeMenu[0].getBoundingClientRect().top
                                const $menu = this.$refs.menu.$el
                                setTimeout(() => {
                                    this.$ScrollTop($menu, {
                                        to: activeMenuTop,
                                        time: 0
                                    })
                                }, 300)
                            }
                        })
                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
  @import "../../../styles/default/index";
  .menu-list-box {
    .menu-item {
      height: 52px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 14px 24px;
      position: relative;
      cursor: pointer;
      z-index: 1;
      transition: all 0.2s ease-in-out;
      color: rgba(255, 255, 255, 0.7);
      .ivu-icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 21px;
        vertical-align: middle;
        text-align: center;
        margin-right: 8px;
      }
    }

  }

  .ivu-bb, .ivu-bt {
    border-color: #3f5061;
  }
  .lang-item{
    height: 48px;
    display: flex;
    align-items: center;
    font-size: 14px;
    justify-content: space-between;
    &.active{
     color: @primary-color;
    }
  }
</style>
