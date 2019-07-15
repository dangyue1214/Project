<template>
  <div class="content_right">
    <div class="content_right_header">
      <img class="content_img_menu" src="../../assets/img/menu.png" alt="图片加载失败">
      <div class="content_right_header_text">
        <i class="icon iconfont icon-shouye"></i>
        <a href="goodslist.html">管理员表</a>
      </div>
    </div>
    <qihoo-admin-admin-manage-content-right-content></qihoo-admin-admin-manage-content-right-content>
  </div>
</template>

<script>
    import QihooAdminAdminManageContentRightContent from "./QihooAdminAdminManageContentRightContent";
    export default {
        name: "QihooAdminAdminManageContentRight",
      components: {QihooAdminAdminManageContentRightContent}
    }
</script>

<style scoped>

</style>
