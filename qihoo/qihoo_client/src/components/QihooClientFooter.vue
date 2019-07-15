<template>
  <footer>
    <div class="footer_top">
      <p><span>7</span>7天无理由退货</p>
      <p class="footer_top_middle_p"><span>15</span>质量问题15天退货</p>
      <p><span>包</span>满99元包邮</p>
    </div>
    <div class="footer_middle">
      <ul class="pro_left">
        <li class="pro_li_one">
          <p>帮助中心</p>
          <ul class="pro_lis">
            <li><a href="#">用户登录与密码找回</a></li>
            <li><a href="#">用户注册协议</a></li>
            <li><a href="#">购买指南</a></li>
            <li><a href="#">支付方式</a></li>
            <li><a href="#">配送与说明</a></li>
            <li><a href="#">用户注销</a></li>
          </ul>
        </li>
        <li class="pro_li_one">
          <p>售后服务</p>
          <ul class="pro_lis">
            <li><a href="#">7日无理由退货</a></li>
            <li><a href="#">质量问题15日内换货</a></li>
            <li><a href="#">保修条款</a></li>
            <li><a href="#">售后服务运费规则</a></li>
          </ul>
        </li>
      </ul>
      <div class="pro_midlle">
        <p class="pro_midlle_title">联系我们</p>
        <p class="phone_num"><span>400-6822-360</span></p>
        <p class="service_time">周一至周日 9:00-18:00</p>
        <p class="phone_num"><span>400-0111-366</span>（手机类产品）</p>
        <p class="service_time">周一至周日 9:00-21:00</p>
        <p class="pro_midlle_note">（仅收市话费）</p>
      </div>
      <div class="pro_right">
        <div class="pro_right_content">
          <img class="pro_right_content_img1" src="../assets/images/weixin_icon.png" alt="图片加载失败">
          <img class="pro_right_content_img2" src="../assets/images/footer_code1.jpg" alt="图片加载失败">
        </div>
        <div class="pro_right_content">
          <img class="pro_right_content_img1" src="../assets/images/weibo_icon.png" alt="图片加载失败">
          <img class="pro_right_content_img2" src="../assets/images/footer_code2.jpg" alt="图片加载失败">
        </div>
      </div>

    </div>
    <div class="footer_bottom">
      360商城©2013-2018 360公司版权所有 京ICP备17017089号 京公网安备11000002000006号
    </div>
  </footer>
</template>

<script>
    export default {
        name: "QihooClientFooter"
    }
</script>

<style scoped>
  /*footer*/
  footer{
    width:100%;
    background:white;
  }
  .footer_top{
    width:100%;
    box-sizing:border-box;
    display:flex;
    padding:15px 60px;
    border-top:1px solid #e8e8e8;
    border-bottom:1px solid #e8e8e8;
  }
  .footer_top p{
    width:33.3%;
    box-sizing:border-box;
    text-align: center;
    line-height:60px;
    font-size:18px;
    color:#302e33;
  }
  .footer_top_middle_p{
    border-left:1px solid #e8e8e8;
    border-right:1px solid #e8e8e8;
  }
  .footer_top p span{
    display:inline-block;
    width:40px;
    height:40px;
    color:#29ae3d;
    border:2px solid #29ae3d;
    border-radius: 50%;
    line-height: 42px;
    margin-right:10px;
  }
  .footer_middle{
    width:100%;
    box-sizing:border-box;
    padding:0 150px;
  }
  .pro_left{
    float:left;
    padding-top:30px;
  }
  .pro_li_one{
    float:left;
    margin-right:160px;
  }
  .pro_li_one p{
    font-size:16px;
    color:#302e33;
    line-height:40px;
    text-align:left;
  }
  .pro_lis li{
    line-height:30px;
    font-size:12px;
    text-align:left;
  }
  .pro_lis li a{
    color:#848484;
  }
  .pro_lis li a:hover{
    color:#77BE24;
    text-decoration: underline;
  }
  .pro_midlle{
    float:left;
    padding-top:30px;
    margin-right:120px;
  }
  .pro_midlle p{
    font-size:12px;
    color:#848484;
    text-align:left;
  }
  .pro_midlle .pro_midlle_title{
    color:#302e33;
    font-size:16px;
    line-height:40px;
  }
  .pro_midlle .phone_num{
    color:#4aba00;
    line-height:40px;
    font-size:14px;
  }
  .pro_midlle .phone_num span{
    font-size:18px;
    font-weight: bold;
  }
  .service_time{
    line-height:32px;
  }
  .pro_midlle_note{
    line-height:42px;
  }
  .pro_right{
    float:left;
  }
  .pro_right_content{
    text-align: center;
    margin-top:20px;
  }
  .pro_right_content_img1{
    margin-right:15px;
    width:36px;
    height:37px;
    margin-bottom:20px;
  }
  .pro_right_content_img2{
    width:80px;
    height:80px;
  }
  .footer_bottom{
    border-top:1px solid #e8e8e8;
    clear:both;
    width:100%;
    height:80px;
    line-height: 80px;
    text-align:center;
    color:#848484;
    font-size: 12px;
  }
</style>
