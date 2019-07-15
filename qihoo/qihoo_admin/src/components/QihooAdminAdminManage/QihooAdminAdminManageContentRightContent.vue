<template>
  <div class="content_right_content">
    <div class="goodslist_query">
      登录名<input type="text" id="serch_text1" class="goodsname_text goodsname_text_one" v-model="selectName" :style="bc|borderColorFilter" @focus="focus" @blur="blur" @mouseover="mouseover" @mouseout="mouseout"/>
      <input type="button" class="query_button" value="查询" @click="query"/>
    </div>
    <div class="oper_div">
      <div class="oper_div_box">
        <div class="oper_div_box_left">
          <a class="a_d_btn add_div" @click="change">
            <i class="icon iconfont icon-jiahao"></i>
            添加管理员
          </a>
          <a href="goodslist.html" class="a_d_btn delete_div">
            <i class="icon iconfont icon-lajixiang1"></i>
            批量删除
          </a>
        </div>
        <p class="oper_div_box_right">
          共:<span class="goods_number_all">{{count}}</span>条记录
        </p>
      </div>
    </div>
    <div class="goodslist_content">
      <qihoo-admin-admin-manage-content-right-add v-show="!this.isShow" :savaManage="savaManage"></qihoo-admin-admin-manage-content-right-add>
      <qihoo-admin-admin-manage-content-right-content-list :deleteFun="deleteFun" :allmanages="allManageInfo" v-show="this.isShow"></qihoo-admin-admin-manage-content-right-content-list>
    </div>
  </div>
</template>

<script>
    // import QihooAdminGoodsManageContentRightContentClass from "./QihooAdminGoodsManageContentRightContentClass";
    import QihooAdminAdminManageContentRightContentList from "./QihooAdminAdminManageContentRightContentList";
    import QihooAdminAdminManageContentRightAdd from "./QihooAdminAdminManageContentRightAdd";
    export default {
        data(){
          return{
            bc: "#d5d5d5",
            allmanages: [],   // 所有的管理员
            count: [],
            selectName: "",
            allManageInfo: [],
            isShow: true
          }
        },
        name: "QihooAdminAdminManageContentRightContent",
        methods:{
          deleteFun(id){
            var r = window.confirm("确认要删除吗？");
            if(r == true){
              this.deleteEle(id);
            }
          },
          deleteEle(id){
            let countAfterDelete = 0;
            let mangeNew = [];
            for(let i=0; i<this.allManageInfo.length; i++){
              if(this.allManageInfo[i].manageid != id){
                mangeNew.push(this.allManageInfo[i]);
                countAfterDelete++;
              }
            }
            this.count = countAfterDelete;
            this.allManageInfo = mangeNew;
          },
          savaManage(){
            this.isShow = true;
          },
          change(){
            this.isShow = false;
          },
          focus(){
            this.bc="#E79F5B";
          },
          blur(){
            this.bc="#d5d5d5"
          },
          mouseover(){
            this.bc="#B5B5B5";
          },
          mouseout(){
            this.bc="#d5d5d5";
          },
          query(){
            let manageByName = [];
            let countByName = 0;
            if(this.selectName!=""){
                for(var i=0; i<this.allmanages.length; i++){
                    if(this.selectName == this.allmanages[i].managename){
                        manageByName.push(this.allmanages[i]);
                      countByName++;
                    }
                }
                this.allManageInfo = manageByName;
            }
            this.count = countByName;
          }
        },
        filters:{
          //边框设置
          borderColorFilter(val){
            return "border-color:"+val+";";
          }
        },
        created(){
          fetch("http://localhost:9999/api/adminManagement").then(response=>{
            response.json().then(data=>{
                this.allmanages=data.manages;
                this.allManageInfo = data.manages;
                this.count = data.manages.length;
            })
          });
        },

        components: {
          QihooAdminAdminManageContentRightAdd,
          QihooAdminAdminManageContentRightContentList
        }
    }
</script>

<style scoped>
  .content_right_content{
    width:100%;
    background: white;
    flex:1;
    -webkit-box-sizing:border-box;
    padding:0 16px;
  }
  .goodslist_query{
    width:100%;
    padding:10px 0;
    font-size:14px;
    color:#393939;
  }
  .goodsname_text{
    margin:0 15px;
    border:1px solid #d5d5d5;
    height:26px;
    color:#757575;
    outline:none;
  }
  .goodsname_text_one{
    width:248px;
  }
  .query_button{
    width:60px;
    height:33px;
    border:none;
    outline:none;
    color:#ffffff;
    font-size:14px;
    text-indent:18px;
    background:#1e82c4 url(../../assets/img/query_ico.png) no-repeat 5px center;
  }
  .oper_div{
    width:100%;
    -webkit-box-sizing:border-box;
    border:1px solid #dddddd;
    margin-bottom:8px;
  }
  .oper_div_box{
    width:100%;
    -webkit-box-sizing:border-box;
    padding:7px 5px;
    display:-webkit-flex;
    -webkit-justify-content:space-between;

  }
  .oper_div_box_left{
    display:-webkit-flex;
  }
  .oper_div_box_left .a_d_btn{
    display:block;
    text-align: center;
    width:100px;
    height:36px;
    margin-right: 15px;
    color:white;
    font-size:14px;
    line-height:36px;
    border-radius:5px;
  }
  .oper_div_box_left a .icon{
    font-size:12px;
    vertical-align: middle;
  }
  .add_div{
    background:#ffb752;
  }
  .delete_div{
    background:#d15b47;
  }
  .oper_div_box_right{
    text-align: center;
    color:#393939;
    font-size:14px;
    line-height:36px;
  }
  .oper_div_box_right span{
    font-weight: bold;
  }
  .goodslist_content{
    width:100%;
    display:-webkit-flex;
    -webkit-box-sizing:border-box;
    border:1px solid #dddddd;
    height:400px;
  }
</style>
