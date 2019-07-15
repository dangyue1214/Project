<template>
  <section>
    <div class="detail">
      <goods-detail-middle-display :goodinfo="onegoodsInfor" :onCurrentPic="onCurrentPic" :goodinfoImg="goodinfoImg"></goods-detail-middle-display>
      <goods-detail-middle-introduce :goodinfo="onegoodsInfor"></goods-detail-middle-introduce>
    </div>
  </section>
</template>

<script>
  import goodsDetailMiddleDisplay from './goodsDetailMiddleDisplay.vue'
  import goodsDetailMiddleIntroduce from './goodsDetailMiddleIntroduce.vue'
    export default {
      props:{
        onegoodsInfor:{
          type:Object,
        },
        onCurrentPic:{
          type:Function
        },
        goodinfoImg:{}
      },
    components:{
      goodsDetailMiddleDisplay,
      goodsDetailMiddleIntroduce
    },
        name: "goodsDetailMiddle"
    }
</script>

<style scoped>
  /*section*/
  section{
    width:100%;
    padding-top: 60px;
  }
  /*left*/

  .swiper-slide img{
    width:100%;
    border:1px solid lightgray;
  }

  .color a{
    border: 1px solid red;
    width: 38px;
    display: inline-block;
    line-height: 26px;
    height: 26px;
    text-align: center;
  }

  .afterSale i{
    background: url(../../assets/img/icons.png) no-repeat;
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .afterSale .bg_img1{
    background-position: -94px -24px;
  }
  .afterSale .bg_img2{
    background-position: -94px -46px;
  }
  .afterSale .bg_img3{
    background-position: -94px -68px;
  }
  .moreDeta  a{
    text-decoration: underline;
  }


</style>
