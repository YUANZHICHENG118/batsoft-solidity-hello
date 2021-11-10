<template>
    <nuxt-link class="i-layout-header-logo" :to="$i18n.path('')" style="padding: 0 10px 0 20px">
        <img src="/logo.png">
<!--        <img :src="publicParams.fileHost+publicParams.webSiteLogoSmall" v-if="isMobile">-->
<!--        <img :src="publicParams.fileHost+publicParams.webSiteLogo" v-else-if="headerTheme === 'light'">-->
<!--        <img :src="publicParams.fileHost+publicParams.webSiteLogoDark" v-else>-->
    </nuxt-link>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        name: 'iHeaderLogo',
        data () {
            return {
                small: '',
                dark: '',
                logo: ''
            }
        },
        computed: {
            ...mapState('layout', [
                'isMobile',
                'headerTheme'
            ]),
            ...mapState('common', ['publicParams'])

        }
    }
</script>
<style scoped lang="less">
    .mobileLogo {
        display: none;
    }

    .logo {
        display: inline-block;
    }

    @media screen and (max-width: 768px) {
        .logo {
            display: none;
        }

        .mobileLogo {
            display: inline-block;

        }
    }
</style>
