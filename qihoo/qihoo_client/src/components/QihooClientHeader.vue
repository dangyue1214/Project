<template>
  <header>
    <div class="header_middle">
      <div class="header_middle_left">
        <a href="#">帮助中心</a>
        <a href="#">收藏本站</a>
      </div>
      <div class="header_middle_right">
        <div class="header_middle_right_one">
          <div class="header_middle_right_one_before_hide" v-show="usernumber!=null">
            <a class="before_hide_1" href="#">{{usernumber | nameFilter}}</a>
            <a class="before_hide_2" href="#/login">退出登录</a>
          </div>
          <div class="header_middle_right_one_after_hide" v-show="usernumber==null">
            <a class="after_hide_1" href="#/login">登录</a>
            <a class="after_hide_2" href="#/register">注册</a>
          </div>
        </div>
        <a href="#">我的订单</a>
        <a class="active_phone">
          <img src="../assets/images/head-icons.png" alt="图片加载失败">
        </a>
        <a href="#/goodsClassify">360手机商城</a>
      </div>
    </div>
    <div class="header_bottom">
      <a class="logo_a" href="#/">
        <img src="../assets/images/i360logo.png" alt="图片加载失败">
      </a>
      <div class="bottom_center_select">
        <div class="bottom_center_select_top">
          <input type="text" placeholder="N7pro新品" v-model="searchText"/>
          <a class="search_a" @click="search"></a>
          <div class="goodscarts" @click="judge">
            <img :src="cartImg" alt="图片加载失败"/>
            <a>我的购物车<span>{{cardsgoodscount | countFilter }}</span></a>
            <p>{{reminder}}</p>
          </div>
        </div>
        <div class="history_memory">
          <a href="#">N7</a>
          <a href="#">N7pro</a>
          <a href="#">N6</a>
          <a href="#">儿童手表</a>
          <a href="#">行车记录仪</a>
          <a href="#">摄像机夜视版</a>
        </div>
      </div>
    </div>
    <div class="nav_list">
      <a href="#/" class="nav_left">
        <img src="../assets/images/nav_list_ico.png" alt="图片加载失败">
        <span>全部智能商品</span>
      </a>
      <ul class="nav_middle">
        <qihoo-client-header-nav-middle-list-detail :listdetail="listdetail" v-for="listdetail in headergoods" :getNavClassId="getNavClassId" :getGoodsId="getGoodsId"></qihoo-client-header-nav-middle-list-detail>
      </ul>
      <div class="nav_img">
        <img src="../assets/images/nav_img.gif" alt="图片加载失败">
      </div>
    </div>
  </header>
</template>
<script>
    import QihooClientHeaderNavMiddleListDetail from "./QihooClientHeaderNavMiddleListDetail";
    export default {
      name: "QihooClientHeader",
      data(){
        return{
          headergoods:[],
          usernumber:null,
          //所有用户购物车数据
          goodscart:[],
          reminder:"",
          //某用户购物车总数
          cardsgoodscount:0,
          //input搜索的内容
          searchText:"",
          cartImg:"../static/images/carts_1.png"
        }
      },
      props:{
        getNavClassId:{
          type:Function
        },
        getGoodsId:{
          type:Function
        }
      },
      methods:{
        search(){
          console.log(this.searchText)
          if(this.searchText!=""){
            for(let i=0;i<this.headergoods.length;i++){
              if(this.searchText==this.headergoods[i].classname){
                let str ="#/goodsClassify?"+this.headergoods[i].classid;
                window.location.href=str;
              }
            }
          }
        },
        judge(){
            if(this.cardsgoodscount==0){
              this.reminder="您还没有登录请先登录";
            }else{
              this.reminder="";
              window.location.href="#/Cart";
            }
        },
        //获取cookie 并获取用户购物车信息
        getCookie(){
          let str=document.cookie;
          let arr = str.split(";");
          for(let i in arr){
            if(arr[i].indexOf("usernumber=")==0){
              let arrnew = arr[i].split("=");
              this.usernumber=arrnew[1];
              this.cartImg="../static/images/carts_2.png";
            }
          }
          //根据用户名获取购物车信息
          for(let j=0;j<=this.goodscart.length;j++){
            if(this.goodscart[j].usernumber==this.usernumber){
              this.cardsgoodscount=this.goodscart[j].usercount;
            }
          }
        }
      },
      filters:{
        nameFilter(val){
          return "hi !"+ val;
        },
        countFilter(val){
          return "("+ val+")";
        }
      },
      created(){
        //获取header部分的商品列表
        fetch("http://localhost:9999/api/headergoods").then(response=>{
          response.json().then(data=>{
            this.headergoods = data.goodsdata;
          })
        });
        //获取购物车信息
        fetch("http://localhost:9999/api/cartsgoods").then(response=>{
          response.json().then(data=>{
            this.goodscart = data.goodscart;
            //数据获取后 ，获取cookie  和 购物车信息
            this.getCookie();
          })
        });
      },
      components: {
        QihooClientHeaderNavMiddleListDetail
       }
    }
</script>

<style scoped>
  header{
    width:100%;
  }
  .header_middle{
    width:100%;
    height:36px;
    background:#e3e4e5;
    box-sizing:border-box;
    padding:0 66px;
  }
  .header_middle a{
    font-size:12px;
    color:#999999;
    line-height: 36px;
  }
  .header_middle a:hover{
    color:#23ac38;
  }
  .header_middle_left{
    float:left;
  }
  .header_middle_left a{
    margin-right:20px;
  }
  .header_middle_right{
    float:right;
  }
  .header_middle_right_one{
    float:left;
  }
  .header_middle_right_one .before_hide_1{
    font-size: 14px;
    color:red;
  }
  .header_middle_right_one a{
    margin-right: 24px;
  }
  /**/
  .header_middle_right_one_after_hide{
  }
  .header_middle_right>a{
    float:left;
    margin-right: 10px;
  }
  .active_phone{
    margin-top: 5px;
  }
  .header_bottom{
    width:100%;
    height:36px;
    box-sizing:border-box;
    padding:0 66px;
  }
  .logo_a{
    float:left;
  }
  .logo_a img{
    float:left;
    margin-top:40px;
    width:150px;
    height:40px;
  }
  .bottom_center_select{
    float:right;
    margin-right:112px;
    font-size:12px;
  }
  .bottom_center_select_top{
    margin-top:32px;
  }
  .bottom_center_select_top input{
    float:left;
    width:462px;
    height:40px;
    border:1px solid #23ac38;
    outline:none;
    font-size:12px;
    color:#c5c5c5;
    text-indent:10px;
  }
  .bottom_center_select_top input::-webkit-input-placeholder{
    color:#c5c5c5;

  }
  .search_a{
    float:left;
    width:72px;
    height:42px;
    text-align: center;
    background:#23ac38 url(../assets/images/head-bgs.png) no-repeat 20px -110px;
    margin-right:35px;
  }
  .search_a:hover{
    background-color:#23862A;
  }
  .goodscarts{
    position:relative;
    float:left;
    width:126px;
    height:16px;
    border:1px solid #dddddd;
    padding:12px;
  }
  .goodscarts img{
    float:left;
    margin-right: 12px;
    margin-left:10px;
  }
  .goodscarts a{
    display:block;
    float:left;
  }
  .goodscarts a:hover{
    color:#23AC38;
  }
  .goodscarts span{
    font-size:12px;
    color:#c5c5c5;
  }
  .goodscarts p{
    position:absolute;
    left:170px;
    top:0;
    color:red;
    font-size:12px;
    width:100%;
    line-height:44px;
  }
  .history_memory a{
    font-size:12px;
    color:#c5c5c5;
    margin-right:5px;
    line-height:40px;
  }
  .history_memory a:hover{
    color:#EE4626;
  }
  .nav_list{
    /*padding-top:20px;*/
    position:relative;
    clear:both;
    width:100%;
    border-bottom: 1px solid #363636;
    box-sizing:border-box;
    padding:0 55px;
  }
  .nav_list::after{
    content:"";
    display:block;
    height:0;
    clear:both;
    overflow: hidden;
    visibility:hidden;
  }
  .nav_left{
    float:left;
    display:block;
    width:210px;
    line-height:38px;
    background:#363636;
    color:#ffffff;
    font-size:16px;
  }
  .nav_middle{
    float:left;
    margin-left:24px;
  }
  .nav_img{
    position: absolute;
    right:55px;
    top:-24px;
    float:right;
  }
  .nav_left img{
    margin:0  15px 0 24px;
  }
</style>
