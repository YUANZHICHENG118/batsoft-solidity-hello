<template>
    <div>
    <div class="leftcosult">
        <ul>
            <li class="liask">
                <a href="javascript:void(0)"><i class="sqicon hoveri"></i><em class="hovem">在线咨询</em></a>
                <span class="minbox"></span>
                <span class="maxbox"></span>
            </li>
            <li class="litelp" id="litelp" @mouseover="showPhone">
                <div><i class="sqicon"></i><em>报价明细</em></div>
                <span class="minbox"></span>
                <span class="maxbox"></span>
            </li>
            <li class="litestq">
                <div><a href="javascript:void(0)"><i class="sqicon hoveri"></i><em class="hovem">试用申请</em></a>
                </div>
                <span class="minbox"></span>
                <span class="maxbox"></span>
            </li>
            <li class="libacktop" v-show="scrollTop"   @click="goTop">
                <div><i class="sqicon hoveri"></i><em class="hovem">回到顶部</em></div>
                <span class="minbox"></span>
                <span class="maxbox"></span>
            </li>
        </ul>
    </div>
        <div  :class="showWindow ? 'telpbox showanimation':'telpbox hideanimation'"  id="telpbox" ref="telpbox">
            <span class="sqicon spclose" @click="hideWindow"></span>
            <h3>选择以下任一方法：索取【系统报价明细】</h3>
            <div class="telpcot">
                <div class="telpft">
                    <div class="telpftcot">
                        <h4><span class="sqicon"></span>
                            与我们专业客服直接沟通，您将得到第一手的系统报</br>价和详细的报价说明。</h4>
                        <div class="tepone">方法一：通过网页聊天工具，获取一手资料、报价、试用</div>
                        <div class="askcot" onclick="opensq()">联系在线客服</div>
                    </div>
                </div>
                <div class="telprt">
                    <div class="telprtcot">
                        <div class="telphonecs">
                            <h4><span class="sqicon"></span>方法二：直接拨打官方热线</h4>
                            <h5>400-515-6868</h5>
                        </div>
                        <form action="" style="position: relative;margin: 0 15px;">
                            <input type="text" style="font-size: 12px" placeholder="方法三：输入您的电话号码" id="telphone">
                            <div class="btnbox">立刻回呼此号码</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        data () {
            return {
                scrollTop: false,
                showWindow: false
            };
        },
        mounted () {
            window.addEventListener('scroll', this.showTop, true)
            setTimeout(() => {
                this.showWindow = true
            }, 12000)
        },
        destroyed () {
            window.removeEventListener('scroll', this.showTop);
        },
        methods: {
            showPhone () {
                this.showWindow = true
            },
            hideWindow () {
                this.showWindow = false
            },
            // 显示回到顶部按钮
            showTop () {
                let that = this;
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                that.scrollTop = scrollTop > 800
            },
            goTop () {
                var timer = setInterval(function () {
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    let ispeed = Math.floor(-osTop / 5);
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                    if (osTop === 0) {
                        clearInterval(timer);
                    }
                }, 30)
            }
        },
        created () {

        }
    };
</script>
<style scoped lang="less">
.sqicon {
    display:inline-block;
    background:url('../../../assets/images/sqicn.png') no-repeat;
}
.leftcosult {
    position: fixed;
    right: 30px;
    bottom: 70px;
    z-index: 999
}

.leftcosult li {
    position: relative;
    width: 74px;
    height: 74px;
    margin-top: 20px;
    border-radius: 50%;
    background: #19be6b;
    display: flex;
    align-items: center;
    justify-content: center;
}

.leftcosult li.liask .sqicon {
    width: 38px;
    height: 38px;
    background-position: 0 0;
}

.leftcosult li.litelp .sqicon {
    width: 32px;
    height: 32px;
    background-position: 0 -91px;
}

.leftcosult li.litestq .sqicon {
    width: 32px;
    height: 32px;
    background-position: 0 -47px
}

.leftcosult li.libacktop .sqicon {
    background-position: 0 -141px;
    width: 32px;
    height: 20px;
}

.leftcosult li a, .leftcosult li > div {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
}

.minbox, .maxbox {
    position: absolute;
    width: 84px;
    height: 84px;
    top: 50%;
    left: 50%;
    margin-top: -42px;
    margin-left: -42px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border-radius: 50%;
    background: rgba(30, 168, 250, .4);
    z-index: 1;
    opacity: 0
}

.maxbox {
    width: 101px;
    height: 101px;
    margin-top: -50px;
    margin-left: -50px;
    background: rgba(79, 184, 247, .15)
}

.leftcosult li em {
    font-size: 16px;
    color: #fff;
    font-style: normal;
    line-height: 38px;
    display: none;
    transition: all .2s linear;
}

.leftcosult li > div:hover i.hoveri,
.leftcosult li > a:hover i.hoveri {
    display: none;
}

.leftcosult li > div:hover em.hovem,
.leftcosult li > a:hover em.hovem {
    display: block;
}

.leftcosult li:hover .maxbox, .leftcosult li:hover .minbox {
    opacity: 1;
    -webkit-animation: warn 1s infinite ease-out;
    -moz-animation: warn 1s infinite ease-out;
    animation: warn 1s infinite ease-out
}
@keyframes warn {
    0% {
        transform:scale(0);
        opacity:.0
    }
    25% {
        transform:scale(0.6);
        opacity:.5
    }
    50% {
        transform:scale(0.8);
        opacity:.8
    }
    75% {
        transform:scale(1);
        opacity:1
    }
    100% {
        transform:scale(1.2);
        opacity:.0
    }
}.telpbox {
     position:fixed;
     width:580px;
     height:334px;
     background-color:#fff;
     box-shadow:0 2px 10px 0 rgba(29,50,119,0.28);
     z-index:9999;
     background:#fff;
     top:35%;
     right:50%;
     margin-top:-70px;
     margin-right:-290px;
     background:#fff;
     display:none
 }

.telpbox h3 {
    height:60px;
    background-color:#19be6b;
    font-size:20px;
    letter-spacing:2px;
    text-align:center;
    line-height:60px;
    color:#fff
}
.telpcot {
    display:flex;
    justify-content:space-between;
    padding:30px 0;
}
.telpft {
    width:290px;
    line-height:1;
    font-size:16px;
    color:#19be6b
}

.telphonecs h4 {
    margin-bottom: 10px;
    color:#19be6b;
    font-weight:normal;
    font-size: 14px;
}
.telphonecs h4 .sqicon {
    width:22px;
    height:22px;
    background-position:-2px -279px;
    vertical-align:-5px;
    margin-right:10px
}
.telphonecs h5 {
    font-size:32px;
    color:#19be6b
}
.telphonecs p {
    font-size:14px;
    margin-top:45px
}
.telphonecs {
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(191,191,191,.6);
}
.telprtcot,
.telpftcot{
    width: 230px;
    margin: 0 auto;
}
.telpftcot .tepone {
    margin: 30px 2px 30px 18px;
    line-height: 24px;
}
.telpftcot h5 {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
}
.telpftcot span {
    display: block;
    line-height: 24px;
    padding-left: 16px;
}
.telpftcot h4 {
    position: relative;
    padding-left: 43px;
    font-size: 16px !important;
    font-weight: normal;
    line-height: 24px;
    margin-right: -5px;
    color: #19be6b;
}
.telpftcot h4 .sqicon {
    display: inline-block;
    width:38px;
    height:38px;
    background-position: 0 bottom;
    position: absolute;
    left: 0;
    top: 2px;
}
.telpftcot .askcot {
    margin: 0 14px;
    height: 42px;
    line-height: 42px;
    text-align: center;
    background-color: #19be6b;
    border: 1px solid #19be6b;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
}
.telprt {
    width: 290px;
    box-sizing:border-box;
    color:#666;
    font-size:16px;
    border-left:1px dashed rgba(191,191,191,.6);
}
.telprt p {
    padding:15px 15px 5px;
}
.telprt input {
    width:100%;
    height:48px;
    margin:20px 0;
    line-height:48px;
    text-align:center;
    border-radius:4px;
    border:solid 1px #bfbfbf;
    font-size:16px
}
.telprt .btnbox {
    width:100%;
    height:42px;
    line-height:42px;
    text-align:center;
    background-color:#19be6b;
    border:1px solid #19be6b;
    border-radius:4px;
    color:#fff;
    cursor:pointer
}
.spclose {
    position:absolute;
    right:-15px;
    top:-15px;
    width:32px;
    height:32px;
    background-position:0 -173px;
}
.showanimation {
    animation:in 1s ease both;
    -webkit-animation:in 1s ease both;
    -moz-animation:in 1s ease both;
    display:block;
    animation-delay:0s;
    -webkit-animation-delay:0s
}
.hideanimation {
    animation:out 1s ease both;
    -webkit-animation:out 1s ease both;
    -moz-animation:out 1s ease both;
    display:none\0;
    *display:none
}
@keyframes in {
    0% {
        transform:scale(0,0) skew(60deg,60deg);
        top:100%;
        right:50px
    }
    100% {
        transform:scale(1,1) skew(0,0);
        top:35%;
        right:50%
    }
}@-webkit-keyframes in {
     0% {
         -webkit-transform:scale(0,0) skew(60deg,60deg);
         top:100%;
         right:50px
     }
     100% {
         -webkit-transform:scale(1,1) skew(0,0);
         top:35%;
         right:50%
     }
 }@-moz-keyframes in {
      0% {
          -moz-transform:scale(0,0) skew(60deg,60deg);
          top:100%;
          right:50px
      }
      100% {
          -moz-transform:scale(1,1) skew(0,0);
          top:35%;
          right:50%
      }
  }@keyframes out {
       0% {
           transform:scale(1,1) skew(0,0);
           top:35%;
           right:50%
       }
       100% {
           transform:scale(0,0) skew(60deg,60deg);
           top:100%;
           right:50px;
           display:none
       }
   }@-webkit-keyframes out {
        0% {
            -webkit-transform:scale(1,1) skew(0,0);
            top:35%;
            right:50%
        }
        100% {
            -webkit-transform:scale(0,0) skew(60deg,60deg);
            top:100%;
            right:50px;
            display:none
        }
    }@-moz-keyframes out {
         0% {
             -moz-transform:scale(1,1) skew(0,0);
             top:35%;
             right:50%
         }
         100% {
             -moz-transform:scale(0,0) skew(60deg,60deg);
             top:100%;
             right:50px;
             display:none
         }
     }.errtipbox {
          position:fixed;
          top:10px;
          left:50%;
          width:500px;
          height:160px;
          margin-top:0;
          margin-left:-250px;
          background-color:#fff;
          box-shadow:0 2px 10px 0 rgba(29,50,119,0.28);
          z-index:9999;
          font-size:16px
      }

.errtipbox p {
    padding:30px 0;
    text-align:center;
    color:#999
}
.errtipbox .errbtn {
    width:140px;
    height:48px;
    float:right;
    margin-right:42px;
    text-align:center;
    line-height:48px;
    color:#fff;
    background-color:#19be6b;
    border-radius:4px;
    cursor:pointer
}
.sucpbox {
    position:fixed;
    top:50%;
    left:50%;
    width:340px;
    height:240px;
    margin-top:-120px;
    margin-left:-170px;
    background-color:#fff;
    box-shadow:0 2px 10px 0 rgba(29,50,119,0.28);
    z-index:9999;
    font-size:16px;
    text-align:center
}
.sucpbox .sqicon {
    width:40px;
    height:48px;
    margin:42px 0 25px;
    background-position:0 -212px;
}
.sucpbox p {
    margin-bottom:40px;
    color:#666
}
.sucpbox .sucbtn {
    display:inline-block;
    width:140px;
    height:48px;
    background-color:#19be6b;
    border-radius:4px;
    text-align:center;
    line-height:48px;
    color:#fff;
    cursor:pointer
}
.scuermask {
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:rgba(0,0,0,.2);
    z-index:1000;
    display:none
}
@media screen and (max-width: 600px) {
    .telpbox {
        width:380px;
        height: auto;
        left: 3%;
        top: 10%;
        h3{
            font-size: 16px;
        }
    }
    .telpcot {
        display:flex;
        justify-content:center;
        flex-direction: column;
        padding:30px 0;
    }
    .telpft,.telprt{
        width: auto;
    }
}
</style>
