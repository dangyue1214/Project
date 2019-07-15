<template>
  <tr>
    <td><input class="btn_checkbox" type="checkbox" v-model="user.checkedaOne" @change="inputOne(user.checkedaOne)"/></td>
    <td>{{user.userid}}</td>
    <td><img class="goods_img" :src="user.userImg"/></td>
    <td>{{user.username}}</td>
    <td>{{user.usernumber}}</td>
    <td>{{user.userpass}}</td>
    <td class="click_td">
      <a @click="changed(user)" style="cursor:pointer" class="update_ico" id="update_btn"><img src="../../assets/img/table_btn_2.png" alt="图片加载失败"></a>
      <a @click="del" class="delete_ico" id="delete_btn"><img src="../../assets/img/table_btn_3.png" alt="图片加载失败"></a>
    </td>
  </tr>
</template>

<script>
    export default {
      props:{
        user:{
          type:Object
        },
        changed:{
          type:Function
        },
        del:{},
        inputOne:{}

      },
        name: "QihooAdminMemberManageContentRightContentListTr"
    }
</script>

<style scoped>
  tr{
    height:80px;
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
    width:50px;
    height:50px;
    margin:5px auto;
    border-radius:50%;
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
