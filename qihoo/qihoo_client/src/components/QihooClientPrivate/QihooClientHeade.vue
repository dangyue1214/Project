<template>
  <header>
    <div class="header_content">
      <a href="#"><img src="../../assets/image_2/i360-logo.png"></a>
      <a href="#/register"><p>注册账号</p></a>
      <a href="#/login"><h5>登录</h5></a>
    </div>
  </header>
</template>

<script>
    export default {
        name: "QihooClientHeade"
    }
</script>

<style scoped>
  header{
    width: 100%;
    height:69px;
    background: #e8e8e8;
  }
  header .header_content{
    width: 706px;
    height: 100%;
    margin:0 auto;
    background:url(../../assets/image_2/xian_2.png) no-repeat 195px center;

  }
  .header_content img{
    float: left;
    margin-top: 9px;
  }
  .header_content p{
    float: left;
    font-size: 18px;
    line-height: 69px;
    margin-left: 50px;
    color: #333333;
  }
  .header_content p:hover{
    color:#22ac69;
  }
  .header_content h5{
    float: right;
    font-size: 12px;
    color: #333333;
    line-height: 69px;
  }
  .header_content h5:hover{
    color:#22ac69;
  }
</style>
