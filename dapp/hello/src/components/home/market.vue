<template>
  <div class="trade-block">
    <ul class="market-ticker">
      <li v-for="item in 6" :key="item">
        <a href="">
          <dl class="btcusdt">
            <dt><span>比特币</span> <strong>BTC/USDT</strong></dt>
            <dd class="price">18487.35 <em>≈ 119982.90 USD</em></dd>
            <dd class="vol">24H量 28,162</dd>
            <dd class="rate up ql-color-green">+2.04%</dd>
          </dl>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {}
</script>
<style lang="less" scoped>
  .trade-block {
    ul {
      display: flex;
      margin: 0 8px;
      li {
        flex: 1;
        padding: 18px 24px;
        height: 120px;
        list-style:none;
        position: relative;
        &:hover {
          background: #0e1935;
        }
        &:after {
          content: "";
          position: absolute;
          border-left: 1px solid hsla(0,0%,100%,.15);
          right: -1px;
          top: 18px;
          bottom: 18px;
        }
        dl{
          position: relative;
          dd{
            font-size: 16px;
            margin-top: 16px;
            &.vol {
              font-size: 12px;
              line-height: 12px;
              color: #61698a;
            }
            &.price {
              font-size: 20px;
              line-height: 20px;
              color: #d2d6ec;
              em {
                color: #b0b8db;
                line-height: 12px;
                font-size: 12px;
              }
            }
            &.rate{
              position: absolute;
              top: 0;
              right: 0;
              font-weight: 500;
              margin: 0;
            }
          }
        }

        &:first-of-type {
          border-left: none;
        }

      }
    }
  }

</style>
