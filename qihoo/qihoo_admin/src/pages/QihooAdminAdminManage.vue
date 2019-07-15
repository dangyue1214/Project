<template>
  <div>
    <qihoo-admin-header></qihoo-admin-header>
    <qihoo-admin-admin-manage-content></qihoo-admin-admin-manage-content>
    <qihoo-admin-footer></qihoo-admin-footer>
  </div>
</template>
<script>
    import QihooAdminFooter from "../components/QihooAdminFooter";
    import QihooAdminHeader from "../components/QihooAdminHeader";
    import QihooAdminAdminManageContent from "../components/QihooAdminAdminManage/QihooAdminAdminManageContent";
    export default {
        name: "QihooAdminAdminManage",
      components: {
        QihooAdminAdminManageContent,
          QihooAdminFooter,
          QihooAdminHeader
        }
    }
</script>

<style scoped>

</style>
