<template>
  <!-- header -->
  <header>
    <div class="header_left">
      <img src="../assets/img/i360logo.png" alt="图片加载失败">
    </div>
    <div class="header_right">
      <div class="header_right_one" @click="changeO()">
        <i class="icon iconfont icon-ring"></i>
        <p class="infor_num">8</p>
        <div class="infor_list" v-show="one==1">
          <p class="list_one">
            <i class="icon iconfont icon-jinggao"></i>8条通知
          </p>
          <ul class="infor_list_ul">
            <li class="infor_list_li">
              <div class="infor_list_li_div">
                <div class="li_p_one">
                  <div class="li_p_one_img"><img src="../assets/img/list_logo_one.png" alt="图片加载失败"/></div>
                  <p class="li_p_one_ptext">最新消息</p>
                </div>
                <p class="li_p_two li_p_two_a">+12</p>
              </div>
            </li>
            <li class="infor_list_li">
              <div class="infor_list_li_div">
                <div class="li_p_one">
                <div class="li_p_one_img"><img src="../assets/img/list_logo_two.png" alt="图片加载失败"/></div>
                <p class="li_p_one_ptext">切换为编辑登录模式的页面</p>
                </div>
              </div>
            </li>
            <li class="infor_list_li">
              <div class="infor_list_li_div">
                <div class="li_p_one">
                  <div class="li_p_one_img"><img src="../assets/img/list_logo_three.png" alt="图片加载失败"/></div>
                   <p class="li_p_one_ptext">新订单</p>
                </div>
                <p class="li_p_two li_p_two_b">+8</p>
              </div>
            </li>
            <li class="infor_list_li">
              <div class="infor_list_li_div">
                <div class="li_p_one">
                <div class="li_p_one_img"><img src="../assets/img/list_logo_four.png" alt="图片加载失败"/></div>
                <p class="li_p_one_ptext">用户消息</p>
                </div>
                <p class="li_p_two li_p_two_a">+11</p>
              </div>
            </li>
          </ul>
          <p class="list_last">
            <a href="#">查看所有通知</a><i class="icon iconfont icon-forward"></i>
          </p>
        </div>
      </div>
      <div class="header_right_two" @click="changeT()">
        <div class="time_div">{{time}}</div>
        <div class="admin_div">
          <p>欢迎光临,<br/>超级管理员</p>
          <i class="icon iconfont icon-arrLeft-fill"></i>
        </div>
        <div class="admin_div_displaylist" v-show="two==1">
          <ul class="admin_ul">
            <li class="list_li_one">
              <a href="#"><i class="icon iconfont icon-shezhi"></i>网站设置</a>
            </li>
            <li class="list_li_one">
              <a href="#"><i class="icon iconfont icon-ren"></i>个人资料</a>
            </li>
          </ul>
          <p class="list_li_one list_li_one_p">
            <a href="#"><i class="icon iconfont icon-guanji"></i>退出</a>
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        data(){
          return{
            time:"00:00:00",
            one:0,
            two:0
          }
        },
        methods:{
          myDateToString1(){
            var a=new Date();
            var str=a.getFullYear()+"年";
            str+=a.getMonth()+1+"月";
            str+=a.getDate()+"日";
            str+=""+a.getHours()+"时";
            str+=a.getMinutes()+"分";
            str+=a.getSeconds()+"秒";
            this.time=str;
          },
          changeO(){
            if(this.one==1){
              this.one=0;
            }else{
              this.one=1;
            };

            this.two=0;
          },
          changeT(){
            if(this.two==1){
              this.two=0;
            }else{
              this.two=1;
            };
            this.one=0;
          }
        },
        created(){
          this. myDateToString1();
          setInterval(this.myDateToString1,1000);
        },
        name: "QihooAdminHeader"
    }
</script>

<style scoped>

</style>
