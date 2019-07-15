<template>
  <div class="content">
    <qihoo-admin-content-aside></qihoo-admin-content-aside>
    <qihoo-admin-goods-manage-content-right></qihoo-admin-goods-manage-content-right>
  </div>
</template>

<script>
    import QihooAdminContentAside from "../QihooAdminContentAside";
    import QihooAdminGoodsManageContentRight from "./QihooAdminGoodsManageContentRight";
    export default {
        name: "QihooAdminGoodsManageContent",
      components: {
          QihooAdminGoodsManageContentRight,
          QihooAdminContentAside
        }
    }
</script>

<style scoped>

</style>
