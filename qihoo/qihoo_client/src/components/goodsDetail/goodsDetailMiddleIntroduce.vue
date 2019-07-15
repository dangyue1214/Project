<template>
  <div v-if="goodinfo" class="right">
    <!--名称-->
    <h3 class="goods_name">{{goodinfo.goodsname}}</h3>
    <p class="moreDeta font12">游泳级防水/京东物流/侧置摄像头/超长续航/九重定位/陌生来电拦截
      <a href="">更多360生态链产品，优惠享不停！全网比价！详情猛戳</a>
    </p>
    <!--价格-->
    <div class="price color">{{goodinfo.goodsprice | priceFilter}}</div>
    <!--地址-->
    <qihoo-client-carts-address class="color"></qihoo-client-carts-address>
    <!--颜色-->
    <div class="color font12 goodscolor">
      <span>颜色</span>
      <a href="">粉色</a>
    </div>
    <!--型号-->
    <div class="types color font12">
      <span>型号</span>
      <a href="">{{goodinfo.goodstype}}</a>
    </div>
    <!--数量-->
    <div v-if="paygoods" class="goodscount">
      <span class="space">数量</span>
      <a @click="sub" href="javascript:void(0)" class="acl floatL">-</a>
      <input class="count floatL" type="text" v-model="paygoods.count" @change="onChange"/>
      <a @click="add" href="javascript:void(0)" class="acl floatL">+</a>
    </div>
    <!--联系客服-->
    <div class="call font12">
      联系客服
      <a href=""><img src="" alt="" /></a>
    </div>
    <!--加购物车按钮-->
    <div class="addGoodsCarts">加入购物车</div>
    <!--售后-->
    <div class="afterSale font12">
      <span class="security">保障</span>
      <i class="bg_img1"></i>
      <span>满99元包邮</span>
      <i class="bg_img2"></i>
      <span>7天无理由退货</span>
      <i class="bg_img3"></i>
      <span>质量问题15天换货</span>
    </div>
  </div>
</template>

<script>

  import QihooClientCartsAddress from '../goodsCarts/QihooClientCartsAddress.vue'
  export default {
    props:["goodinfo", "goodsid"],
    data: function(){
      return {
        paygoods:{
          count:2
        }
      };
    },
    filters:{
      priceFilter(val){
        return "￥"+ val;
      }
    },
    methods: {
      sub(){
        if(this.paygoods.count>1){
          this.paygoods.count--;
        }
      },

      add(){
        if(this.paygoods.count < this.goodinfo.goodscount){
          this.paygoods.count++;
        }
      },

      onChange(){
        if(this.paygoods.count > this.goodinfo.goodscount){
          this.paygoods.count=this.goodinfo.goodscount
        }else if(this.paygoods.count<1){
          this.paygoods.count=1
        }
      }

    },
    computed:{

    },
    components:{
      QihooClientCartsAddress
    },
    name: "GoodsDetailMiddleIntroduce"
  }
</script>

<style >
  .afterSale {
    margin-bottom: 14px;
  }
  #pro_citys{
    /* margin-left: 497px; */
    margin-top: 21px;
    margin-bottom: -16px;
  }
  /*section*/
  section{
    width:100%;
  }
  .swiper-slide img{
    width:100%;
    border:1px solid lightgray;
  }

  .right{
    width:50%;
    float:left;
  }


  .addr_tit li {
    float: left;
    margin-right: 10px;
    color: #005eac;
  }
  .acl {
    height: 21px;
    border: 1px solid #dedede;
    width: 19px;
    float: left;
    text-align: center;
    line-height: 21px;
  }
  .count {
    float: left;
    width: 23px;
    text-align: center;
    height: 21px;
    outline: none;
    border: 1px solid #dedede;
    border-left: none;
    border-right: none;
  }
  .goodscount{
    overflow: hidden;
  }
  .goods_name{
    font-size:26px;
    color:#4b4233;
    font-weight:100;
  }
  .moreDeta{
    line-height:32px;
    color:#ee3439;
  }
  .font12{
    font-size:12px;
  }
  .price{
    margin-top: 50px;
    color: red;
    clolor: red;
    font-size: 30px;
  }
  .color a{
    border: 1px solid red;
    width: 38px;
    display: inline-block;
    line-height: 26px;
    height: 26px;
    text-align: center;
  }
  .security, .space, .color span{
    letter-spacing: 24px;
    margin-right: -18px;
  }
  .goodscount{
    margin-bottom: 30px;
  }
  .space{
    font-size:12px;
    float: left;
  }
  .types{
    margin: 10px 0px 34px 0px;
  }
  .addGoodsCarts{
    height: 40px;
    background: #FD532D;
    width: 180px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    margin: 40px 0px;
  }
  .call{
    width: 100px;
    height: 20px;
    line-height: 20px;
    background: url(../../assets/img/kf_logo.png) no-repeat 81px -34px;
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
  .goodscolor{
    margin-top: 30px;
  }


</style>
