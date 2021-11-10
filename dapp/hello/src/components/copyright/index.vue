<template>
    <GlobalFooter class="i-copyright" :copyright="copyright"/>
</template>
<script>
    export default {
        name: 'i-copyright',
        props: {
            copyright: {
                type: String,
                default: 'Copyright © 2019 '
            }
        },
        data () {
            return {
                hideRouter: ['exchange']
            }
        }
    }
</script>
<style lang="less" scoped>
    /deep/.ivu-global-footer-copyright{
        font-size: 12px;
        color: #fff !important;
        font-weight: 400;
    }
</style>
