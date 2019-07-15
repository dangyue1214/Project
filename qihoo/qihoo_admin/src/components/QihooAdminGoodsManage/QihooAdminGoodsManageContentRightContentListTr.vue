<template>
  <tr>
    <td><input class="btn_checkbox" type="checkbox" v-model="goods.checkedOne" @change="selectOneInput(goods.checkedOne)"/></td>
    <td>{{goods.goodsid}}</td>
    <td>{{goods.goodstype}}</td>
    <td><img class="goods_img" :src="goods.goodsimg1"/></td>
    <td><a href="#">{{goods.goodsname}}</a></td>
    <td>{{goods.goodsprice | priceFilter}}</td>
    <td>{{goods.goodscount}}</td>
    <td class="click_td">
      <a class="update_ico" id="update_btn"><img src="../../assets/img/table_btn_2.png" alt="图片加载失败" @click="changeT(goods)"></a>
      <a class="delete_ico" id="delete_btn"><img src="../../assets/img/table_btn_3.png" alt="图片加载失败" @click="deleteT"></a>
    </td>
  </tr>
</template>
<script>
    export default {
      props:{
        goods:{
          type:Object
        },
        changeT:{
          type:Function
        },
        deleteT: {
          type: Function
        },
        selectOneInput:{
          type: Function
        }
      },
      filters:{
        priceFilter(val){
          return "￥"+ val;
        }
      },
      name: "QihooAdminGoodsManageContentRightContentListTr"
    }
</script>

<style scoped>
  tr{
    height:30px;
    table-layout:fixed;
    border-collapse: collapse;
    font-size:12px;
    color:#393939;
  }
  tr:hover{
    background-color:#F5F5F5;
  }
  tr a{
    color:#69a3d5;
    text-decoration: underline;
  }
  tr td{
    text-align: center;
    vertical-align:middle;
    border:1px solid #dddddd;
  }
  .goods_img{
    width:20px;
    height:20px;
    margin:5px auto;
  }
  .click_td a{
    margin:0 10px;
  }
  /*.btn_checkbox{*/
    /*display:block;*/
    /*margin:0 auto;*/
    /*width:18px;*/
    /*height:18px;*/
  /*}*/
</style>
