<template>
    <div>
      <a class="logo_a" href="#/">
        <img src="../assets/images/i360logo.png" alt="图片加载失败">
      </a>
      <qihoo-client-carts-middle></qihoo-client-carts-middle>
      <qihoo-client-footer></qihoo-client-footer>
      <qihoo-client-back-top></qihoo-client-back-top>
    </div>
</template>

<script>
  import QihooClientCartsMiddle from "../components/goodsCarts/QihooClientCartsMiddle.vue"
  import QihooClientBackTop from "../components/QihooClientBackTop.vue"
  import QihooClientFooter from "../components/QihooClientFooter.vue"

  export default {
      components:{
        QihooClientCartsMiddle,
          QihooClientBackTop,
          QihooClientFooter
      }
    }
</script>

<style scoped>
  .logo_a img{
    margin-top:40px;
    margin-left:130px;
    width:150px;
    height:40px;
  }
</style>
