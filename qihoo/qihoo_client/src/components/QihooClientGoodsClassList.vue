<template>
  <!-- goodsClassList组件  (1)-->
  <div class="goodsClassList">
    <!-- goodsClassListDetail组件(2)-->
    <qihoo-client-goods-class-list-detail :allgoods="classgoods" v-for="classgoods in allgoods"></qihoo-client-goods-class-list-detail>
  </div>
</template>

<script>
    import QihooClientGoodsClassListDetail from "./QihooClientGoodsClassListDetail";
    export default {
      name: "QihooClientGoodsClassList",
      data(){
        return{
          allgoods:[]
        }
      },
      created(){
        fetch("http://localhost:9999/api/goodsclassify").then(response=>{
          response.json().then(data=>{
            this.allgoods = data.goodsdata;
          })
        })
        // $.get("http://localhost:3000/goods",function(data){
        //     console.log(data)
        // });
      },
      components: {QihooClientGoodsClassListDetail}
    }
</script>

<style scoped>

</style>
