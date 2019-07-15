<template>
  <div class="left">
    <div class="detail_img_top" id="detail_img_top">
      <div class="detail_originalImg" @mousemove="magnifymove"  @mouseover="magnifyover"  @mouseout="magnifyout" id="detail_originalImg">
        <img v-if="goodinfo"  id="originalImg" :src="goodinfoImg " alt=""/>
        <div  class="fangda" id="fangda"></div>
      </div>
      <div id="magnifier_img" class="magnifier_img">
        <img :src="goodinfoImg " alt="" id="magnifier_img_img" class="magnifier_img_img">
      </div>
    </div>
    <!--轮播图-->
    <div class="detail_img_bottom">
      <my-vue-swiper :onCurrentPic="onCurrentPic" :goodinfo="goodinfo"></my-vue-swiper>
    </div>
    <a class="collect" href=""></a>
  </div>
</template>

<script>
  import MyVueSwiper from './MyVueSwiper.vue'
  export default {

    data(){
      return{
        // goodinfoImgBg:"",
        fangda:"",
        magnifier_img:"",
        detail_originalImg:"",
        magnifier_img_img:""
      }
    },
    props:{
      goodinfo:{
        type:Object,
      },
      onCurrentPic:{
        type:Function
      },
      goodinfoImg:{}
    },
    components:{
      MyVueSwiper
    },
    created(){
      // this.goodinfoImg = this.goodinfo.goodsimg1;
    },
    name: "GoodsDetailMiddleDisplay",
    methods: {
      // onCurrentPic: function(cuur){
      //   this.goodinfoImg = cuur;
      // },
      magnifyover(){
        this.fangda.style.display="block";
        this.magnifier_img.style.display="block";
      },
      magnifyout(){
        this.fangda.style.display="none";
        this.magnifier_img.style.display="none";
      },
      magnifymove(event){
        var e = event || window.event;
        let x = e.clientX;
        let y = e.clientY;
        let t = this.detail_originalImg.offsetTop;
        let l = this.detail_originalImg.offsetLeft;
        let _left = x-l-this.fangda.offsetWidth/2;
        let _top = y-t-this.fangda.offsetHeight/2;
        if(_top<=0){
          _top=0;
        }else if(_top>=this.detail_originalImg.offsetHeight-this.fangda.offsetHeight){
          _top=this.detail_originalImg.offsetHeight-this.fangda.offsetHeight;
        }

        if(_left<=0){
          _left=0;
        }else if(_left>=this.detail_originalImg.offsetWidth-this.fangda.offsetWidth){
          _left=this.detail_originalImg.offsetWidth-this.fangda.offsetWidth;
        }
        this.fangda.style.top = _top+"px";
        this.fangda.style.left = _left+"px";
        this.magnifier_img_img.style.left = (-_left)*2+"px";  // 临时测试
        this.magnifier_img_img.style.top = (-_top)*2+"px";  // 临时测试
      }
    },
    mounted(){
      this.fangda = document.getElementById("fangda");
      this.magnifier_img = document.getElementById("magnifier_img");
      this.detail_originalImg = document.getElementById("detail_originalImg");
      this.magnifier_img_img = document.getElementById("magnifier_img_img");
    }
  }
</script>

<style scoped>
  /*section*/
  section{
    width:100%;
  }
  /*left*/

  .detail_img_top{
    position: relative;
  }

  .detail_originalImg{
    margin: 0 auto;
    width: 460px;
    height: 460px;
    position: relative;
  }
  .magnifier_img{
    top: 0px;
    left: 556px;
    width: 460px;
    height: 460px;
    position: absolute;
    display: none;
    overflow:hidden;
    z-index: 999;
  }
  .magnifier_img_img{
    width: 920px;
    height: 920px;
    position: absolute;
    top: 0px;
    left: 0px;
  }


  .detail_img_bottom{
    width: 71%;
    height: 100px;
    margin: 0 auto;
  }
  .swiper-slide img{
    width:100%;
    border:1px solid lightgray;
  }

  .left{
    width:50%;
    float:left;
  }

  .addr_tit li {
    float: left;
    margin-right: 10px;
    color: #005eac;
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
  .fangda{
    position: absolute;
    width: 200px;
    height: 200px;
    background: pink;
    opacity: 0.4;
    top: 0;
    display: none;
  }

</style>
