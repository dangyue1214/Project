<template>
  <div>
      <qihoo-client-heade></qihoo-client-heade>
      <div class="section_b">
        <section>
          <div class="succeed">
            <p>注册成功</p>
          </div>
            <div class="section_bottom">
              <img src="../assets/image_2/8.png">
              <p>恭喜！您已完成360账号注册</p>
              <p><a href="#/login">点击登录</a></p>
            </div>
        </section>
      </div>
  </div>
</template>

<script>

    import QihooClientHeade from "../components/QihooClientPrivate/QihooClientHeade";
    export default {
        name: "QihooClientRegisterSucceed",
      components: {QihooClientHeade}

    }
</script>

<style scoped>
  .section_b{
    width: 100%;
    height: 505px;
    padding-top:57px;
    background: #f5f5f5;
  }
  section{
    width:702px;
    height: 273px;
    background: white;
    margin:0 auto;
  }
  .succeed{
    width: 100%;
    height: 65px;
    border-bottom: 1px solid #f5f5f5;
  }
  .succeed p{
    font-size: 18px;
    line-height: 65px;
    color: #222222;
    text-align: center;
  }
  .section_bottom{
    padding-top: 40px;
    width: 241px;
    margin:0 auto;
  }
  .section_bottom img{
    margin-left:100px;
    margin-bottom: 47px;
  }
  .section_bottom p{
    font-size: 12px;
    color: #666666;
    text-align: center;
    line-height: 17px;
  }
  .section_bottom p span{
    color: #22ac69;
    border-bottom: 1px solid #22ac69;
  }
</style>
