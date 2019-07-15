<template>
  <!-- activityListDetail组件 -->
  <li>
    <img :src="goodsInfo.goodsimg" alt="图片加载失败"/>
    <p>{{goodsInfo.goodsname}}</p>
    <span class="price_1">{{goodsInfo.goodsprice1 | priceFilter }}</span><span class="price_2">{{goodsInfo.goodsprice2 | priceFilter}}</span>
  </li>
</template>
<script>
    export default {
        props:{
          goodsInfo:{
            type:Object,
            required:true
          }
        },
        filters:{
          priceFilter(val){
            return "￥"+ val;
          }
        },
        name: "QihooClientIndexSectionActivityListDetail"
    }
</script>
<style scoped>
  li{
    float:left;
    text-align:center;
    margin-right:15px;
    padding:15px 16px;
    background:white;
  }
  li img{
    width:120px;
    height:120px;
  }
  li p{
    margin-top: 10px;
    width:160px;
    line-height:20px;
    -webkit-line-clamp:2;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:12px;
    color:#666666;
    text-align: center;
  }
  li span{
    line-height: 33px;
  }
  .price_1{
    font-size:16px;
    font-weight: bold;
    color:#f10215;
    margin-right:2px;
  }
  .price_2{
    font-size:12px;
    color:#999999;
    text-decoration: line-through;
  }
</style>
