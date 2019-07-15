<template>
  <!-- goodsClassListDetailList组件（3）-->
  <ul class="article_goodslist_ul">
    <!-- goodsClassListDetailList组件（4）-->
    <qihoo-client-goods-class-list-detail-list-goods :goodsInfo="goodsInfo" v-for="goodsInfo in productlist"></qihoo-client-goods-class-list-detail-list-goods>
  </ul>
</template>

<script>
    import QihooClientGoodsClassListDetailListGoods from "./QihooClientGoodsClassListDetailListGoods";
    export default {
      name: "QihooClientGoodsClassListDetailList",
      props:{
        productlist:{
          type:Array,
          required:true
        }
      },
      components: {QihooClientGoodsClassListDetailListGoods}
    }
</script>

<style scoped>
  .article_goodslist_ul{
    height:100%;
    width:100%;
    display:flex;
    flex-wrap:wrap;
  }
</style>
