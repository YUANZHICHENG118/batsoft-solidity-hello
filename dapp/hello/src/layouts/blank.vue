<!--/空模板-->
<template>
    <div class="box">
        <div class="header" :class="headerClasses">
            <iHeaderLogo/>
            <i-header-i18n v-if="showI18n"/>
        </div>
        <nuxt/>
        <i-copyright :copyright="global.webSiteCopyright"/>
    </div>
</template>
<script>
    import iCopyright from '@/components/copyright'
    import iHeaderLogo from './basic-layout/header-logo/index';
    import mixins from './blank/mixins'
    import { mapState } from 'vuex'

    export default {
        mixins: [mixins],
        components: {
            iCopyright,
            iHeaderLogo
        },
        data () {
            return {
                global: {
                    webSiteCopyright: ''
                }
            }
        },
        computed: {
            ...mapState('layout', [
                'headerTheme'
            ]),
            headerClasses () {
                return [
                    `i-layout-header-color-${this.headerTheme}`
                ];
            }
        }
    }
</script>
<style lang="less" scoped>
    .header {
        background-color: #0b0e11;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 64px;
    }

    .box {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 768px) {
        .box {
            background-color: #fff;
        }
    }
</style>
