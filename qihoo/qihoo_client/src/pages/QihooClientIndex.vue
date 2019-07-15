<template>
  <div>
      <a href="" class="header_title"></a>
      <qihoo-client-header></qihoo-client-header>
      <my-vue-swiper></my-vue-swiper>
      <qihoo-client-index-section></qihoo-client-index-section>
      <qihoo-client-goods-class-list></qihoo-client-goods-class-list>
      <qihoo-client-footer></qihoo-client-footer>
      <qihoo-client-back-top></qihoo-client-back-top>
  </div>
</template>
<script>
    import QihooClientHeader from "../components/QihooClientHeader.vue"
    import QihooClientFooter from "../components/QihooClientFooter.vue"
    import QihooClientBackTop from "../components/QihooClientBackTop.vue"
    import MyVueSwiper from "../components/QihooClientIndex/MyVueSwiper.vue";
    import QihooClientIndexSection from "../components/QihooClientIndex/QihooClientIndexSection";
    import QihooClientGoodsClassList from "../components/QihooClientGoodsClassList";
    export default {
        name: "QihooClientIndex",
        components: {
          QihooClientHeader,
          MyVueSwiper,
          QihooClientIndexSection,
          QihooClientGoodsClassList,
          QihooClientFooter,
          QihooClientBackTop
        }
    }
</script>
<style scoped>
  .header_title{
    display:block;
    width:100%;
    height:80px;
    background: url(../assets/images/header_title.jpg) no-repeat center center;
  }
</style>
