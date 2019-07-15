<template>
  <div>
    <qihoo-admin-header></qihoo-admin-header>
    <qihoo-admin-member-manage-content></qihoo-admin-member-manage-content>
    <qihoo-admin-footer></qihoo-admin-footer>
  </div>
</template>

<script>
    import QihooAdminHeader from "../components/QihooAdminHeader";
    import QihooAdminFooter from "../components/QihooAdminFooter";
    import QihooAdminMemberManageContent from "../components/QihooAdminMemberManage/QihooAdminMemberManageContent";
    export default {
        name: "QihooAdminMemberManage",
      components: {QihooAdminHeader,QihooAdminMemberManageContent, QihooAdminFooter}
    }
</script>

<style scoped>
  div{
    width:100%;
  }
</style>
