<template>
  <div>
    <!-- header -->
    <header>
      <div class="bg_img" style="backgroundSize:1363px 550px;">

        <img class="logo" src="../assets/image_2/logo.png">
        <img class="safety" src="../assets/image_2/safety.png">
        <img class="bg" src="../assets/image_2/bg_img.jpg">
        <img class="Rotation" src="../assets/image_2/rotate.png" width="600px" height="600px" style="margin-left:70px;margin-top:-30px;"/>

        <div class="header_right">
          <div class="header_c">
            <div class="login">
              <p id="num"  @click="change('1')">360账号登录</p>
              <p id="note" @click="change('2')">短信登录</p>
            </div>
            <div id="input_top" v-show="temp==1">
              <div class="input_box">
                <input class="username" v-model="phone" type="text" @focus="updateSpan" placeholder="手机号">
              </div>
              <div class="input_box">
                <input class="userpass" v-model="pass" type="password" placeholder="密码">
              </div>
              <div class="input_boxx">
                <input type="checkbox" v-model="checked">7天免登陆
                <h3>{{span}}</h3>
              </div>
            </div>
            <div id="input_bottom" v-show="temp==2">
              <div class="input_box">
                <input class="username" v-model="phone" type="text"  @focus="updateSpan()" placeholder="手机号">
              </div>
              <div class="input_box3">
                <input type="text" id="yzm" v-model="yzm" placeholder="请输入验证码">
                <span id="msg" @click="show()" :style="bc"
                >{{date}}</span>
              </div>
              <div class="input_boxx">
                <input type="checkbox" v-model="checked">7天免登陆
                <p>{{spanp}}</p>
              </div>
            </div>
            <input class="dl" type="button" @click="login()" value="登录">
            <div class="header_register">
              <a href="#/register"><p>快速注册</p></a>
              <a href="http://i.360.cn/findpwd/"><h5>找回密码</h5></a>
            </div>
            <div class="mothods">
              <p>其他登录方式</p>
            </div>
            <div class="mothods_1">
              <a href="#"><img src="../assets/image_2/qq.png"></a>
              <a href="#"><img src="../assets/image_2/weixin.png"></a>
              <a href="#"><img src="../assets/image_2/weibo.png"></a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="footer">
      <div class="footer_1">
        <a href="#">
          <div class="footer_11">
            <img src="../assets/image_2/1.png">
            <p>账号申诉</p>
            <p>人工客服解决问题</p>
          </div>
        </a>
        <a href="#">
          <div class="footer_11">
            <img src="../assets/image_2/2.png">
            <p>帮助查询</p>
            <p>查看常见用户问题</p>
          </div>
        </a>
        <a href="#">
          <div class="footer_11">
            <img src="../assets/image_2/3.png">
            <p>找回密码</p>
            <p>自助找回账号密码</p>
          </div>
        </a>
        <a href="#">
          <div class="footer_11">
            <img src="../assets/image_2/4.png">
            <p>账号安全</p>
            <p>下载神器告别偷盗</p>
          </div>
        </a>
      </div>
      <p class="footer_p">Copyght@2005-2018.360.CN AllRights Reserved 360安全中心</p>
      <p class="footer_p">京ICP证080047号[京ICP备08010314号-6]京公安局备11000002000006号</p>
    </div>
  </div>
</template>
<script>
    export default {
      name: "QihooClientLogin",
      created() {
        fetch("http://localhost:9999/api/user").then(response => {
          response.json().then(data => {
            this.allgoods = data.users;
          })
        })
      },
        data(){
          return {
            allgoods:[],
            temp: 1,
            date:"点击获取验证码",
            phone:"",
            pass:"",
            span:"",
            yzm:"",
            spanp:"",
            checked:false,
            bc:"fontSize:12px;"

          }
      },
      methods:{
        change(i){
          this.temp=i,
          this.phone="",
          this.pass="",
          this.yzm="",
          this.span="",
          this.spanp="",
          this.checked=false

        },
        updateSpan(){
          this.span="";
          this.spanp="";
        },
        login(){
          for(var i=0;i<this.allgoods.length;i++){
            if(this.allgoods[i].usernumber==this.phone && this.allgoods[i].userpass!=this.pass) {
              this.span="亲密码输入有误"
            } else if(this.allgoods[i].usernumber==this.phone && this.allgoods[i].userpass==this.pass){
              this.span="";
              if(this.checked=true){
                this.addCookie("usernumber",this.phone,7)
                this.addCookie("userpass",this.pass,7)
              }
              window.location.href='#/'//登录成功页面跳转
            }else if(this.phone==""&& this.pass==""){
              this.span="亲请输入手机号/密码"
            }
            if(this.allgoods[i].usernumber==this.phone && this.yzm!=this.date) {
              this.spanp="亲验证码输入有误"
            } else if(this.allgoods[i].usernumber==this.phone && this.yzm==this.date){
              this.spanp="";
              if(this.checked=true){
                this.addCookie("usernumber",this.phone,7);
                this.addCookie("userpass",this.pass,7);
              }
              window.location.href='#/';
            }else if(this.phone==""&& this.yzm==""){
              this.spanp="亲请输入手机号/验证码"
            }
          }
        },
        // login(){
        //     //登录  方法 1  手机号登录   判断手机号和密码是否正确
        //     for(var i=0;i<this.allgoods.length;i++){
        //        if(this.allgoods[i].usernumber==this.phone && this.allgoods[i].userpass==this.pass){
        //           if(this.checked==true){
        //             this.addCookie("usernumber",this.phone,7);
        //             this.addCookie("userpass",this.pass,7);
        //           }
        //           window.location.href='#/index'//登录成功页面跳转
        //        }else{
        //          this.span="亲密码或手机号输入有误";
        //          this.pass="";
        //          this.phone="";
        //          this.checked=false;
        //        }
        //       //登录  方法 2  手机号登录   判断手机号和密码是否正确
        //       if(this.allgoods[i].usernumber==this.phone && this.yzm==this.date){
        //         if(this.checked=true){
        //           this.addCookie("usernumber",this.phone,7);
        //           this.addCookie("userpass",this.pass,7);
        //         }
        //         window.location.href='#/index'
        //       }else{
        //         this.spanp="亲验证码或手机号输入有误";
        //         this.phone="";
        //         this.yzm="";
        //         this.checked=false;
        //       }
        //     }
        // },
            addCookie(key,value,days){
                var d = new Date();
                d.setDate(d.getDate()+days);
                //保存cookie；
                document.cookie = key+"="+value+";expires="+d.toGMTString();
              },
            show(){
              this.bc="fontSize:22px;";
              var code="";
              var random=new Array(0,1,2,3,4,5,6,7,8,9);
              for(var i=0;i<4;i++){
                var index=Math.floor(Math.random()*10);
                code+=random[index];
              }
              this.date=code;
            }
        }
    }

</script>

<style scoped>
  /* header */
  header{
    width: 100%;
    height:550px;
  }
  .bg_img{
    width: 100%;
    height:550px;
    background: black;
    overflow: hidden;
    position: relative;
  }
  .bg{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
  }
  .bg_img .bg{
    transition: all 0.9s;
  }
  .bg_img .bg:hover{
    transform: scale(1.2);
  }
  .logo{
    position: absolute;
    width: 153px;
    height: 58px;
    margin-left: 59px;
    margin-top: 30px;
    z-index: 1;
  }
  .safety{
    position: absolute;
    width: 596px;
    height: 545px;
    margin-left: 74px;
    z-index: 1;
  }

  @-webkit-keyframes rotation {
    from {-webkit-transform: rotate(0deg);
    }to {
       -webkit-transform: rotate(360deg);
     }
  }

  .Rotation{
    -webkit-transform: rotate(360deg);
    animation: rotation 3s linear infinite;
    -moz-animation: rotation 3s linear infinite;
    -webkit-animation: rotation 3s linear infinite;
    -o-animation: rotation 3s linear infinite;
  }
  .header_right{
    width: 360px;
    padding-bottom: 80px;
    background: white url(../assets/image_2/jiao.png) no-repeat 310px 380px;
    position: absolute;
    top:66px;
    left:916px;
    border-radius: 3px;
    z-index: 1;
  }
  .header_c{
    width: 302px;
    margin:0 auto;
    padding-top: 34px;
  }
  .login{
    width: 100%;
    height: 32px;
    background: white url(../assets/image_2/xian_1.png) no-repeat 157px center;
    margin:0 auto;
  }
  .login #num{
    float: left;
    margin-left: 38px;
    font-size: 18px;
    color: black;
    cursor: pointer;
  }
  .login #num:hover{
    color: #36b447;
  }
  .login #note:hover{
    color: #36b447;
  }
  .login #note{
    float:left;
    margin-left: 31px;
    font-size: 18px;
    border-bottom:1px solid transparent;
    cursor: pointer;
  }
  .input_box{
    width: 100%;
    height:50px;
  }
  .input_boxx{
    height:25px;
    margin-bottom: 20px;
  }
  .input_boxx input{
    margin-left:0px;
  }
  .input_box2 input{
    width: 177px;
    height: 40px;
    display:block;
    float: left;
    text-indent: 5px;
  }
  .input_box3{
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
  }
  #msg{
    font-size:18px;
    line-height: 42px;
    text-align: center;
    color:#22ac69;
    cursor: pointer;
  }
  .input_box3 input{
    width: 160px;
    height: 40px;
    background: white;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    color: #b4bccc;
    text-indent: 10px;
    float:left;
    outline: none;
  }
  .input_box3 span{
    width: 100px;
    height: 40px;
    border:1px solid #22ac69;
    display:block;
    float:right;
    background: #fffff9;
  }
  .input_box input{
    outline: none;
    text-indent: 5px;
  }
  .username{
    width:300px;
    height: 36px;
    border:1px solid #dddddd;
  }
  .input_boxx p{
    font-size:12px;
    color:#ff0000;
    margin-top: 3px;
  }
  .input_boxx h3{
    font-size:12px;
    color:#ff0000;
    font-weight: 100;
    margin-top: 3px;
  }
  .userpass{
    width:300px;
    height: 36px;
    border:1px solid #dddddd;
  }
  .dl{
    width: 100%;
    height:40px;
    background:#36b447;
    border:none;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
  .header_register{
    width: 100%;
    margin-top:14px;
    height: 14px;
  }
  .header_register a p{
    float:left;
    color: #6f6f6f;
    font-size: 12px;
  }
  .header_register a p:hover{
    color:#22ac69;
  }
  .header_register a h5{
    float:right;
    color: #6f6f6f;
    font-size: 12px;
  }
  .header_register a h5:hover{
    color:#22ac69;
  }
  .mothods{
    margin-top: 21px;
    background: url(../assets/image_2/xian.png) no-repeat 0px 6px;
  }
  .mothods p{
    width: 93px;
    background: white;
    font-size: 12px;
    color: #999999;
    text-align: center;
    margin:0 auto;
  }
  .mothods_1{
    width: 100%;
    margin-top: 13px;
  }
  .mothods_1 a:nth-child(1){
    margin-left:29px;
  }
  .mothods_1 a:nth-child(2){
    margin-left:57px;
  }
  .mothods_1 a:nth-child(3){
    margin-left:57px;
  }

  /* footer */
  .footer{
    width: 100%;
    height:194px;

  }
  .footer a{
    float:left;
    padding:18px 37px;
  }
  .footer a:hover{
    background:#ECFEF8;
  }
  .footer a:last-child{
    margin-right: 0;
  }
  .footer_1{
    width:1120px;
    height:58px;
    margin:0 auto;
    margin-top:36px;
    margin-bottom: 40px;
  }
  .footer_11{
    width: 200px;
    height: 100%;
  }
  .footer_11 img{
    float:left;
    margin-right:9px;
  }
  .footer_11 p{
    float: left;
    font-size:16px;
    color: #58cfa6;
  }
  .footer_11 p:last-child{
    font-size:12px;
  }
  .footer_p{
    font-size:12px;
    color:#999999;
    text-align: center;
  }
</style>
