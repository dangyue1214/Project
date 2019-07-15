<template>
  <div class="content_right">
    <div class="content_right_header">
      <img class="content_img_menu" src="../../assets/img/menu.png" alt="图片加载失败">
      <div class="content_right_header_text">
        <i class="icon iconfont icon-shouye"></i>
        <a href="goodslist.html">商品管理</a>
      </div>
    </div>
    <qihoo-admin-goods-manage-content-right-add v-show="state==1" :changeList="changeList"></qihoo-admin-goods-manage-content-right-add>
    <qihoo-admin-goods-manage-content-right-content v-show="state==2" :changeAdd="changeAdd" :changeList="changeList"></qihoo-admin-goods-manage-content-right-content>
  </div>
</template>
<script>
    import QihooAdminGoodsManageContentRightContent from "./QihooAdminGoodsManageContentRightContent";
    import QihooAdminGoodsManageContentRightAdd from "./QihooAdminGoodsManageContentRightAdd";
    export default {
      name: "QihooAdminGoodsManageContentRight",
      data(){
        return{
          state:2,
        }
      },
      methods:{
          changeAdd(){
            this.state=1;
          },
          changeList(){
            this.state=2;
          }
      },
      created(){
      },
      components: {
        QihooAdminGoodsManageContentRightAdd,
        QihooAdminGoodsManageContentRightContent
      }
    }
</script>

<style scoped>

</style>
