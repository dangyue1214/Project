<template>
  <div>
    <qihoo-client-header :getGoodsId="getGoodsId"></qihoo-client-header>
    <goods-detail-middle :onegoodsInfor="onegoodsInfor" :onCurrentPic="onCurrentPic" :goodinfoImg="goodinfoImg"></goods-detail-middle>
    <QihooClientFooter></QihooClientFooter>
    <QihooClientBackTop></QihooClientBackTop>
  </div>
</template>

<script>
    import QihooClientHeader from '../components/QihooClientHeader.vue'
    import QihooClientBackTop from '../components/QihooClientBackTop.vue'
    import QihooClientFooter from '../components/QihooClientFooter.vue'
    import goodsDetailMiddle from '../components/goodsDetail/goodsDetailMiddle.vue'

    export default {
      data(){
        return{
          allgoodsInfor:[],
          onegoodsInfor:{},
          goodinfoImg:""
        }
      },
      methods:{
        onCurrentPic: function(cuur){
          this.goodinfoImg = cuur;
        },
        //当前页面nav点击  渲染该类型商品
        getGoodsId(a) {
          this.getgoodsinfo(a);
          this.goodinfoImg = this.onegoodsInfor.goodsimg1;
        },
        //页面加载出来
        getUrlGoodsId() {
          let b=window.location.href.split("?")[1];
          this.getgoodsinfo(b);
        },
        getgoodsinfo(id){
          for(var i=0; i<this.allgoodsInfor.length; i++){
            if(id==undefined){
              this.onegoodsInfor = this.allgoodsInfor[0];
            }else if(this.allgoodsInfor[i].goodsid==id){
              this.onegoodsInfor = this.allgoodsInfor[i];
            }
          }
        }
      },
      created(){
        fetch("http://localhost:9999/api/allgoods").then(response=>{
          response.json().then(data=>{
            this.allgoodsInfor=data.products;
            this.getUrlGoodsId();
            this.goodinfoImg = this.onegoodsInfor.goodsimg1;
          })
        })
      },
      components:{
        QihooClientHeader,
        QihooClientBackTop,
        QihooClientFooter,
        goodsDetailMiddle
      },
        name: "QihooClientGoodsDetail"
    }
</script>

<style scoped>

</style>
