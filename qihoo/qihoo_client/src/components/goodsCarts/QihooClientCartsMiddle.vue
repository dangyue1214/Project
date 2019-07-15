<template>
  <section>
    <div class="goodsCarts_tit">我的购物车</div>
    <!-- 组件地址 -->
    <div class="addr">
      <qihoo-client-carts-address ></qihoo-client-carts-address>
    </div>
    <div class="goodsCarts_con">
      <table class="table">
        <thead>
        <tr class="goodsDetailCommon headColor">
          <td>
            <span class="allCheck" @click="selectAll">
              <img v-if="isSelectedAll" src="../../assets/img/gou.png" alt=""/>
              <img v-else src="../../assets/img/checkbox.png" alt=""/>
            </span>
            <span>全选</span>
          </td>
          <td class="goodsDetailCommon">商品</td>
          <td class="goodsDetailCommon">单价</td>
          <td class="goodsDetailCommon">数量</td>
          <td class="goodsDetailCommon">小计</td>
          <td class="goodsDetailCommon">操作</td>
        </tr>
        </thead>
        <!--商品列表组件-->
        <qihoo-client-carts-goods-list v-if="goodscartInfo!==undefined" :goodsList="goodscartInfo" :checkSelAll="checkSelectedAll" :calculate="calculate" :deleteItem="deleteItem"></qihoo-client-carts-goods-list>
        <tfoot></tfoot>
      </table>
      <div class="totalMoney">
        <div class="computed">
          <div class="productCount font14 fontColor floatsty">已选择<span class="font14 fontColor fontSizeori">{{selectCount}}</span>种产品</div>
          <div class="price floatsty">
            <p  class="font14 fontColor total">总价：<span class="fontSizeori fontweight">{{totalPrice | currency("￥")}}</span></p>
          </div>
          <div class="computedcla font14 fontColor floatsty" :style="color | bgColor">去结算</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import QihooClientCartsGoodsList from "./QihooClientCartsGoodsList.vue"
  import QihooClientCartsAddress from "./QihooClientCartsAddress.vue"
    export default {
      data(){
        return{
          datas:[],
          goodscartInfo:[],
          str:"17719676740",
          isSelectedAll: false,
          selectCount: 0,
          totalPrice: 0,
          color:"#E5E5E5"
        }
      },
      created(){
        fetch("http://localhost:9999/api/cartsgoods").then(response=>{
          response.json().then(data=>{
            this.datas = data.goodscart;
            this.getCookie();
            this.getgoodscartInfo();
            this.checkSelectedAll();
            this.calculate();
          })
        })
      },
      methods:{
        getCookie(){
          let str=document.cookie;
          let arr = str.split(";");
          for(let i in arr){
            if(arr[i].indexOf("usernumber=")==0){
              let arrnew = arr[i].split("=");
              this.str=arrnew[1];
            }
          }
        },
        getgoodscartInfo(){
          for(var i=0; i<this.datas.length; i++){
              if(this.datas[i].usernumber == this.str){
                this.goodscartInfo = this.datas[i].usergoodsInfo;

              }
          }
          console.dir(this.goodscartInfo);
        },
        checkSelectedAll(){
          if(this.goodscartInfo){
            this.isSelectedAll = true;
            for(var i=0; i<this.goodscartInfo.length; i++){
              if(!this.goodscartInfo[i].isselected){
                this.isSelectedAll = false;
                break;
              }
            }
          }
        },
        selectAll(){
          if(this.isSelectedAll){
            for(var i=0; i<this.goodscartInfo.length; i++){
              this.goodscartInfo[i].isselected = false;
            }
            this.isSelectedAll = false;
          }else{
            for(var i=0; i<this.goodscartInfo.length; i++){
              this.goodscartInfo[i].isselected = true;
            }
            this.isSelectedAll = true;
          }
          this.calculate();
        },
        calculate: function(){
          var totalPrice = 0;
          var count = 0;
          for(var i=0; i<this.goodscartInfo.length; i++){
            var goodsInfo = this.goodscartInfo[i];

            if(goodsInfo.isselected){
              totalPrice += goodsInfo.goodsprice * goodsInfo.goodscount;
              count++;
            }
          }
          this.totalPrice = totalPrice;
          this.selectCount = count;
         if(this.totalPrice>0){
            this.color="#b42525";
          }else{
           this.color="#E5E5E5";
         }
        },

        deleteItem: function(id){
          var newProducts = [];
          for(var i=0; i<this.goodscartInfo.length; i++){
            var goodsInfo = this.goodscartInfo[i];
            if(goodsInfo.id != id){
              newProducts.push(goodsInfo);
            }
          }
          this.goodscartInfo = newProducts;
          this.checkSelectedAll();
          this.calculate();
        }
      },

      filters:{
        //背景色设置
        bgColor(val){
          return "background:"+val+";";
        }
      },

      components:{
        QihooClientCartsGoodsList,
        QihooClientCartsAddress
      }
    }
</script>

<style scoped>
  /*CSS Document*/
  /*section*/
  .addr{
    width:100%;
    padding-left:18px;
  }
  section{
    width:80%;
    margin: 20px auto;
    border: 1px solid #dedede;
  }
  .goodsCarts_con {
    overflow: hidden;
  }
  .goodsCarts_tit{
    width:100%;
    box-sizing: border-box;
    padding:16px 20px;
    font-size:18px;
    color:#140010;
    font-family: "宋体";
    border-bottom: 1px solid #dedede;
  }
  .font14 {
    font-size: 14px;
  }
  .fontColor{
    color: rgb(102, 102, 102);
  }
  .fontSizeori{
    color: #FF8200;
  }
  .fontweight{
    font-weight:600;
  }
  .goodsCarts_addr{
    position: relative;
    float: right;
    padding: 18px;

    width: 152px;
    color: #566965;
    margin-bottom: -14px;
  }
  .goodsCarts_con{
    box-sizing: border-box;
    padding:18px;
    width:100%;
  }
  .goodsCarts_con .table{
    width:100%;
    border-collapse: collapse;
    border: 1px solid #dedede;
  }


  .address{
    padding: 10px;
    border: 1px solid gray;
    right: 0;
    width: 370px;
    position: absolute;
    float: right;
    display: none;
  }
  .addr_con{
    overflow: hidden;
  }
  .addr_detail{

  }
  .addr_detail a{
    color:#000;
    height:30px;
    line-height:30px;
    font-size:12px;
    padding: 5px;
  }
  .addr_tit{
    float: right;
  }
  .addr_tit li {
    margin-left: 7px;
    float: left;
  }
  .addr_con li {
    float: left;
    margin-left: 6px;
  }
  .count{
    float: left;
    width: 23px;
    text-align: center;
    height: 21px;
    outline: none;
    border: 1px solid #dedede;
    border-left: none;
    border-right: none;
  }
  .acl{
    border: 1px solid #dedede;
    width: 19px;
    float: left;
    text-align: center;
    line-height: 21px;
    height: 21px;
  }
  .goodsDetailCommon{
    font-size: 12px;
    font-weight: 100;
    color: #566965;
  }
  .table td {
    padding: 18px 0;
    border: 1px solid #dedede;
    border-left: none;
    border-right: none;
    padding: 18px 14px;
  }
  .goods_img{
    margin-right: 10px;
    float: left;
  }
  .goodsColor{
    vertical-align: top;
  }
  .headColor{
    background-color: #F9FAFB;
    height: 38px;
  }
  .goodsPriceCommon{
    color: #140010;
    font-size:12px;
  }
  .goods_con .goodsname{
    width: 266px;
  }
  .allCheck{
    margin-right: 4px;
    float: left;
  }
  .computed{
    float:right;
  }
  .floatsty{
    float:left;
  }
  .computedcla{
    height: 50px;
    background: #E5E5E5;
    width: 150px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    margin-left: 40px;
  }
  .total{
    padding-left: 10px;
  }
  .productCount{
    margin-right: 55px;
  }
  .totalMoney{
    overflow: hidden;
    border: 1px solid #dedede;
    border-top: none;
  }
</style>
