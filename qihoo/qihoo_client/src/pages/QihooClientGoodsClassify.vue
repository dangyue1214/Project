<template>
  <div>
    <qihoo-client-header :getNavClassId="getNavClassId"></qihoo-client-header>
    <section>
      <div class="section_content">
        <div class="section_1">
          <a href="#/index"><p>首页></p></a>
          <a href="#" @click="getGoods(1)"><p>搜索全部></p></a>
          <a href="#"><h3>{{goodsdetail.classname}}</h3></a>
        </div>
      </div>
    </section>
    <qihoo-client-goods-class-list-detail-list :productlist="goodsdetail.products"></qihoo-client-goods-class-list-detail-list>
    <!--页面切换-->
    <div class="paging" v-show="pageShow==true">
        <a @click="getPrePage" :style="fonta | fontFilter">上一页</a>
        <a @click="getPage(1)" :style="color1 | colorFilter">1</a>
        <a @click="getPage(2)" :style="color2 | colorFilter">2</a>
        <a @click="getPage(3)" :style="color3 | colorFilter">3</a>
        <a @click="getNextPage" :style="fontb | fontFilter">下一页</a>
    </div>
    <qihoo-client-back-top></qihoo-client-back-top>
    <qihoo-client-footer></qihoo-client-footer>
  </div>
</template>
<script>
  import QihooClientHeader from "../components/QihooClientHeader";
  import QihooClientFooter from "../components/QihooClientFooter";
  import QihooClientBackTop from "../components/QihooClientBackTop";
  import QihooClientGoodsClassListDetailList from "../components/QihooClientGoodsClassListDetailList";
    export default {
      name: "QihooClientGoodsClassify",
      data(){
        return{
          //请求所有商品数据表中的数据(分页)
          allgoodspage:[],
          //请求分类数据表中的数据
          classifygoods:[],
          //商品列表渲染的数据
          goodsdetail:{},
          pageShow:false,
          page:1,
          color1:"#23ac38",
          color2:"white",
          color3:"white",
          fonta:"#dddddd",
          fontb:"#666666"
        }
      },
      methods:{
        //点击nav类型列表 渲染该类型商品
        //上个页面跳转
        getClassId(){
          //page切换页面隐藏
          this.pageShow=false;
          let urlStr = window.location.href;
          let classIdStr = urlStr.split("?")[1];
          if(classIdStr == undefined){
            this.goodsdetail=this.classifygoods[0];
          }else{
            for(let i=0;i<this.classifygoods.length;i++){
              if(this.classifygoods[i].classid==classIdStr){
                this.goodsdetail=this.classifygoods[i];
              }
            }
          }
        },
        //当前页面nav点击  渲染该类型商品
        getNavClassId(a){
          //page切换页面隐藏
          this.pageShow=false;
          for(let i=0;i<this.classifygoods.length;i++){
            if(this.classifygoods[i].classid==a){
              this.goodsdetail=this.classifygoods[i];
            }
          }
        },
       // 获取页面值
        getPrePage(){
          if(this.page==1){
            this.page=1;
          }else{
            this.page-=1;
          }
          this.getGoods(this.page);
        },
        getNextPage(){
          if(this.page==3){
            this.page=3;
          }else{
            this.page+=1;
          }
          this.getGoods(this.page);
        },
        getPage(n){
          this.page=n;
          this.getGoods(this.page);

        },
        //获取该页面商品
        getGoods(page){
          //page切换页面显示
          this.pageShow=true;
          for(let i=0;i<this.allgoodspage.length;i++){
            if(this.allgoodspage[i].pageid==page){
              this.goodsdetail=this.allgoodspage[i];
            }
          }
          if(this.page==1){
            this.fonta="#dddddd";
            this.fontb="#666666";
            this.color1="#23ac38";
            this.color2="white";
            this.color3="white";
          }else if(this.page==2){
            this.fonta="#666666";
            this.fontb="#666666";
            this.color1="white";
            this.color2="#23ac38";
            this.color3="white";
          }else{
            this.fonta="#666666";
            this.fontb="#dddddd";
            this.color1="white";
            this.color2="white";
            this.color3="#23ac38";
          }
        }
      },
      filters:{
        //背景色设置
        colorFilter(val){
          return "background:"+val+";";
        },
        //字体颜色设置
        fontFilter(val){
          return "color:"+val+";";
        }
      },
      created(){
        fetch("http://localhost:9999/api/goodsclassify").then(response=>{
          response.json().then(data=>{
            this.classifygoods = data.goodsdata;
            this.getClassId();
          })
        });
        fetch("http://localhost:9999/api/allgoodspage").then(response=>{
          response.json().then(data=>{
            this.allgoodspage = data.goodsdata;
          })
        })
      },
      components: {
        QihooClientGoodsClassListDetailList,
        QihooClientBackTop,
        QihooClientFooter,
        QihooClientHeader
      }
    }
</script>

<style scoped>
  section{
    width: 100%;
    height: 99px;
    background: white;
  }
  .section_content{
    width: 1241px;
    height: 100%;
    margin:0 auto;
  }
  .section_1{
    width: 100%;
    height: 48px;
    border-bottom: 1px solid #e8e8e8;
  }
  .section_1 p{
    float:left;
    font-size: 12px;
    color:#848484;
    line-height: 48px;
  }
  .section_1 p:hover{
    color: #23ac38;
  }
  .section_1 h3{
    float:left;
    font-size: 12px;
    color:#848484;
    line-height: 48px;
    text-indent: 8px;
    font-weight: 100;
  }
  .section_1 h3:hover{
    color: #23ac38;
  }
  .paging{
    width:100%;
    background:#f5f5f5;
    padding:40px 0;
    display:-webkit-flex;
    -webkit-justify-content: center;
  }
  .paging a{
    display:block;
    padding:10px 14px;
    border: 1px solid #dddddd;
    font-size: 12px;
    margin-right:8px;
    color: #08159D;
    background: white;
  }
  .paging a:hover{
    border: 1px solid #23ac38;
    color:#08159D;
  }
</style>
