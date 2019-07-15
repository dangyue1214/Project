<template>
  <div class="goodslist_table_div">
    <div id="updateBox" class="updateBoxClass" v-show="dis==1">
      会员编号：<input class="goods_text"  type="text" readOnly="true" v-model="presons.userid"/>*<span id="spanId"></span><br/>
      会员头像:<input class="goods_img"  type="file" :src="presons.userImg"/><br/>
      会员名称：<input class="goods_text" type="text" v-model="presons.username"/><br/>
      会员手机号：<input class="goods_text" type="text" v-model="presons.usernumber"/><br/>
      会员密码：<input class="goods_text" type="text" v-model="presons.userpass"/><br/>
      <input class="save_btn"  value="保存" @click="changee" style="cursor:pointer;"/>
    </div>
    <div class="goodslist_table_div_content">
      <table class="table_data" id="getTableStr" cellpadding="0">
        <tr class="table_tr_one">
          <td width="80"><input class="btn_checkbox_all" type="checkbox" v-model="data.checkedALL" @change="inputAll" /></td>
          <td width="160">会员编号</td>
          <td width="175">会员头像</td>
          <td width="160">会员名称</td>
          <td width="160">会员手机号</td>
          <td width="165">会员密码</td>
          <td width="200">操作</td>
        </tr>
        <qihoo-admin-member-manage-content-right-content-list-tr :inputOne="inputOne" :del="del" :user="user" v-for="user in userselect" :changed="changed" :userselect="userselect"></qihoo-admin-member-manage-content-right-content-list-tr>
      </table>
      <div class="goodslist_table_bottom">
        <p class="page_record_num">
          第<span class="num_from">{{num}}</span>到<span class="num_to">{{userselect.length}}</span>条记录,共<span class="num_to">{{userselect.length}}</span>条
        </p>
        <div class="page_change">
          <a href="#">上一页</a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">下一页</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import QihooAdminMemberManageContentRightContentListTr from "./QihooAdminMemberManageContentRightContentListTr"
    export default {
      components: {QihooAdminMemberManageContentRightContentListTr},
      props:{
        userselect:{
          type:Array
        },
        num:{},
        inputAll:{},
        data:{},
        inputOne:{}
      },
      data(){
        return{
          dis:0,
          presons:{},
        }
      },
      methods:{
        changee(){
          this.dis=0
        },
        changed(preson){
          this.presons=preson;
          this.dis=1
        },
        del(){
          confirm("你确定删除吗？")

        }

      },
        name: "QihooAdminMemberManageContentRightContentList"
    }
</script>

<style scoped>
  .goodslist_table_div{
    position:relative;
    flex:1;
    padding:10px;
    overflow-x:scroll;
    overflow-y:scroll;
    display:-webkit-flex;
  }
  .updateBoxClass{
    position:fixed;
    left:600px;
    top:244px;
    background:rgba(171,171,171,0.8);
    border:1px solid gray;
    width:400px;
    padding:20px;
  }
  .goods_img{
    color:red;
  }
  .goods_text{
    width:380px;
    height:30px;
    margin:2px;
  }
  .updateBoxClass .save_btn{
    width:80px;
    height:30px;
    margin:10px 165px 0;
    border:none;
    color:white;
    text-align:center;
    font-size:14px;
    border-radius:5px;
    background:#ffb752;
  }

  .goodslist_table_div_content{
    -webkit-flex-shrink:0;
  }
  .goodslist_table_bottom{
    -webkit-box-sizing:border-box;
    padding:0 20px;
    display:-webkit-flex;
    -webkit-justify-content:space-between;
    font-size: 14px;
    line-height:52px;
    color:#393939;
  }
  .page_record_num span{
    padding:0 5px;
  }
  .page_change{
    display:-webkit-flex;
    -webkit-align-items:center;
  }
  .page_change a{
    display: block;
    height:30px;
    padding:0 10px;
    color:#2283c5;
    border:1px solid #dddddd;
    border-left:none;
    line-height:30px;
  }
  .page_change a:nth-child(1){
    color:#999999;
    border-left:1px solid #dddddd;
  }
  .page_change a:nth-child(2){
    color:white;
    background-color: #6faed9;
  }
  /*//------------------------------------*/
  .table_data{
    table-layout:fixed;
    border-collapse: collapse;
    font-size:12px;
    color:#393939;

  }
  .table_data a{
    color:#69a3d5;
    text-decoration: underline;
  }
  .table_data .table_tr_one{
    background-color:#F5F5F5;
    color:#307ecc;
    font-weight: bold;
  }
  .table_data tr{
    height:80px;
  }
  .table_data tr:hover{
    background-color:#F5F5F5;
  }
  .table_data td{
    text-align: center;
    vertical-align:middle;
    border:1px solid #dddddd;
  }
  .click_td a{
    margin:0 10px;
  }
  /*.btn_checkbox_all{*/
    /*display:block;*/
    /*margin:0 auto;*/
    /*width:18px;*/
    /*height:18px;*/
  /*}*/
</style>
