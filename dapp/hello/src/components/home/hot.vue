<template>
  <div class="guide-wrap mt-lg-5">
    <div class="container">
      <h1 class="ivu-text-center">热门产品</h1>
      <p class="ivu-mt-8 ivu-text-center">最新的产品</p>
      <div class="tabs">
          <div class="pt-4">
              <!-- row -->
              <div class="row justify-content-center">
                  <div class="col-11 col-md-6 col-lg-4" v-for="(item,index) in product" v-bind:key="index">
                      <div class="px-xl-2">
                          <!-- Pricing table -->
                          <div class="pricing-table-three shadow-sm text-center rounded-3 mb-5">
                              <!-- Pricing header -->
                              <header :class="'pricing-header '+ item.class +' text-white rounded-3 z-index-1 position-relative'">
                                  <strong class="pricing-fee display-4 fw-bold mb-2">
                                      <span class="h5 text-white">{{item.title}}</span>
                                  </strong>
                                  <h3 class="pricing-title small text-uppercase text-white u-letter-spacing-sm">{{item.des}}</h3>

                                  <!-- waves start -->
                                  <figure class="waves-bottom-center text-white z-index-n1">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                          <path fill="currentColor" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,202.7C384,224,480,224,576,208C672,192,768,160,864,133.3C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                                      </svg>
                                  </figure>
                              </header><!-- End pricing header -->

                              <!-- pricing content -->
                              <div class="pricing-content pb-5">
                                  <ul class="list-unstyled">
                                      <li class="mb-2 py-1" v-for="(data,index2) in item.advantage" v-bind:key="index2">
                                          {{ data }}</li>
                                  </ul>
                                  <a class="btn btn-success" href="#">深入了解</a>
                              </div><!-- end pricing content -->
                          </div><!-- End pricing table -->
                      </div>
                  </div>

              </div><!-- end row -->
          </div>
      </div>
    </div>
  </div>
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
        computed: {
            tabs () {
                return [
                    { name: 1, value: this.$i18n.t('page.index.guide.buySellCoin') },
                    { name: 2, value: this.$i18n.t('page.index.guide.exploreCoin') },
                    { name: 3, value: this.$i18n.t('page.index.guide.digCoinProductCourse') }
                ]
            }
        },
        methods: {
            changeTab (item, e) {
                this.curtab = item.name;
                const left = e.target.offsetLeft;
                const width = e.target.offsetLeft;
                const center = (document.body.clientWidth - width) / 2
                this.$refs.con.scrollLeft = left - center;
            }
        }
    };
</script>
<style lang="less" scoped>

/*------------------------------------
  Pricing
------------------------------------*/
.pricing-table-one {
    position: relative;
    background-color: #fff; }

.pricing-table-two {
    position: relative;
    background-color: #fff;
    margin-bottom: 1rem; }

.pricing-table-two .pricing-header {
    position: relative;
    padding: 3rem 4.5rem 1rem; }

.pricing-table-two .pricing-header .pricing-fee {
    display: block;
    line-height: .84; }

.pricing-table-two .pricing-header .pricing-title {
    opacity: .8; }

.pricing-table-two .pricing-header .sub-head {
    line-height: 1.5;
    margin-bottom: 0.5rem; }

.pricing-table-two .pricing-header .pricing-decoration {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0; }

.pricing-table-two .pricing-content {
    padding: 0 4.5rem 3rem; }

.pricing-table-two .pricing-content .disabled .u-icon {
    color: #9d80ec;
    background-color: rgba(157, 128, 236, 0.1); }

.pricing-table-two .disabled {
    color: #9d80ec; }

.pricing-table-three {
    position: relative;
    background-color: #fff;
    margin-bottom: 1rem; }

.pricing-table-three .pricing-header {
    position: relative;
    padding: 4.5rem 1.5rem; }

.pricing-table-three .pricing-header .pricing-fee {
    line-height: .84; }

.pricing-table-three .pricing-header .pricing-title {
    opacity: .8;
    margin-top: 1rem; }

.pricing-table-three .pricing-header .pricing-decoration {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0; }

.pricing-table-three .pricing-content {
    padding: 1.5rem; }

.pricing-table-three .pricing-content .disabled .u-icon {
    color: #9d80ec;
    background-color: rgba(157, 128, 236, 0.1); }

.pricing-table-three .disabled {
    color: #9d80ec; }

.line-after {
    height: .2rem;
    width: 100%; }

.js-yearly {
    display: none; }

.slideToggle {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center; }

.slideToggle i {
    margin: 0 1rem; }

.form-switch {
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 1.25rem; }

.form-switch i {
    position: relative;
    display: inline-block;
    width: 6.25rem;
    height: 1.875rem;
    border: 1px solid #E5E7EB;
    border-radius: 0.9375rem;
    transition: all 0.3s linear; }

.form-switch i::after {
    content: "";
    position: absolute;
    left: 0;
    width: 2.5rem;
    height: 1.375rem;
    background-color: #5b2be0;
    border-radius: 0.9375rem;
    -webkit-transform: translate3d(4px, 3px, 0);
    transform: translate3d(4px, 3px, 0);
    transition: all 0.2s ease-in-out; }

.form-switch input {
    display: none; }

.form-switch input:checked + i::after {
    -webkit-transform: translate3d(54px, 3px, 0);
    transform: translate3d(54px, 3px, 0); }
</style>
