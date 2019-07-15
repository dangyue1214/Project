<template>
  <aside>
    <div class="aside_top">
      <div class="aside_top_one">
        <a class="aside_top_one_a" href="#"><img src="../assets/img/aside_logo_one.png" alt="图片加载失败"></a>
        <a class="aside_top_one_a" href="#"><img src="../assets/img/aside_logo_two.png" alt="图片加载失败"></a>
        <a class="aside_top_one_a" href="#"><img src="../assets/img/aside_logo_three.png" alt="图片加载失败"></a>
        <a class="aside_top_one_a" href="#"><img src="../assets/img/aside_logo_four.png" alt="图片加载失败"></a>
      </div>
    </div>
    <div class="aside_middle">
      <ul class="aside_middle_ul">
        <li class="aside_middle_li aside_middle_li_current" :style="styleOne" >
          <a class="aside_middle_list_a" href="#/?1">
            <i class="icon iconfont icon-dianshi" :style="colorOne"></i>
            <p class="aside_middle_list_a_right" :style="colorOne">
              商品管理
              <i class="icon iconfont icon-angle-down" :style="colorOne"></i>
            </p>
          </a>
        </li>
        <li class="aside_middle_li" :style="styleTwo">
          <a class="aside_middle_list_a" href="#/member?2">
            <i class="icon iconfont icon-ren" :style="colorTwo"></i>
            <p class="aside_middle_list_a_right" :style="colorTwo">
              会员管理
              <i class="icon iconfont icon-angle-down" :style="colorTwo"></i>
            </p>
          </a>
        </li>
        <li class="aside_middle_li" :style="styleThree">
          <a class="aside_middle_list_a" href="#/admin?3">
            <i class="icon iconfont icon-shiyirenqun" :style="colorThree"></i>
            <p class="aside_middle_list_a_right" :style="colorThree">
              管理员管理
              <i class="icon iconfont icon-angle-down" :style="colorThree"></i>
            </p>
          </a>
        </li>
      </ul>
    </div>
    <div class="aside_bottom">
      <div class="aside_bottom_one">
      </div>
      <div class="aside_bottom_two">
        <img class="aside_bottom_two_img_one" src="../assets/img/switch_one.png" alt="图片加载失败">
      </div>
      <div class="aside_bottom_three">
      </div>
    </div>
  </aside>
</template>

<script>
    export default {
      props:[""],
      data(){
          return{
            styleOne:"",
            styleTwo:"",
            styleThree:"",
            colorOne:"",
            colorTwo:"",
            colorThree:""
          }
        },
      methods:{
        getUrlId(){
          let urlStr = window.location.href;
          let UrlId = urlStr.split("?")[1];
          if(UrlId == undefined){
            UrlId="1";
          }
          this.changeStyle(UrlId)

        },
        changeStyle(str){
          if(str=="1"){
            this.colorOne="color:#2B7DBC";
            this.colorTwo="color:#585858";
            this.colorThree="color:#585858";
            this.styleOne="background:#FFFFFF;border-left-color:#3382AF;";
            this.styleTwo="background:#f9f9f9;border-left-color:transparent;";
            this.styleThree="background:#f9f9f9;border-left-color:transparent;";
          }else if(str=="2"){
            this.colorOne="color:#585858";
            this.colorTwo="color:#2B7DBC";
            this.colorThree="color:#585858";
            this.styleTwo="background:#FFFFFF;border-left-color:#3382AF;";
            this.styleOne="background:#f9f9f9;border-left-color:transparent;";
            this.styleThree="background:#f9f9f9;border-left-color:transparent;";
          }else{
            this.colorOne="color:#585858";
            this.colorTwo="color:#585858";
            this.colorThree="color:#2B7DBC";
            this.styleThree="background:#FFFFFF;border-left-color:#3382AF;";
            this.styleOne="background:#f9f9f9;border-left-color:transparent;";
            this.styleTwo="background:#f9f9f9;border-left-color:transparent;";
          }
        }
      },
      created(){
        this.getUrlId()
      },
      filters:{
        priceFilter(val){
          return "￥"+ val;
        }
      },
      name: "QihooAdminContentAside"
    }
</script>

<style scoped>
</style>
