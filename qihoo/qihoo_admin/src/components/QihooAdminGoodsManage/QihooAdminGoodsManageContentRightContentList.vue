<template>
  <div class="goodslist_table_div">
    <div id="updateBox" class="updateBoxClass" v-show="a==1">
        产品编号：<input class="goods_text"  type="text" readOnly="true" v-model="updateGoods.goodsid"/>*<span id="spanId"></span><br/>
        产品类别:<input class="goods_text"  type="text" v-model="updateGoods.goodstype"/><br/>
        上传图片:<br/>
        <input class="goods_img"  type="file" /><br/>
        产品名称：<input class="goods_text" type="text" v-model="updateGoods.goodsname"/><br/>
        价格(￥)：<input class="goods_text" type="text" v-model="updateGoods.goodsprice"/><br/>
        库存数量：<input class="goods_text" type="text" v-model="updateGoods.goodscount"/><br/>
        <input class="save_btn"  value="保存" @click="changeU"/>
    </div>
    <div class="goodslist_table_div_content">
      <table class="table_data" id="getTableStr"  cellpadding="0">
        <tr class="table_tr_one">
          <td width="40"><input class="btn_checkbox_all" type="checkbox" v-model="data.checkedAll" @change="selectAllInput"/></td>
          <td width="50">产品编号</td>
          <td width="80">产品类别</td>
          <td width="40">商品</td>
          <td width="578">产品名称</td>
          <td width="70">价格</td>
          <td width="80">库存数量</td>
          <td width="160">操作</td>
        </tr>
        <QihooAdminGoodsManageContentRightContentListTr :goods="goods" v-for="goods in goodsInfor" :changeT="changeT" :deleteT="deleteT"  :selectOneInput="selectOneInput"></QihooAdminGoodsManageContentRightContentListTr>
      </table>
      <div class="goodslist_table_bottom">
        <p class="page_record_num">
          第<span class="num_from">{{startNum}}</span>到<span class="num_to">{{goodsInfor.length}}</span>条记录,共<span class="num_to">{{goodsInfor.length}}</span>条
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
    import QihooAdminGoodsManageContentRightContentListTr from "./QihooAdminGoodsManageContentRightContentListTr";
    export default {
        name: "QihooAdminGoodsManageContentRightContentList",
        data(){
         return{
           updateGoods:{},
           //修改框状态（0为隐藏，1为显示）
           a:0,
         }
        },
      methods:{
        changeU(){
          this.a=0
        },
        changeT(goods){
          this.updateGoods=goods;
          this.a=1
        },
        deleteT(){
          window.confirm("确认要删除此商品吗")
        }
      },
        props:{
          startNum:{},
          goodsInfor:{
            type:Array
          },
          data:{},
          selectAllInput:{
            type:Function
          },
          selectOneInput:{
            type:Function
          }
        },
        components: {QihooAdminGoodsManageContentRightContentListTr}
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
    left:570px;
    top:220px;
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
