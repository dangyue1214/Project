<template>
  <section>
    <div class="section_content">
      <qihoo-client-index-section-count-down></qihoo-client-index-section-count-down>
      <!-- activityList组件 -->
      <qihoo-client-index-section-activity-list></qihoo-client-index-section-activity-list>
    </div>
  </section>
</template>
<script>
    import QihooClientIndexSectionActivityList from "./QihooClientIndexSectionActivityList";
    import QihooClientIndexSectionCountDown from "./QihooClientIndexSectionCountDown";
    export default {
        name: "QihooClientIndexSection",
      components: {QihooClientIndexSectionCountDown, QihooClientIndexSectionActivityList}
    }
</script>

<style scoped>
  section{
    width:100%;
    height:260px;
    background:url(../../assets/images/flashsale-bg.png) no-repeat center center;
    margin:20px 0;
  }
  .section_content{
    width:100%;
    box-sizing:border-box;
    padding:12px 55px 15px 100px;
  }
</style>
