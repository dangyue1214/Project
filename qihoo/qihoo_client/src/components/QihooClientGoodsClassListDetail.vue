<template>
  <!-- goodsClassListDetail组件（2）-->
  <article>
    <p class="article_title">{{allgoods.classname}}</p>
    <!-- goodsClassListDetailList组件（3）-->
    <qihoo-client-goods-class-list-detail-list :productlist="allgoods.products"></qihoo-client-goods-class-list-detail-list>
  </article>
</template>

<script>
    import QihooClientGoodsClassListDetailList from "./QihooClientGoodsClassListDetailList";
    export default {
      name: "QihooClientGoodsClassListDetail",
      props:{
        allgoods:{
          type:Object,
          required:true
        }
      },
      components: {QihooClientGoodsClassListDetailList}
    }
</script>

<style scoped>
  article{
    width:100%;
    box-sizing:border-box;
    padding:0 54px 20px;
    background:#f5f5f5;
  }
  .article_title{
    width:100%;
    line-height:78px;
    color:#333333;
    font-size:24px;
    /*box-sizing:border-box;*/
  }
</style>
