<template>
  <div class="content_right_content">
    <div class="goodslist_query">
      会员名称<input type="text" id="serch_text1" class="goodsname_text goodsname_text_one" v-model="selectName" :style="bc|borderColorFilter" @focus="focus" @blur="blur" @mouseover="mouseover" @mouseout="mouseout"/>
      <input type="button" class="query_button" value="查询" @click="query"/>
    </div>
    <div class="oper_div">
      <div class="oper_div_box">
        <div class="oper_div_box_left">
          <a class="a_d_btn add_div" @click="change(1)">
            <i class="icon iconfont icon-jiahao"></i>
            添加会员
          </a>
          <a href="goodslist.html" class="a_d_btn delete_div">
            <i class="icon iconfont icon-lajixiang1"></i>
            批量删除
          </a>
        </div>
        <p class="oper_div_box_right">
          共:<span class="goods_number_all">{{this.userselect.length}}</span>人
        </p>
      </div>
    </div>
    <div class="goodslist_content">
      <!--<qihoo-admin-goods-manage-content-right-content-class></qihoo-admin-goods-manage-content-right-content-class>-->
      <qihoo-admin-member-manage-content-right-content-list :data="data" :inputAll="inputAll" :inputOne="inputOne" :userselect="userselect" :num="num" ></qihoo-admin-member-manage-content-right-content-list>
    </div>
  </div>
</template>

<script>
    import QihooAdminMemberManageContentRightContentList from "./QihooAdminMemberManageContentRightContentList";
    export default {
        name: "QihooAdminMemberManageContentRightContent",
      props:{
        change:{
          type:Function
        }
      },
      data(){
        return{
          bc:"#d5d5d5",
          userInfor:[],
          userselect:[],
          selectName:"",
          num:"",
          data:{}
        }
      },
      name: "QihooAdminGoodsManageContentRightContent",
      methods: {
        focus() {
          this.bc = "#E79F5B";
        },
        blur() {
          this.bc = "#d5d5d5"
        },
        mouseover() {
          this.bc = "#B5B5B5";
        },
        mouseout() {
          this.bc = "#d5d5d5";
        },
        query() {
          let newInfor = [];
          if (this.selectName != "") {
            for (let i = 0; i < this.userInfor.length; i++) {
              if (this.selectName == this.userInfor[i].username) {
                newInfor.push(this.userInfor[i]);
              }
            }
            this.userselect = newInfor;
          }
            this.select(this.userselect)
        },
        select(arr){
          if (arr.length >= 1) {
            this.num = 1
          } else {
            this.num = 0
          }
        },
        //全选
        inputAll(){
          let ischecked=this.data.checkedALL;
          this.userselect.forEach((item)=>{
            item.checkedaOne=ischecked;
          })
        },
        //单选
        inputOne(aa){
          if(aa==false){
            this.data.checkedALL=false;
          }else{
            for(let i=0;i<this.userselect.length;i++){
              if(this.userselect[i].checkedaOne==false){
                  this.data.checkedALL=false;
                  break;
              }
              this.data.checkedALL=true;
            }
          }
        }
      },
      filters:{
        //边框设置
        borderColorFilter(val){
          return "border-color:"+val+";";
        }
      },
      created(){
        fetch("http://localhost:9999/api/user").then(response=>{
          response.json().then(data=>{
            this.data=data;
            this.userInfor=data.users;
            this.userselect=data.users;
            this.select(this.userselect)
          });
        });


      },
      components: {QihooAdminMemberManageContentRightContentList}
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
