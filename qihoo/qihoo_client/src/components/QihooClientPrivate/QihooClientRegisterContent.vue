<template>
  <section>
    <div class="section_c">
      <div class="section_top">
        <p>注册360账号</p>
      </div>
      <div class="section_h3">
        <h3>{{yuedu}}</h3>
      </div>
      <div class="section_content">
        <div class="input_box">
          <input class="username" type="text" v-model="pd" @blur="judge()" placeholder="请输入要注册的手机号">
          <p>{{phone}}</p>
        </div>
        <div class="input_box input_box2">
          <input class="userpass" type="password" v-model="mima" @blur="judgemm()" placeholder="密码请设置6-18个字符">
          <p>{{ppass}}</p>
        </div>
        <div class="input_box3">
          <input type="text" id="yzm" v-model="yzm" placeholder="请输入验证码">
          <span id="msg" @click="show()">{{data}}</span>
        </div>
        <div class="yzm">
          <p>{{pyzm}}</p>
        </div>
        <p id="register" @click="register()">下一步</p>
        <div class="read">
          <input id="checked" type="checkbox" v-model="checked">
          <p class="read_p">阅读并同意<a href="https://i.360.cn/reg/protocol"><span>"360用户协议"</span></a>和<a href="https://i.360.cn/reg/privacy"><span>"360用户隐私政策"</span></a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import Vue from 'vue'
    export default {
      name: "QihooClientRegisterContent",
      created() {
        fetch("http://localhost:9999/api/user").then(response => {
          response.json().then(data => {
            this.allgoods = data.users;
            console.dir(this.allgoods);
          })
        })
      },
      data(){
        return{
          allgoods:[],
          data:"39KS",
          pd:"",
          phone:"",
          ppass:"",
          mima:"",
          yzm:"",
          pyzm:"",
          checked:false,
          yuedu:"",
          zu:"",
          zz:""

        }
      },
      methods:{
        show(){
          var code="";
          var random=new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
            'S','T','U','V','W','X','Y','Z');
          for(var i=0;i<4;i++){
            var index=Math.floor(Math.random()*36);
            code+=random[index];
          }
          this.data=code;
        },
        estimate(){
         for(var i=0;i<this.allgoods.length;i++){
           if(this.allgoods[i].usernumber==this.pd){
             this.phone="账号已注册，请查证后再注册"
             this.pd=""
           }
         }
        },
        judgemm(){
          var objStr=/^\w{6,18}$/
          if(objStr.test(this.mima)){
            this.ppass=""
            this.zu=1;
          }else if(this.mima==""){
            this.ppass="密码不能为空"
          }else{
            this.ppass="密码格式输入有误，必须是6位以上"
            this.mima=""
          }
        },
        judge(){
          var objstr=/^[1][0-9]{10}$/
            if(objstr.test(this.pd)){
              this.phone=""
              this.zz=1
          }else if(this.pd==""){
            this.phone="手机号不能为空"
          }else{
            this.phone="用户名输入格式有误，请输入正确的手机号"
            this.pd=""

          }
          this.estimate()
        },
        register(){
          this.judgemm()
          this.judge()
          if(this.checked==true){
              if(this.data==this.yzm && this.zz==1 &&this.zu==1){
                this.pyzm=""
                window.location.href="#/skip"
              }else{
                this.pyzm="验证码输入有误"
              }
              this.yuedu=''
          }else if(this.checked==false){
            this.yuedu='阅读并同意"360用户协议"和"360用户隐私政策"'
          }

        }
      }
    }
</script>

<style scoped>
  section{
    width: 100%;
    padding-top: 72px;
  }
  .section_c{
    width: 706px;
    height: 546px;
    background: white;
    margin: 0 auto;
  }
  .section_top{
    height: 67px;
    width: 100%;
    border-bottom: 1px solid #f5f5f5;
    margin-bottom:53px;
  }
  .section_top p{
    font-size: 16px;
    color: #222222;
    line-height: 67px;
    text-align: center;
  }

  .section_h3{
    width: 100%;
    height: 20px;
  }
  .section_h3 h3{
    font-size: 12px;
    color: red;
    text-align: center;
  }
  .section_content{
    width: 383px;
    height: 406px;
    margin:0 auto;
  }
  .input_box{
    width: 383px;
    height:77px;
  }
  .input_box input{
    outline: none;
    background:white url(../../assets/image_2/5.png) no-repeat 10px center;
    width:381px;
    height: 42px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    text-indent: 45px;
    color: #b4bccc;
  }

  .input_box p{
    font-size:2px;
    color: red;
    margin-top: 10px;
  }
  .input_box2 input{
    background:white url(../../assets/image_2/6.png) no-repeat 10px center;
  }
  .input_box3{
    width: 383px;
    height: 42px;
  }
  #msg{
    font-size:18px;
    line-height: 42px;
    text-align: center;
    color:#22ac69;
    cursor: pointer;
  }
  .input_box3 input{
    width: 255px;
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
  .yzm{
    height:10px;
  }
  .yzm p{
    color: red;
    margin-top:3px;
  }
  #register{
    width: 100%;
    height:40px;
    border-radius: 3px;
    background: #22ac69;
    text-align: center;
    line-height: 40px;
    color: white;
    margin-top: 60px;
    cursor: pointer;
  }
  .read{
    width: 100%;
    height: 40px;
  }
  .read #checked{
    float: left;
    margin-top:18px;
    margin-left:57px;
  }

  .read_p{
    float: left;
    font-size: 12px;
    color: #959393;
    margin-left:6px;
    padding-top: 16px;
  }
  .read_p a span{
    color:#22ac69;
  }
  .read_p a span:hover{
    border-bottom: 1px solid #22ac69;
  }
</style>
