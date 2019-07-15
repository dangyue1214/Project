<template>
  <footer>
    <div class="footer_p">
      <a href="http://i.360.cn/findpwd/customerhelper?sb_param=e63421783907f9c17612d1f9648109b5"><p>帮助中心</p></a>
      <a href="http://i.360.cn/complaint?sb_param=da2939a3e6a1235e3a30d60fa6efe697"><p>立刻申诉</p></a>
    </div>
    <div class="footer_bottom">
      <p>Copyght@2005-2018.360.CN AllRights Reserved 360安全中心</p>
      <a href="http://www.miibeian.gov.cn/state/outPortal/loginPortal.action"><p>京ICP证080047号[京ICP备08010314号-6]</p></a>
      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000006&sb_param=d6b661e8ca8e1cc04d13df793574f27f"><h3><img src="../../assets/image_2/7.png">京公安局备11000002000006号</h3></a>
    </div>
  </footer>
</template>
<script>
    export default {
        name: "QihooClientRegisterBottom"
    }
</script>

<style scoped>
  footer{
    height: 116px;
    width: 706px;
    margin: 0 auto;
    padding-top: 37px;
  }
  .footer_p{
    width: 154px;
    height: 20px;
    margin:0 auto;
    background:url(../../assets/image_2/xian_2.png) no-repeat 85px center;
  }
  .footer_p p{
    font-size: 12px;
    color:#828282;
    text-align: center;
    display: inline-block;
    margin-left:20px;
  }
  .footer_p p:hover{
    color: #22ac69;
  }
  .footer_bottom{
    width: 360px;
    margin:0 auto;
    padding-top: 23px;
  }
  .footer_bottom p{
    font-size:12px;
    color: #999999;
    text-align: center;
  }
  .footer_bottom h3{
    font-size:12px;
    color: #999999;
    text-align: center;
  }

</style>
