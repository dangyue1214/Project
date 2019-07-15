<template>
  <li @click="getNavClassId(listdetail.classid)" class="goodsclass_title_li" >
    <a :href="listdetail.classid | hrefFilter">{{listdetail.classname}}</a>
    <ul class="goods_list_hide">
      <qihoo-client-header-nav-middle-list-detail-list-goods :detailgoods="detailgoods" :getGoodsId="getGoodsId" v-for="detailgoods in listdetail.products"></qihoo-client-header-nav-middle-list-detail-list-goods>
    </ul>
  </li>
</template>
<script>
    import QihooClientHeaderNavMiddleListDetailListGoods from "./QihooClientHeaderNavMiddleListDetailListGoods";
    export default {
      name: "QihooClientHeaderNavMiddleListDetail",
      filters:{
        hrefFilter(val){
          return "#/goodsClassify?"+val;
        }
      },
      props:{
        listdetail:{
          type:Object,
          required:true
        },
        getNavClassId:{
          type:Function
        },
        getGoodsId:{
          type:Function
        }
      },
      components: {QihooClientHeaderNavMiddleListDetailListGoods}
    }
</script>

<style scoped>
  .goodsclass_title_li{
    float:left;
    padding:0 20px;
  }
  .goodsclass_title_li a{
    line-height:38px;
    color:#323334;
  }
  .goodsclass_title_li:hover a{
    color:#23ac38;
  }
  .goodsclass_title_li:hover .goods_list_hide{
    display:block;
  }
  .goods_list_hide{
    position: absolute;
    left:55px;
    top:38px;
    width:1238px;
    display:none;
    background-color: white;
    padding:30px 0;
    border-top: 1px solid #dddddd;
    z-index: 10;
  }
</style>
