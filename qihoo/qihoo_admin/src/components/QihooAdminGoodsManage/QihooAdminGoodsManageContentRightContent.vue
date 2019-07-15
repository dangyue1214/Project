<template>
  <div class="content_right_content">
    <div class="goodslist_query">
      产品名称<input type="text" id="serch_text1" class="goodsname_text goodsname_text_one" v-model="selectName" placeholder="请输入产品名称" :style="bc|borderColorFilter" @focus="focus" @blur="blur" @mouseover="mouseover" @mouseout="mouseout"/>
      <input type="button" class="query_button" value="查询" @click="query"/>
    </div>
    <div class="oper_div">
      <div class="oper_div_box">
        <div class="oper_div_box_left">
          <a class="a_d_btn add_div" @click="changeAdd">
            <i class="icon iconfont icon-jiahao"></i>
            添加商品
          </a>
          <a class="a_d_btn delete_div">
            <i class="icon iconfont icon-lajixiang1"></i>
            批量删除
          </a>
        </div>
        <p class="oper_div_box_right">
          共:<span class="goods_number_all">{{goodsNum}}</span>件商品
        </p>
      </div>
    </div>
    <div class="goodslist_content">
      <!--<qihoo-admin-goods-manage-content-right-content-class></qihoo-admin-goods-manage-content-right-content-class>-->
      <qihoo-admin-goods-manage-content-right-content-list :goodsInfor="goodsInfor" :startNum="startNum" :data="data" :selectAllInput="selectAllInput" :selectOneInput="selectOneInput"></qihoo-admin-goods-manage-content-right-content-list>
    </div>
  </div>
</template>

<script>
    // import QihooAdminGoodsManageContentRightContentClass from "./QihooAdminGoodsManageContentRightContentClass";
    import QihooAdminGoodsManageContentRightContentList from "./QihooAdminGoodsManageContentRightContentList";
    export default {
        props:{
          changeAdd:{
            type:Function
          }
        },
        data(){
          return{
            bc:"#d5d5d5",
            data:{},
            allGoodsInfor:[],
            goodsInfor:[],
            selectName:"",
            goodsNum:0,
            startNum:1
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
            if (this.selectName != "") {
              this.getProductsByName(this.selectName);
            }
          },
          getProductsByName(name) {
            let newGoodsInfor = [];
            for (let i = 0; i < this.allGoodsInfor.length; i++) {
              if (this.allGoodsInfor[i].goodstype == name) {
                newGoodsInfor.push(this.allGoodsInfor[i]);
              }
            }
            this.goodsInfor = newGoodsInfor;
            this.getGoodsNum(this.goodsInfor);
          },
          getGoodsNum(arr) {
            //总数量
            let num = 0;
            for (let i = 0; i < arr.length; i++) {
              num += arr[i].goodscount;
            }
            this.goodsNum = num;
            //起始值
            if (arr.length != 0) {
              this.startNum = 1;
            } else {
              this.startNum = 0;
            }
          },
          //全返选
          //全选设置    -----对于全选按钮点击事件设置
          selectAllInput() {
            let isChecked=this.data.checkedAll;
              this.goodsInfor.forEach((item)=>{
                item.checkedOne = isChecked;
              })
            },
          //单选设置--------对于每个商品的单选按钮的设置
          //① 点击之后  将当前点击的这个状态传过来
          selectOneInput(so) {
            //② 如果为false，则将上面的全选变为false
            if(so == false) {
              this.data.checkedAll= false;
              //③ 如果为true,则将所有的单选循环一遍，只要有一个出现false ，则将全选也定为false跳出循环，
            } else{
              for(let i=0;i<this.goodsInfor.length;i++){
                if(this.goodsInfor[i].checkedOne==false){
                  this.data.checkedAll= false;
                  break;
                }
                //④ 循环未进入if 条件，则代表所有的单选都为true，将全选也置为true；
                this.data.checkedAll= true;
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
          fetch("http://localhost:9999/api/adminAllGoods").then(response=>{
            response.json().then(data=>{
                this.data=data;
                this.allGoodsInfor=data.products;
                this.goodsInfor=data.products;
                this.getGoodsNum(this.goodsInfor);
            })
          });
        },
        components: {
          QihooAdminGoodsManageContentRightContentList,
          // QihooAdminGoodsManageContentRightContentClass
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
