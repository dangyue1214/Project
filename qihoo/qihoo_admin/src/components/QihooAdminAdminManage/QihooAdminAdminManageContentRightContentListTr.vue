<template>
  <tr>
    <td><input class="btn_checkbox" type="checkbox" v-model="manages.isSelect" @change="isSelectFun"/></td>   <!--复选框-->
    <td>{{manages.manageid}}</td>   <!--编号-->
    <td><img class="goods_img" :src="manages.manageImg"/></td>     <!--图片-->
    <td>{{manages.department}}</td>                        <!--部门-->
    <td>{{manages.job}}</td>                        <!--角色-->
    <td><a href="#">{{manages.managename}}</a></td>     <!--登录名-->
    <td>{{manages.managenumber}}</td>                          <!--手机-->
    <td>{{manages.managepass}}</td>           <!--密码-->
    <td class="click_td">          <!--操作-->
      <a href="#" class="update_ico" id="update_btn" @click="isEditors(manages.manageid)"><img src="../../assets/img/table_btn_2.png" alt="图片加载失败"></a>
      <a href="#" class="delete_ico" id="delete_btn" @click="deleteFun(manages.manageid)"><img src="../../assets/img/table_btn_3.png" alt="图片加载失败"></a>
    </td>
  </tr>
</template>
<script>
    export default {
      props:{
        manages:{
          type:Object
        },
        isEditors:{
          type:Function
        },
        isSelectFun(){
          type:Function
        },
        deleteFun(){
          type:Function
        }
      },

      filters:{
        // hrefFilter(val){
        //   return "#/goodsDetail?"+val;
        // },
        priceFilter(val){
          return "￥"+ val;
        }
      },
        name: "QihooAdminAdminManageContentRightContentListTr"
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
    width:38px;
    height:38px;
    margin:5px auto;
    border-radius: 50%;
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
