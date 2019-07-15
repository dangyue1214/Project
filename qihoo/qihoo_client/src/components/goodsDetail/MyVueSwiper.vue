<template>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img @mouseover="onCurrentPic(goodinfo.goodsimg1)" v-bind:src="goodinfo.goodsimg1"/></div>
        <div class="swiper-slide"><img @mouseover="onCurrentPic(goodinfo.goodsimg2)" v-bind:src="goodinfo.goodsimg2" /></div>
        <div class="swiper-slide"><img @mouseover="onCurrentPic(goodinfo.goodsimg3)" v-bind:src="goodinfo.goodsimg3" /></div>
        <div class="swiper-slide"><img @mouseover="onCurrentPic(goodinfo.goodsimg4)" v-bind:src="goodinfo.goodsimg4"/></div>
        <div class="swiper-slide"><img @mouseover="onCurrentPic(goodinfo.goodsimg5)" v-bind:src="goodinfo.goodsimg5" /></div>
        <div class="swiper-slide"><img @mouseover="onCurrentPic(goodinfo.goodsimg6)" v-bind:src="goodinfo.goodsimg6" /></div>
        <div class="swiper-slide"><img @mouseover="onCurrentPic(goodinfo.goodsimg1)" v-bind:src="goodinfo.goodsimg1" /></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>

</template>

<script>
  import Swiper from "swiper/dist/js/swiper"
  export default {
    props:{
      goodinfo:{
        type:Object,
      },
      onCurrentPic:{
        type:Function
      }
    },
        name: "QihooSwiper",
        methods:{

        },
        mounted(){
            new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 50,
            // init: false,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            breakpoints: {
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              }
              // @mouseover="$emit('curr-pic', goodsinfo.goodsimg1)"
            }
          });
        }
    }
</script>

<style scoped>
  @import "swiper/dist/css/swiper.css";

  .swiper-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding:0 4px;
  }
  .swiper-wrapper{
    width:100%;
    height:100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide img{
    width:100%;
    border:1px solid lightgray;
  }
</style>
