<template>
    <div class="i-layout-menu-head point">
        <Menu mode="horizontal" :active-name="activeName" v-if="!isMenuLimit" ref="menu">
            <template v-for="(item, index) in filterHeader">
                <Submenu v-if="item.children && item.children.length" :name="item.name" :key="index">
                    <template slot="title">
                        <i-menu-head-title :item="item" />
                    </template>
                    <MenuItem v-for="subitem in item.children" :to="subitem.path" :replace="subitem.replace" :target="subitem.target" :name="item.name" :key="subitem.title" @click.native="handleClick(subitem.path, 'header')">
                        <i-menu-head-title :item="subitem" />
                    </MenuItem>
                </Submenu>
                <MenuItem v-else :key="item.title" :name="item.path">
                    <a style="color: inherit" :href="$i18n.path(item.path)" :key="item.title" :replace="item.replace" :target="item.target" :name="item.path">
                        <i-menu-head-title :item="item" :key="item.title" />
                    </a>
                </MenuItem>
            </template>
        </Menu>
        <div class="i-layout-header-trigger i-layout-header-trigger-min i-layout-header-trigger-in i-layout-header-trigger-no-height" v-else>
            <Dropdown trigger="click" :class="{ 'i-layout-menu-head-mobile-drop': isMobile }">
                <Icon type="ios-apps" />
                <DropdownMenu slot="list">
                    <template v-for="(item, index) in filterHeader">
                        <template v-if="item.children && item.children.length">
                            <DropdownItem class="i-layout-menu-head-mobile-subtitle" disabled :key="index">
                                <i-menu-head-title :item="item" />
                            </DropdownItem>
                            <nuxt-link v-for="subitem in item.children" :to="$i18n.path(subitem.path)" :replace="subitem.replace" :target="subitem.target" :key="subitem.title" @click.native="handleClick(subitem.path, 'header')">
                                <DropdownItem>
                                    <i-menu-head-title :item="subitem" />
                                </DropdownItem>
                            </nuxt-link>
                        </template>
                        <nuxt-link v-else :to="$i18n.path(item.path)" :replace="item.replace" :target="item.target" :key="item.title" @click.native="handleClick(item.path, 'header')">
                            <DropdownItem>
                                <i-menu-head-title :item="item" />
                            </DropdownItem>
                        </nuxt-link>
                    </template>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>
<script>
    import iMenuHeadTitle from './title';
    import { mapState } from 'vuex';
    import { getStyle } from 'view-design/src/utils/assist';
    import clickItem from '../mixins/click-item';
    // import { on, off } from 'view-design/src/utils/dom';
    // import { throttle } from 'lodash';
    // 菜单
    import menuHeader from '@/menu/header';
    export default {
        name: 'iMenuHead',
        components: { iMenuHeadTitle },
        mixins: [ clickItem ],
        computed: {
            ...mapState('layout', [
                'isMobile'
            ]),
            filterHeader () {
                return menuHeader
            },
            activeName () {
                const { lang } = this.$route.params;
                return this.$route.path.replace(`/${lang}/`, '')
            }
        },
        data () {
            return {
                handleResize: () => {},
                isMenuLimit: false,
                menuMaxWidth: 0 // 达到这个值后，menu 就显示不下了
            }
        },
        methods: {
            handleGetMenuHeight () {
                const menuWidth = parseInt(getStyle(this.$el, 'width'));
                const $menu = this.$refs.menu;
                if ($menu) {
                    const menuHeight = parseInt(getStyle(this.$refs.menu.$el, 'height'));
                    if (menuHeight > 64) {
                        if (!this.isMenuLimit) {
                            this.menuMaxWidth = menuWidth;
                        }
                        this.isMenuLimit = true;
                    }
                } else if (menuWidth >= this.menuMaxWidth) {
                    this.isMenuLimit = false;
                }
            }
        },
        watch: {
            filterHeader () {
                this.handleGetMenuHeight();
            },
            isMobile () {
                this.handleGetMenuHeight();
            }
        },
        mounted () {
            // this.handleResize = throttle(this.handleGetMenuHeight, 100, { leading: false });
            // on(window, 'resize', this.handleResize);
            this.handleGetMenuHeight();
        }

    }
</script>
<style lang="less" scoped>
.point{
    text-align: right;
    margin-right: 5%;
}
</style>
