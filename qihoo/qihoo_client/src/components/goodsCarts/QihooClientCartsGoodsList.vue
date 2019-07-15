<template>
  <tbody>
    <qihoo-client-carts-goods v-for="products in goodsList" :productsInfo="products" :checkSelAll="checkSelAll" :calculate="calculate" :deleteItem="deleteItem"></qihoo-client-carts-goods>
  </tbody>
</template>
<script>
  import QihooClientCartsGoods from "./QihooClientCartsGoods.vue"
    export default {
        components:{
          QihooClientCartsGoods
            //有小组件再引入，import谁，引谁
        },
      props:{
        goodsList:{
          type:Array,
          require:true
        },
        checkSelAll: {
          type: Function,
          require: true
        },
        calculate: {
          type: Function,
          require: true
        },
        deleteItem: {
          type: Function,
          require: true
        }
      }
    }
</script>

<style scoped>

</style>
