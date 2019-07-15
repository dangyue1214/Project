<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><a href="#"><img src="../../assets/images/banner_1.jpg"></a></div>
        <div class="swiper-slide"><a href="#"><img src="../../assets/images/banner_2.jpg"></a></div>
        <div class="swiper-slide"><a href="#"><img src="../../assets/images/banner_3.jpg"></a></div>
        <div class="swiper-slide"><a href="#"><img src="../../assets/images/banner_4.jpg"></a></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper/dist/js/swiper'
  export default {
        name: "MyVueSwiper",
        mounted(){
           new Swiper('.swiper-container', {
            direction : 'horizontal',
            effect : 'fade',
            loop : true,
            speed:1000,
            autoplay: {
              delay: 2000,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            }
          })
        }
    }
</script>

<style scoped>
  /*@import "~swiper/dist/css/swiper.css";*/
  .banner{
    clear:both;
    width:100%;
    height:420px;
  }
  .banner .swiper-container .swiper-wrapper .swiper-slide img{
    width:100%;
    height:420px;
  }
</style>
