<template>
  <div class="content">
    <qihoo-admin-content-aside></qihoo-admin-content-aside>
    <qihoo-admin-admin-manage-content-right></qihoo-admin-admin-manage-content-right>
  </div>
</template>

<script>
    import QihooAdminContentAside from "../QihooAdminContentAside.vue";
    import QihooAdminAdminManageContentRight from "./QihooAdminAdminManageContentRight.vue";
    export default {
        name: "QihooAdminAdminManageContent",
      components: {
          QihooAdminAdminManageContentRight,
          QihooAdminContentAside
        }
    }
</script>

<style scoped>

</style>
