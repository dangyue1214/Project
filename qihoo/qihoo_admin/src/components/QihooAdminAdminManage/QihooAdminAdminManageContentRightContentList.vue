<template>
  <div class="goodslist_table_div">
    <div id="updateBox" class="updateBoxClass" v-show="isEditor">
      编号：<input class="goods_text"  type="text" readOnly="true" v-model="manage.manageid"/>*<span id="spanId"></span><br/>
      头像:<input class="goods_img"  type="file" /><br/>
      部门：<input class="goods_text" type="text" v-model="manage.department"/><br/>
      职位：<input class="goods_text" type="text" v-model="manage.job"/><br/>
      用户名:<input class="goods_text"  type="text" v-model="manage.managename"/><br/>
      手机号：<input class="goods_text" type="text" v-model="manage.managenumber"/><br/>
      密码：<input class="goods_text" type="text" v-model="manage.managepass"/><br/>
      <input class="save_btn"  value="保存" @click="changeSaveMan"/>
    </div>
    <div class="goodslist_table_div_content">
      <table class="table_data" id="getTableStr"  cellpadding="0">
        <tr class="table_tr_one">
          <td width="40"><input class="btn_checkbox_all" v-model="isAllSelect" @change="isSelectAllFun" type="checkbox"/></td>
          <td width="100">编号</td>
          <td width="136">头像</td>
          <td width="100">部门</td>
          <td width="140">职位</td>
          <td width="100">登录名</td>
          <td width="150">手机号</td>
          <td width="150">密码</td>
          <td width="180">操作</td>
        </tr>
        <QihooAdminAdminManageContentRightContentListTr :isSelectFun="isSelectFun" :isEditors = "isEditors" :deleteFun="deleteFun" :manages="manages" v-for="manages in allmanages"></QihooAdminAdminManageContentRightContentListTr>
      </table>
      <div class="goodslist_table_bottom">
        <p class="page_record_num">
          第<span class="num_from">1</span>到<span class="num_to">{{allmanages.length}}</span>条记录,共<span class="num_to">{{allmanages.length}}</span>条
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
    import QihooAdminAdminManageContentRightContentListTr from "./QihooAdminAdminManageContentRightContentListTr.vue";
    export default {
      props:{
        allmanages:{
          type:Array
        },
        deleteFun:{
          type:Function
        }
      },
      data(){
        return{
          isEditor:false,
          manage:{},
          isAllSelect:true
        }
      },
      methods:{
        isSelectAllFun(){
          if(this.isAllSelect){
            for(let i=0; i<this.allmanages.length; i++){
              this.allmanages[i].isSelect = true;
            }
          }else{
            for(let i=0; i<this.allmanages.length; i++){
              this.allmanages[i].isSelect = false;
            }
          }
        },
        isSelectFun(){
          this.isAllSelect = true;
          for(let i=0; i<this.allmanages.length; i++){
            if(this.allmanages[i].isSelect == false){
              this.isAllSelect = false;
            }
          }
        },
        changeSaveMan(){
          this.isEditor = false;
        },

        isEditors(id){
          for(let i=0; i<this.allmanages.length; i++){
            if(this.allmanages[i].manageid == id){
              this.manage = this.allmanages[i];
            }
          }
          this.isEditor = true;
        }
      },
      name: "QihooAdminAdminManageContentRightContentList",
      components: {QihooAdminAdminManageContentRightContentListTr}
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
    left:583px;
    top:200px;
    background:rgba(171,171,171,0.8);
    border:1px solid gray;
    width:400px;
    padding:20px;
  }
  .goods_text{
    width:380px;
    height:30px;
    margin:2px;
  }
  .goods_img{
    color:red;
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
    height:30px;
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
