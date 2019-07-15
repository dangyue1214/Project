<template>
  <!-- goodsClassListDetailList组件（4）-->
  <li class="article_goodslist_li">
    <a :href="goodsInfo.goodsid | hrefFilter" class="article_goodslist_div">
      <img :src="goodsInfo.goodsimg1" alt="图片加载失败">
      <p class="article_goodslist_div_p1">{{goodsInfo.goodsname}}</p>
      <p class="article_goodslist_div_p2">￥<span>{{goodsInfo.goodsprice}}</span></p>
    </a>
  </li>
</template>

<script>
    export default {
        name: "QihooClientGoodsClassListDetailListGoods",
        props:{
          goodsInfo:{
            type:Object,
            required:true
          }
        },
        filters:{
          hrefFilter(val){
            return "#/goodsDetail?"+val;
          }
        },
    }
</script>

<style scoped>
  .article_goodslist_li{
    width:20%;
    box-sizing:border-box;
    padding:0 8px 10px;
  }
  .article_goodslist_div{
    display:block;
    width:100%;
    background:white;
    box-sizing:border-box;
    padding:30px 32px 10px;
  }
  .article_goodslist_div img{
    display: block;
    width:150px;
    height:150px;
    margin:0px auto 40px;
  }
  .article_goodslist_div_p1{
    width:100%;
    line-height:16px;
    -webkit-line-clamp:2;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:12px;
    color:#666666;
    text-align: center;
  }
  .article_goodslist_div_p2{
    font-size:16px;
    color:#f22031;
    text-align:center;
    line-height: 36px;
    font-weight: bold;
  }
</style>
