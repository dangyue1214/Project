<template>
  <div>
    <qihoo-admin-header></qihoo-admin-header>
    <qihoo-admin-goods-manage-content></qihoo-admin-goods-manage-content>
    <qihoo-admin-footer></qihoo-admin-footer>
  </div>
</template>

<script>
    import QihooAdminHeader from "../components/QihooAdminHeader";
    import QihooAdminGoodsManageContent from "../components/QihooAdminGoodsManage/QihooAdminGoodsManageContent";
    import QihooAdminFooter from "../components/QihooAdminFooter";
    export default {
        name: "QihooAdminGoodsManage",
      components: {
          QihooAdminFooter,
          QihooAdminGoodsManageContent,
          QihooAdminHeader
        }
    }
</script>

<style scoped>
div{
  width:100%;
}
</style>
