<template>
    <div class="progress-box">
        <div class="progress">
            <span class="progress-item"></span>
            <span class="progress-item"></span>
            <span class="progress-item"></span>
            <span class="progress-item"></span>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .progress-box{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 9999;
    }
    .progress{
        box-sizing: border-box;
        margin: 0px;
        min-width: 0px;
        display: flex;
        width: 30px;
        height: 30px;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        .progress-item{
            box-sizing: border-box;
            margin:0;
            min-width: 0;
            background-color: #1e93ff;
            height: 100%;
            width: 3px;
            animation: 1.2s ease-in-out  infinite normal none running loading;
            &:nth-child(1){
                animation-delay: -0.3s;
            }
            &:nth-child(2){
                animation-delay: -0.2s;
            }
            &:nth-child(3){
                animation-delay: -0.1s;
            }
            &:nth-child(4){
                animation-delay: -0s;
            }

        }
    }
    @keyframes loading {
        0%, 40%, 100% {
            transform: scaleY(0.4);
        }
        20% {
            transform: scaleY(1);
        }
    }
</style>
