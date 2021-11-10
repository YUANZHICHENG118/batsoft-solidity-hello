<template>
    <div id="top">
        <Carousel
            v-model="slide"
            :autoplay-speed="4000"
            indicators
            autoplay
            :height="550"
            @on-click="go"
        >
            <!--                <CarouselItem-->
            <!--                class="carousel-item"-->
            <!--                v-for="(item,index) in banners"-->
            <!--                v-bind:key="index"-->
            <!--                :style="{backgroundImage:'url('+publicParams.fileHost+item.url+')'}"-->
            <!--            >-->
            <!--            </CarouselItem>-->
            <CarouselItem
                class="carousel-item"
                v-for="(item,index) in banners"
                v-bind:key="index"
                :style="{backgroundImage:'url('+require('assets/images/banner/'+item+'')}"
            >
            </CarouselItem>
        </Carousel>
    </div>

</template>
<script>
    // import util from '@/libs/util';
    import { mapState } from 'vuex';

    export default {
        data () {
            return {
                slide: 0,
                sliding: null,
                banners: ['banner0.jpg', 'banner1.jpg']
            };
        },
        computed: {
            ...mapState('common', ['publicParams'])
        },
        methods: {
            go (index) {
                window.location.href = this.banners[index]['path']
            }
        },
        created () {

        }
    };
</script>
<style lang="less" scoped>
.carousel-item {
    position: relative;
    display: block;
    width: 1680px;
    height: 100%;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: #06054d;
}

@media screen and (max-width: 768px) {
    .carousel-item {
        height: 300px;
    }
}
</style>
