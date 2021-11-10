<template>
    <!-- =========={ FOOTER }==========  -->
    <footer class="bg-secondary">
        <!-- footer content -->
        <div id="footer-content" class="footer-dark pt-6 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-lg-4 pe-lg-5 me-auto">
                        <!-- Footer Content -->
                        <div class="d-flex align-item-center mb-2">
                            <!--                            <span class="h2 text-primary fw-bold mt-2">BatSoft</span>-->
                            <img src="/logo.png" alt="LOGO" height="80px">
                        </div>
                        <div class="widget-content pe-lg-5">
                            <!-- Footer Title -->
                            <p></p>
                            <address>
                                <!-- <i class="fa fa-map-marker-alt me-2"></i> -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem"
                                     viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                          d="M256,48c-79.5,0-144,61.39-144,137,0,87,96,224.87,131.25,272.49a15.77,15.77,0,0,0,25.5,0C304,409.89,400,272.07,400,185,400,109.39,335.5,48,256,48Z"
                                          style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
                                    <circle fill="currentColor" cx="256" cy="192" r="48"
                                            style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
                                </svg>
                                北京市朝阳区北苑东路中国铁建广场F1003
                            </address>
                            <p class="footer-info">
                                <!-- <i class="fa fa-phone me-2"></i> -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="rtl-270" width="1.2rem" height="1.2rem"
                                     viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                          d="M451,374c-15.88-16-54.34-39.35-73-48.76C353.7,313,351.7,312,332.6,326.19c-12.74,9.47-21.21,17.93-36.12,14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48,5.41-23.23,14.79-36c13.22-18,12.22-21,.92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9,44,119.9,47,108.83,51.6A160.15,160.15,0,0,0,83,65.37C67,76,58.12,84.83,51.91,98.1s-9,44.38,23.07,102.64,54.57,88.05,101.14,134.49S258.5,406.64,310.85,436c64.76,36.27,89.6,29.2,102.91,23s22.18-15,32.83-31a159.09,159.09,0,0,0,13.8-25.8C465,391.17,468,391.17,451,374Z"
                                          style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"/>
                                </svg>
                                +(86) 13466761447
                            </p>
                            <p class="footer-info">
                                <!-- <i class="fa fa-envelope me-2"></i> -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem"
                                     viewBox="0 0 512 512">
                                    <rect fill="currentColor" x="48" y="96" width="416" height="320" rx="40" ry="40"
                                          style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
                                    <polyline fill="currentColor" points="112 160 256 272 400 160"
                                              style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
                                </svg>
                                support@batsoft.io
                            </p>
                        </div><!-- end footer content -->
                    </div>

                    <div class="col-12 col-sm-6 col-lg-2">
                        <!-- Footer Content -->
                        <div class="widget-content">
                            <!-- Footer Title -->
                            <h4 class="h5 mb-4">热门产品</h4>
                            <ul class="list-unstyled footer-links">
                                <li class="py-2" v-for="(item,index) in product" v-bind:key="index"><a
                                    href="#">{{ item.title }}</a></li>
                            </ul>
                        </div><!-- end footer content -->
                    </div>

                    <div class="col-12 col-sm-6 col-lg-2">
                        <!-- Footer Content -->
                        <div class="widget-content">
                            <!-- Footer Title -->
                            <h4 class="h5 mb-4">产品专题</h4>
                            <ul class="list-unstyled footer-links">
                                <li class="py-2"><a href="#">碳排放相关产品</a></li>
                                <li class="py-2"><a href="#">电商系统开发</a></li>
                                <li class="py-2"><a href="#">区块链溯源</a></li>
                                <li class="py-2"><a href="#">NFT艺术品</a></li>
                                <li class="py-2"><a href="#">GameFi</a></li>
                            </ul>
                        </div><!-- end footer content -->
                    </div>

                    <div class="col-12 col-sm-6 col-lg-3">
                        <!-- Footer Content -->
                        <div class="footer-content">
                            <!-- Footer Title -->
                            <h4 class="h5 mb-4">关注我们</h4>

                            <!-- APP STORE -->
                            <a class=" text-start my-2 me-4"
                               href="#">
              <span class="d-flex align-items-center">
                <!--icon-->
                <span class="me-2">
                  <!-- <span class="fab fa-apple fs-2"></span> -->
                 <img :src="require('../../assets/images/batsoft-qr.png')" height="100px">
                </span>
              </span>
                            </a>

                            <!-- PLAY STORE -->
                            <a class=" text-white text-start my-2 me-4"
                               href="#">
              <span class="d-flex align-items-center">
                <!--icon-->
                <span class="me-2">
                  <!-- <span class="fab fa-google-play fs-2"></span> -->
                 <img :src="require('../../assets/images/batsoft-qr.png')" height="100px">
                </span>
              </span>
                            </a>
                        </div><!-- end footer content -->
                    </div>
                </div>
            </div>
        </div><!--End footer -->

        <!--Start footer copyright-->
        <div class="footer-dark">
            <div class="container py-4 border-top border-smooth">
                <div class="row">
                    <div class="col-12 col-md text-center">
                        <p class="d-block my-3">Copyright &copy; www.batsoft.io | All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div><!--End footer copyright-->
    </footer>
</template>
<script>
    export default {
        data () {
            return {
                curtab: 1,
                product: [{
                    title: '碳交易管理系统',
                    des: '帮助企业建立并完善碳排放数据监测、报告、核查制度的同时，为企业提供碳配额有效管理、碳交易深度参与、企业绿色形象塑造等服务',
                    class: 'bg-gradient-primary',
                    advantage: ['全新架构，全新界面；', '稳定高效，可扩展；', '全新架构，全新界面；', '稳定高效，可扩展；']
                }, {
                    title: '绿色能源设备交易系统',
                    des: '针对大型设备如：风能发电设备、光伏发电设备、大型储能设备等为设备供应商提供垂直的交易平台,助力国家实现碳中和碳达峰',
                    class: 'bg-gradient-primary',
                    advantage: ['全新架构，全新界面；', '稳定高效，可扩展；', '全新架构，全新界面；', '稳定高效，可扩展；']
                }, {
                    title: '农资垂直销售平台',
                    des: '农资垂直销售平台',
                    class: 'bg-gradient-primary',
                    advantage: ['全新架构，全新界面；', '稳定高效，可扩展；', '全新架构，全新界面；', '稳定高效，可扩展；']
                }, {
                    title: '农资追溯平台',
                    des: '农资追溯平台',
                    class: 'bg-gradient-primary',
                    advantage: ['全新架构，全新界面；', '稳定高效，可扩展；', '全新架构，全新界面；', '稳定高效，可扩展；']
                }, {
                    title: 'NFT艺术品交易系统',
                    des: '基于区块链技术编写智能合约制作发行独一无二的数字艺术品NFT，实现数字艺术品的在线馈赠、交易、收藏',
                    class: 'bg-gradient-primary',
                    advantage: ['全新架构，全新界面；', '稳定高效，可扩展；', '全新架构，全新界面；', '稳定高效，可扩展；']
                }, {
                    title: '区块链溯源平台',
                    des: '数据上链，一物一码，商品从生产到运输再到最后销售，每一个交换的信息都被记录在区块链上，可以确保商品的唯一性，让造假变得绝无可能。',
                    class: 'bg-gradient-primary',
                    advantage: ['全新架构，全新界面；', '稳定高效，可扩展；', '全新架构，全新界面；', '稳定高效，可扩展；']
                }]
            }
        },
        computed: {},
        methods: {}
    };
</script>
<style lang="less" scoped>

</style>
