<template>
  <div class="container">
    <div class="mica-slider mt-4">
      <div class="mobile">
        <div class="slide-wrapper" ref="slide" :style="mobileWrapperStyle" @touchstart="moveStart" @touchmove="onMove"
             @touchend="moveEnd">
          <div class="slide" v-for="(item,index) in sliderList" :key="index" :style="{width:'230px'}">
            <img :src="require('../../assets/images/slider/'+item)" alt=""/>
          </div>
        </div>
      </div>
      <div class="pc">
        <div class="slide-wrapper " ref="wrapper" :style="wrapperStyle">
          <div class="slide" v-for="(item,index) in sliderList" :key="index" :style="{width:((wrapWidth-45)/4)+'px'}">
              <img :src="require('../../assets/images/slider/'+item)" alt=""/>
          </div>
        </div>
      </div>
      <div class="pc">
        <div class="left-btn" @click="move('left')" v-show="current<0">
          <Icon type="ios-arrow-back" size="24"/>
        </div>
        <div class="right-btn" @click="move('right')" v-show="sliderList.length+current>4">
          <Icon type="ios-arrow-forward" size="24"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                sliderList: ['1.png', '2.png', '3.png', '4.png', '5.png'],
                current: 0,
                wrapWidth: 0,
                startX: 0, // 触摸起始x
                startY: 0, // 触摸起始y
                endX: 0, // 触摸结束x
                endY: 0, // 触摸结束y
                lastX: 0, // 上一次X坐标
                moveLength: 0,
                canMove: true // 是否可以继续滑动
            }
        },
        computed: {
            mobileWrapperStyle () {
                return {
                    transform: `translate3d(${this.moveLength}px,0,0)`
                }
            },
            wrapperStyle () {
                return {
                    transform: `translate3d(${this.current * ((this.wrapWidth - 45) / 4 + 15)}px,0,0)`
                }
            }
        },
        methods: {
            move (value) {
                this.current -= (value === 'left') ? -1 : 1
            },
            moveStart (e) {
                if (e.touches.length === 1) { // tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
                    this.lastX = e.touches[0].clientX; // 记录开始位置
                    this.startY = e.touches[0].clientY;
                }
            },
            onMove (e) {
                const ElementWidth = this.$refs.slide.offsetWidth;
                this.endX = e.touches[0].clientX;
                this.endY = e.touches[0].clientY;
                const dValueX = Math.abs(this.lastX - this.endX)
                const dValueY = Math.abs(this.startY - this.endY)
                if (this.current === 0) {
                    this.moveLength = dValueX
                } else {
                    this.moveLength = -1 * (ElementWidth * this.current + dValueX);
                }
                if (dValueX > dValueY) {
                    // 水平滑动长度大于纵向滑动长度，那么选择水平滑动，阻止浏览器默认左右滑动事件
                    e.preventDefault()
                    if (dValueX > 20 && this.lastX > this.endX) {
                        // 向左划
                        if (this.current < this.sliderList.length - 1 && this.canMove) {
                            this.canMove = false
                            this.current += 1
                        }
                    } else if (dValueX > 20 && this.current > 0 && this.canMove && this.lastX < this.endX) {
                        this.canMove = false
                        this.current -= 1
                    }
                }
            },
            moveEnd (e) {
                const ElementWidth = this.$refs.slide.offsetWidth;
                this.endX = e.changedTouches[0].clientX;
                this.canMove = true
                this.moveLength = -1 * ElementWidth * this.current;
                this.startY = this.endY
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.wrapWidth = this.$refs.wrapper.offsetWidth
            })
        }
    }
</script>
<style lang="less" scoped>
  .mica-slider {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    .slide-wrapper {
      display: flex;
      transition: all 0.3s ease-in-out;
      .slide {
        margin-right: 15px;
        flex: 0 0 auto;
        box-sizing: border-box;
        height: 100%;
        border-radius: 4px;
        overflow: hidden;
        max-width: 235px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .right-btn {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    top: 0;
    bottom: 0;
    width: 32px;
    cursor: pointer;
    position: absolute;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    right: 0;
    display: flex;
  }

  .left-btn {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    top: 0;
    bottom: 0;
    width: 32px;
    cursor: pointer;
    position: absolute;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    left: 0;
    display: flex;
  }
</style>
