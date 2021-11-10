<template>
  <div class="ivu-mt feature_wrap ivu-page-header">
    <div class="container">
      <h1 class="ivu-text-center">行业咨询</h1>
        <p class="ivu-mt-8 ivu-text-center">最新技术、科技前沿、近期签约、产品动态，为您带来新鲜报道</p>
          <!-- =========={ FEATURES }==========  -->
        <!-- row -->
        <div class="row">
            <div class="col-md-6 col-lg-4 px-lg-4" v-for="(item,index) in article1" v-bind:key="index">
                <!-- Card -->
                <div class="card card-full border-0 blog-two mb-5 rounded-3 overflow-hidden" data-aos="fade-up">
                    <div class="blog-two-img">
                        <a href="#">
                            <img class="img-fluid" :src="require('../../assets/images/article/'+item.img)" alt="alt title">
                        </a>
                    </div>
                    <div class="card-body px-0">
                        <div class="card-title">
                            <h3 class="h5 mb-3"><a href="#">{{ item.title }}</a></h3>
                            <div class="meta text-muted">
                                <svg class="bi bi-calendar me-2 text-muted" width=".8rem" height=".8rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" clip-rule="evenodd"></path>
                                    <path fill-rule="evenodd" d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                </svg><span>{{ item.time }}</span>
                            </div>
                        </div>
                        <p class="mb-0">{{item.des}}</p>
                    </div>
                </div><!-- End card -->
            </div>

        </div><!-- end row -->
        <div class="row">
            <div class="col-md-6 col-lg-4 px-lg-4" v-for="(item,index) in article2" v-bind:key="index">
                <!-- Card -->
                <div class="card card-full border-0 blog-two mb-5 rounded-3 overflow-hidden" data-aos="fade-up">
                    <div class="blog-two-img">
                        <a href="#">
                            <img class="img-fluid" :src="require('../../assets/images/article/'+item.img)" alt="alt title">
                        </a>
                    </div>
                    <div class="card-body px-0">
                        <div class="card-title">
                            <h3 class="h5 mb-3"><a href="#">{{ item.title }}</a></h3>
                            <div class="meta text-muted">
                                <svg class="bi bi-calendar me-2 text-muted" width=".8rem" height=".8rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" clip-rule="evenodd"></path>
                                    <path fill-rule="evenodd" d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                </svg><span>{{ item.time }}</span>
                            </div>
                        </div>
                        <p class="mb-0">{{item.des}}</p>
                    </div>
                </div><!-- End card -->
            </div>
        </div>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                article1: [{
                    title: '成熟碳资产管理系统解决方案',
                    time: '2021-11-01',
                    des: '在当前“碳达峰”“碳中和”的目标背景下，碳交易现货市场一路快马加鞭。目前，我国已经在8个省市陆续开展了地方碳交易试点。',
                    img: 'blog1.jpg'
                }, {
                    title: '脸书宣布改名为Meta,进军“元宇宙”',
                    time: '2021-11-02',
                    des: '北京时间11月2日早间消息，据报道，元宇宙先锋批评Facebook的改名举措，称这不是Facebook的原创，后者是再利用这个越来越热的概念。',
                    img: 'meta.jpg'
                }, {
                    title: '什么是“碳达峰”和“碳中和”？',
                    time: '2021-10-01',
                    des: '碳达峰是指我国承诺2030年前，二氧化碳的排放不再增长，达到峰值之后逐步降低',
                    img: 'tan.gif'
                }],
                article2: [{
                    title: '国家鼓励家庭农场、农合合作社发展',
                    time: '2021-03-01',
                    des: '3月6日，农业农村部印发《新型农业经营主体和服务主体高质量发展规划（2020-2022年）》，规划提出，到2022年，家庭农场...',
                    img: 'nongye.jpg'
                }, {
                    title: '展会重磅直击|2021中国国际智能产业博览会 ',
                    time: '2021-08-26',
                    des: '8月23-25日，2021中国国际智能产业博览会（以下简称“智博会”）在重庆正式举办。习近平总书记在给会议的致贺信中提到，5G、人工智能、区块链...',
                    img: 'block.png'
                }, {
                    title: '供应链金融解决方案',
                    time: '2021-06-01',
                    des: '融合区块链的数字供应链金融平台，搭建金融机构、产业链核心企业、链属企业、供应商等多方联盟信任体系和价值网络，释放传递核心企业信用。',
                    img: 'gyl.jpg'
                }]
            }
        },
        computed: {
        },
        methods: {
        }
    };
</script>
<style lang="less" scoped>
.feature_wrap{
  padding: 40px 0;
  .feature-list{
    margin-top:40px;
    .item{
      padding-top: 32px;
      padding-bottom: 32px;
      margin-left: 12px;
      margin-right: 12px;
       &:hover{
         box-shadow: 0px 0px 20px rgba(0,0,0,0.08);
       }
    }
  }
}
</style>
