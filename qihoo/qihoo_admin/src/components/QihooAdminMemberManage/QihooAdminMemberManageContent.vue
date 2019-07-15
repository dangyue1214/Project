<template>
  <div class="content">
    <qihoo-admin-content-aside></qihoo-admin-content-aside>
    <qihoo-admin-member-manage-content-right></qihoo-admin-member-manage-content-right>
  </div>
</template>

<script>
    import QihooAdminContentAside from "../QihooAdminContentAside";
    import QihooAdminMemberManageContentRight from "./QihooAdminMemberManageContentRight";
    export default {
        name: "QihooAdminMemberManageContent",
      components: {QihooAdminMemberManageContentRight, QihooAdminContentAside}
    }
</script>

<style scoped>

</style>
