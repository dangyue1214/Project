<template>
  <div class="section_left">
    <p>当前场次剩余时间</p>
    <span id="hour">{{h}}</span> : <span id="minutes">{{m}}</span> : <span id="seconds">{{s}}</span>
  </div>
</template>

<script>
    export default {
        name: "QihooClientIndexSectionCountDown",
        data(){
          return{
            h:0,
            m:0,
            s:0
          }
        },
        methods:{
          showtime(){
            let nowtime =  new Date();//当前的时间
            let endtime =  new Date("2018/9/16,00:00:00");//设置的倒计时时间
            let timeNum = parseInt((endtime.getTime() - nowtime.getTime()) /1000 );//得到两个时间段的毫秒数差值再除以1000，就是相差的秒数
            let d = parseInt(timeNum / (60*60*24));//得到相差天数
            let h1 = parseInt(timeNum  / (60*60) %24 );
            let h2=d*24+h1;
            let m2 = parseInt(timeNum / 60 %60 );
            let s2 = parseInt(timeNum  % 60 );
            this.h = this.add(h2);
            this.m = this.add(m2);
            this.s = this.add(s2);
            if(timeNum<=0){
              clearInterval(this.showtime)
            }
            setTimeout(this.showtime,1000);
          },
          add(i){
            if(i<10){
              i = "0"+i;
            }
            return i;
          }

        },
        mounted(){
          this.showtime();
        }
    }
</script>

<style scoped>
  .section_left{
    padding-top:80px;
    float:left;
    font-size: 14px;
    color:white;
    line-height:35px;
  }
  .section_left span{
    display:inline-block;
    width:35px;
    background:#fcb800;
    border-radius:3px;
    text-align: center;
    font-size:14px;
    font-weight:bold;
  }
</style>
