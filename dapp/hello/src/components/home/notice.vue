<!--notice-->
<template>
    <div class="container">
        <div class="notice_list ivu-pt ivu-pb ivu-mb d-flex align-items-center justify-content-center mt-3">
            <!--<span class="iconfont icon-notice ivu-mr-8"></span>-->
            <!--<span>-->
            <!--<nuxt-link :to="$i18n.path('')">-->
            <!--<Ellipsis :length="18" :text="text" :lines="1" />-->
            <!--</nuxt-link>-->
            <!--</span>-->
            <div class="d-flex align-items-center">
                <div v-for="(item) in notices" :key="item.id" style="margin-left:5px">
                    <div class="item">
                        <nuxt-link :to="$i18n.path(`cms/article/detail?id=`+item.id)">
                            <span>{{ $Date(item.createTime).format("DD/MM") }}</span>
                            <span class="ml-2">{{item.title }}</span>

                        <Divider type='vertical' class="mx-4"></Divider>
                        </nuxt-link>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import util from '@/libs/util';
    import { getArticles } from '@/api/article'

    export default {
        data () {
            return {
                text: '',
                notices: []
            }
        },
        methods: {
            findNotices () {
                const db = util.cookies;
                let code = db.get('i18n-locale');
                let data = { key: this.$i18n.t('global.notice'), code: code }
                getArticles(data).then(d => { this.notices = d })
            }
        },
        mounted () {
            this.findNotices()
        }
    }
</script>
<style lang="less" scoped>
.notice_list {
    height: 60px;
    background: #FFFFFF;
    border-radius: 12px;
    position: relative;

    a {
        color: #1c242c;
    }

    .operate {
        position: absolute;
        right: 15px;

    }

    .item {
        span {
            &:last-child {
                font-size: 14px;
                font-family: SourceHanSansCN;
                font-weight: 400;
                color: #212121;
            }
        }
    }
}

</style>
