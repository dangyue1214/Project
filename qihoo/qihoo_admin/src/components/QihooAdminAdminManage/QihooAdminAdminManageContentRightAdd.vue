<template>
  <div class="content_right_content">
    <form id="submitId" class="form_div">
      产品编号：<input class="goodsname_text" id="goodsId" type="text" name="goodsid"/>*<span id="spanId"></span><br/>
      产品类别:<input class="goodsname_text"  type="text" name="goodsclass"/><br/>
      产品名称：<input class="goodsname_text" type="text" name="goodsname"/><br/>
      原价格：<input class="goodsname_text" type="text" name="goodsprice1"/><br/>
      现价：<input class="goodsname_text" type="text" name="goodsprice2"/><br/>
      库存数量：<input class="goodsname_text" type="text" name="goodscount"/><br/>
      所属地区/国家:<input class="goodsname_text" type="text" name="goodscountry"/><br/>
      <input class="save_btn" value="保存" @click="savaManage"/>
    </form>
  </div>
</template>

<script>
    export default{
      props:{
        savaManage:{
          type:Function
        }
      },
      name: "QihooAdminAdminManageContentRightAdd"
    }
</script>

<style scoped>
  .content_right_content{
    width:100%;
    background: white;
    flex:1;
    overflow-y:scroll;
    -webkit-box-sizing:border-box;
    padding:0 16px;
  }
  .form_div{
    border:1px solid #d5d5d5;
    margin:15px;
    padding:30px;
  }
  .goodsname_text{
    margin:15px 15px;
    border:1px solid #d5d5d5;
    height:26px;
    color:#757575;
    outline:none;
  }
  .save_btn{
    margin:30px 100px;
    width:100px;
    height:36px;
    border:none;
    color:white;
    font-size:14px;
    text-align:center;
    line-height:36px;
    border-radius:5px;
    background:#ffb752;
  }
</style>
