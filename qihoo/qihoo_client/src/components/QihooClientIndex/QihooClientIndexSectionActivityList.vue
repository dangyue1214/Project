<template>
  <!-- activityList组件 -->
  <ul class="section_right">
    <!-- activityListDetail组件 -->
    <qihoo-client-index-section-activity-list-detail  :goodsInfo="goods" v-for="goods in salesgoods"></qihoo-client-index-section-activity-list-detail>
  </ul>
</template>

<script>
    import QihooClientIndexSectionActivityListDetail from "./QihooClientIndexSectionActivityListDetail";
    export default {
        data(){
          return{
            salesgoods:[]
          }
        },
        created(){
          fetch("http://localhost:9999/api/activitygoods").then(response=>{
            response.json().then(data=>{
              this.salesgoods = data.salesgoods;
            })
          })
        },
        name: "QihooClientIndexSectionActivityList",
        components: {QihooClientIndexSectionActivityListDetail}
    }
</script>

<style scoped>
  .section_right{
    float:right;
  }
</style>
