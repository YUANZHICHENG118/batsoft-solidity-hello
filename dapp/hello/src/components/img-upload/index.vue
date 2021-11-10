<!--
 * @Descripttion:
 * @version:
 * @Author: javalx
 * @Date: 2020-12-23 09:07:30
 * @LastEditors: javalx
 * @LastEditTime: 2021-02-23 18:50:27
-->
<template>
    <div>
        <div class="demo-upload-list" v-if="uploadFile">
            <img v-if="fileType==='img'" :src="imgUrl + uploadFile"/>
            <img v-else src="@/assets/images/logo.png"/>
            <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView"/>
                <Icon type="ios-trash-outline" @click.native="handleRemove"/>
            </div>
        </div>
        <Upload
                v-else
                ref="upload"
                :show-upload-list="false"
                :format="format"
                :max-size="2048"
                :before-upload="handleUpload"
                type="drag"
                action="//jsonplaceholder.typicode.com/posts/"
        >
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>Click to upload</p>
            </div>
        </Upload>
        <Modal title="View" v-model="visible">
            <img
                    :src="imgUrl + uploadFile"
                    v-if="fileType==='img'"
                    style="width: 100%"
            />
            <a v-else :href="uploadFile">{{uploadFile}}</a>
            <div slot="footer"/>
        </Modal>
    </div>
</template>

<script>
    import Setting from '@/setting';
    import { mapState } from 'vuex';

    export default {
        name: 'img-upload',
        props: {
            value: {
                type: String,
                default: undefined
            },
            // static 公共可读 sec 私有
            type: {
                type: String,
                default: 'static'
            },
            upfun: {
                type: Function,
                default: () => {
                    return () => {
                    };
                }
            },
            format: {
                type: Array,
                default: () => ['jpg', 'jpeg', 'png', 'gif']
            }
        },
        data () {
            return {
                img: ['jpg', 'jpeg', 'png'],
                visible: false,
                uploadFile: undefined,
                imgUrl: Setting.apiFileURL,
                fileType: 'img'// img 图片  其它 文件
            };
        },
        computed: {
            ...mapState('common', ['publicParams'])

        },
        watch: {
            value: {
                handler (val) {
                    if (val !== this.uploadFile) {
                        this.uploadFile = val;
                        let type = this.uploadFile.substring(this.uploadFile.lastIndexOf('.') + 1)
                        this.fileType = this.img.includes(type) ? 'img' : 'file'
                        console.log('this.fileType==', this.fileType)
                    }
                },
                immediate: true
            },
            uploadFile (n, o) {
                this.$emit('input', n);
            }
        },
        methods: {
            handleUpload (file) {
                // 自行将文件上传至服务器
                let formData = new FormData();
                formData.append('file', file);
                this.upfun(formData).then((res) => {
                    if (res) {
                        this.uploadFile = res.url;
                    }
                });
                return false;
            },
            handleView () {
                this.visible = true;
            },
            handleRemove () {
                this.uploadFile = undefined;
            }
        }
    };
</script>

<style>
    .demo-upload-list {
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        margin-right: 4px;
    }

    .demo-upload-list img {
        width: 100%;
        height: 100%;
    }

    .demo-upload-list-cover {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.6);
    }

    .demo-upload-list:hover .demo-upload-list-cover {
        display: block;
    }

    .demo-upload-list-cover i {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
