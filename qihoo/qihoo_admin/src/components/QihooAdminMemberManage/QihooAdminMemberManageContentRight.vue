<template>
  <div class="content_right">
    <div class="content_right_header">
      <img class="content_img_menu" src="../../assets/img/menu.png" alt="图片加载失败">
      <div class="content_right_header_text">
        <i class="icon iconfont icon-shouye"></i>
        <a href="goodslist.html">会员管理</a>
      </div>
    </div>
    <qihoo-admin-member-manage-content-right-add v-show="temp==1" :change="change"></qihoo-admin-member-manage-content-right-add>
    <qihoo-admin-member-manage-content-right-content v-show="temp==0" :change="change"></qihoo-admin-member-manage-content-right-content>
  </div>
</template>
<script>
    import QihooAdminMemberManageContentRightContent from "./QihooAdminMemberManageContentRightContent";
    import QihooAdminMemberManageContentRightAdd from "./QihooAdminMemberManageContentRightAdd";
    export default {
        name: "QihooAdminMemberManageContentRight",
      components: {QihooAdminMemberManageContentRightAdd, QihooAdminMemberManageContentRightContent},
      data(){
          return{
            temp:0
        }
      },
      methods:{
          change(i){
            this.temp=i
          }
      }
    }
</script>

<style scoped>

</style>
