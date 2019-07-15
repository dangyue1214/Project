<template>
  <a :href="detailgoods.goodsid | hrefFilter" @click="getGoodsId(detailgoods.goodsid)">
      <div class="goodsdetail_img_box">
        <img :src="detailgoods.goodsimg1" alt="图片加载失败">
      </div>
      <p>{{detailgoods.goodsname}}</p>
      <span>{{detailgoods.goodsprice | priceFilter}}</span>
  </a>
</template>
<script>
    export default {
      name: "QihooClientHeaderNavMiddleListDetailListGoods",
      props:{
        detailgoods:{
          type:Object,
          required:true
        },
        getGoodsId:{
          type:Function,
        }
      },
      filters:{
        hrefFilter(val){
          return "#/goodsDetail?"+val;
        },
        priceFilter(val){
          return "￥"+ val;
        }
      },
    }
</script>

<style scoped>
a{
    float:left;
    text-align: center;
    font-size:12px;
    display:block;
  }
  .goodsdetail_img_box{
    padding:0 42px 10px;
    border-right:1px solid #e1e1e1;
  }
  .goods_list_hide li:last-child .goodsdetail_img_box{
    border:none;
  }
  .goodsdetail_img_box img{
    width:120px;
    height:120px;
  }
p{
    margin:0 auto;
    width:150px;
    padding-right:2px;
    line-height:20px;
    -webkit-line-clamp:2;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color:#232426;
    text-align: center;
  }
span{
    line-height:21px;
    color:#ee4a25;
  }
</style>
