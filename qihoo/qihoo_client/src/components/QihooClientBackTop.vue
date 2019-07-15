<template>
  <ul class="back_top">
    <li>
      <img class="img_ico" src="../assets/images/lscoupon.png" alt="图片加载失败">
    </li>
    <li>
      <img class="img_ico" src="../assets/images/lswechat.png" alt="图片加载失败">
      <img class="img_code" src="../assets/images/code2.png" alt="图片加载失败">
    </li>
    <li>
      <img class="img_ico" src="../assets/images/lsstore.png" alt="图片加载失败">
      <img class="img_code" src="../assets/images/code1.png" alt="图片加载失败">
    </li>
    <li id="ico_a_li" @click="backTop" class="img_ico_li_last" v-show="a==true">
      <img class="img_ico" src="../assets/images/totopnew.png" alt="图片加载失败">
    </li>
  </ul>
</template>

<script>
    export default {
        name: "QihooClientBackTop",
        data(){
          return{
            a:false,
            scrollTop:0
          }
        },
        methods:{
          //获取scroll值
            getScrollTop(){
              this.scrollTop =document.documentElement.scrollTop;
                if(this.scrollTop>=600){
                  this.a=true
                }else if(this.scrollTop<600){
                 this.a=false;
                }
            },
          //点击返回顶部
            backTop(){
              document.documentElement.scrollTop=0;
            }
        },
      //挂载后调用
        mounted(){
          window.addEventListener('scroll', this.getScrollTop)
        }
    }
</script>

<style scoped>
  /*back*/
  .back_top{
    position:fixed;
    right:0;
    bottom:50px;
    z-index: 50;
    background: transparent;
    width:40px;
    height:172px;
  }
  .back_top li{
    position:relative;
    width: 40px;
    height:40px;
    margin-bottom:3px;
    background:#636363;
  }
  .back_top li:hover{
    background:#00B01A;
  }
  .back_top li:hover .img_code{
    display:block;
  }
  .img_ico{
    width: 40px;
    height:40px;
  }
  .img_code{
    display:none;
    position:absolute;
    top:-100px;
    left:-198px;
    width: 186px;
    height:181px;
  }
</style>
