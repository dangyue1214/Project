<template>
    <div>
      <qihoo-client-heade></qihoo-client-heade>
      <div class="content">
        <qihoo-client-register-content></qihoo-client-register-content>
        <qihoo-client-register-bottom></qihoo-client-register-bottom>
      </div>
    </div>
</template>

<script>
    import QihooClientHeade from "../components/QihooClientPrivate/QihooClientHeade";
    import QihooClientRegisterContent from "../components/QihooClientPrivate/QihooClientRegisterContent";
    import QihooClientRegisterBottom from "../components/QihooClientPrivate/QihooClientRegisterBottom";
    export default {
        name: "QihooClientRegister",
        components: {QihooClientRegisterBottom, QihooClientRegisterContent, QihooClientHeade},
        created() {
          fetch("http://localhost:9999/api/user").then(response => {
            response.json().then(data => {
              this.allgoods = data.users;
              /*alert(this.allgoods)*/
              console.dir(this.allgoods);
            })
          })
        },
        data(){
          return{
            allgoods:[]
          }
        }
    }

</script>

<style scoped>
  .content{
    width:100%;
    background: #f5f5f5;
  }
</style>
