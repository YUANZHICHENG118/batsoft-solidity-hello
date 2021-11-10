<!--下载-->
<template>
    <div class="wrap_in">
        <div class="container">
            <div>
                <h1 class="">{{ $t("page.index.download.title") }}</h1>
                <div class="row">
                    <div class="ivu-mt d-flex col-12 col-lg-6">
                        <Card class="flex-grow-1" :padding="0" style="padding:50px">
                            <div class="d-flex justify-content-between">
                            <div>
                            <h2 class="ivu-mb">
                                {{ $t("page.index.download.itemOne") }}
                            </h2>
                            <p>{{ $t("page.index.download.itemOneDesc") }}</p>
                            <div class="row">

                                <div class="col-lg-6 col-9 col-sm-4">
                                    <Poptip trigger="hover" >
                                        <p slot="content" id="ios">
                                        </p>
                                    <Button
                                        class="ivu-mt"
                                        size="large"
                                        long
                                        type="primary"
                                        ghost
                                        ><Icon type="logo-apple" />
                                       IOS</Button
                                    >
                                    </Poptip>
                                </div>
                                <div class="col-lg-6 col-9 col-sm-4">
                                    <Poptip trigger="hover" content="">
                                        <p slot="content" id="android">
                                        </p>
                                        <Button
                                            class="ivu-mt"
                                            size="large"
                                            long
                                            type="primary"
                                            ghost
                                        ><Icon type="logo-android" />
                                            Android
                                        </Button
                                        >
                                    </Poptip>
                                </div>
                            </div>
                            </div>
                                <img class="ml-5" src="~/assets/images/download/mobile.png" alt="" />
                            </div>
                        </Card>
                    </div>
                    <div class="ivu-mt-16 d-flex col-12 col-lg-6">
                        <Card class="flex-grow-1" :padding="0" style="padding:50px" >
                            <div class="d-flex justify-content-between">
                            <div class="">
                                <!--电脑-->
                                <h2 class="ivu-mb">
                                    {{ $t("page.index.download.itemTwo") }}
                                </h2>
                                <p>
                                    {{ $t("page.index.download.itemTwoDesc") }}
                                </p>
                            </div>
                            <img class="ml-5" src="~/assets/images/download/pc.png" alt="" />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { appVersion } from '@/api/common'
    export default {
        mounted () {
            appVersion({ appType: 'android' }).then(d => {
                let android = new window.QRCode('android', {
                    width: 110,
                    height: 100, // 高度
                    colorLight: '#ffffff',
                    text: `${d.downUrl}`// 二维码内容
                });
                console.log('qr===', android)
            })

            appVersion({ appType: 'ios' }).then(d => {
                let ios = new window.QRCode('ios', {
                    width: 110,
                    height: 100, // 高度
                    colorLight: '#ffffff',
                    text: `${d.downUrl}`// 二维码内容
                });
                console.log('qr===', ios)
            })
        }
    };
</script>
<style lang="less" scoped>
.wrap_in {
    padding-top: 70px;
    h1 {
        margin-bottom: 30px;
        text-align: center;
    }
}
</style>
