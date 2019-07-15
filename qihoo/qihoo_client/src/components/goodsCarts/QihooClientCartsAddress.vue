<template>
  <div class="pro_citys">
    省: <select v-model="selectVal.pro"><option>---</option><option  v-for="p in cityDatas" :value="p">{{p.province}}</option></select>
    市: <select v-model="selectVal.ci"><option>---</option><option v-for="c in selectVal.pro.cities" :value="c">{{c.city}}</option></select>
    区: <select v-model="selectVal.qu"><option>---</option><option v-for="a in selectVal.ci.areas" :value="a">{{a}}</option></select>
    您选择的地区是: {{selectVal.pro.province }}-{{selectVal.ci.city }}-{{selectVal.qu }}
  </div>
</template>
<script>
    export default {
      data:function(){
       return {
         province:"陕西省",
        cityDatas :[
            {
              province:"陕西",
              cities:[
                {city:"西安",areas:["雁塔区","长安区"]},
                {city:"咸阳",areas:["秦都区","围城区"]}
              ]
            },
            {
              province:"河南",
              cities:[
                {city:"郑州",areas:["郑州区1","郑州区2"]},
                {city:"洛阳",areas:["洛阳区1","洛阳区2"]}
              ]
            }
          ],
        selectVal:{
          pro:"",
          ci:"",
          qu:""

        }
      }
    }
  }
</script>
<style scoped>
  .pro_citys {
    font-size: 12px;
    /* width: 271px; */
    margin-left:0;
    margin-top: 21px;
    margin-bottom: -7px;
  }
</style>
