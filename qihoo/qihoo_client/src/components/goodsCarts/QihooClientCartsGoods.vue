<template>
  <tr>
    <td class="m_img" @click="checkGoods">
      <img v-if="productsInfo.isselected" src="../../assets/img/gou.png" alt="" />
      <img v-else-if="!productsInfo.isselected" src="../../assets/img/checkbox.png" alt="" />
    </td>
    <td class="goodsDetailCommon">
      <a class="goods_img" :href="productsInfo.id | hrefFilter" >
        <img class="goods_img_img" :src="productsInfo.goodsimg1" alt=""/>
      </a>
      <a class="goods_con goods_img" :href="productsInfo.id | hrefFilter">
        <h3 class="goodsDetailCommon goodsname">{{productsInfo.goodsname}}</h3>
        <p></p>
      </a>
      <div class="goodsColor goods_img">颜色：<span>{{productsInfo.goodscolor}}</span></div>
    </td>
    <td class="goodsPriceCommon"><span>{{productsInfo.goodsprice | priceFilter}}</span></td>
    <td>
      <a href="javascript:void(0)" class="acl" @click="sub">-</a>
      <input class="count" type="text" value="1" v-model="productsInfo.goodscount"/>
      <a href="javascript:void(0)" class="acl" @click="add">+</a>
    </td>
    <td class="goodsPriceCommon"><span>{{totalPrice | priceFilter}}</span></td>
    <td><a href="javascript:void(0)" class="goodsDetailCommon" @click="deleteElem">删除</a></td>
  </tr>
</template>

<script>
export default {
  props: ["productsInfo", "checkSelAll", "calculate", "deleteItem"],
  methods: {
    sub(){
      if(this.productsInfo.goodscount>1){
        this.productsInfo.goodscount--;
      }
      this.calculate();
    },
    add(){
      this.productsInfo.goodscount++;
      this.calculate();
    },
    checkGoods(){
      if(this.productsInfo.isselected){
        this.productsInfo.isselected = false;
      }else{
        this.productsInfo.isselected = true;
      }
      this.checkSelAll();
      this.calculate();
    },
    deleteElem(){
      this.deleteItem(this.productsInfo.id);
    }
  },
  filters:{
    priceFilter(val){
      return "￥"+ val;
    },
    hrefFilter(val){
      return "#/goodsDetail?"+val;
    }
  },
  computed: {
    totalPrice: function(){
      return this.productsInfo.goodsprice * this.productsInfo.goodscount;
    }
  }
}
</script>

<style scoped>
  .m_img{
    padding-left:15px;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  .goodsDetailCommon {
    font-size: 12px;
    font-weight: 100;
    color: #566965;
  }
  .goodsPriceCommon {
    color: #140010;
    font-size: 12px;
  }
  td{
    padding: 18px 0;
    border: 1px solid #dedede;
    border-left: none;
    border-right: none;
  }
  .acl {
    border: 1px solid #dedede;
    width: 19px;
    float: left;
    text-align: center;
    height: 21px;
  }
  .count {
    float: left;
    width: 23px;
    text-align: center;
    height: 21px;
    outline: none;
    border: 1px solid #dedede;
    border-left: none;
    border-right: none;
  }
  .goods_img {
    margin-right: 10px;
    float: left;
  }
  .goods_img_img{
    width:100px;
    height:100px;
  }
</style>
