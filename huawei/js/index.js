// $(function(){
//     scroTop();
// })
// 滚动条滚动的距离，图标显示
function scroTop(){
     //首页的图标显示
    $("main").scroll( function() {
        //当前页面滚动的距离
        let _top=$("main").scrollTop();
        if(_top >= 1000){
            console.log(2)
            $(".backIcon").css({"display":"block"});
        } else {
            $(".backIcon").css({"display":"none"});
        }
    } );

    //详情页的图标显示
    $(window).scroll( function() {
        //当前页面滚动的距离
        let _top=$(window).scrollTop();
        if(_top >= 1000){
            console.log(2)
            $(".backIcon").css({"display":"block"});
        } else {
            $(".backIcon").css({"display":"none"});
        }
    } );
}
//返回顶部
function goTop(){
    $(".backIcon").click(function(){
        //首页的返回顶部
        $("main").scrollTop(0);

        //详情页的返回顶部
        $(window).scrollTop(0);
    })
}
//倒计时
function countTime() {
    var date = new Date(); //获取当前时间
    var now = date.getTime();
    var endDate = new Date(this.goodsIndex.seckill);//设置截止时间
    var end = endDate.getTime();
    var leftTime = end - now; //时间差
    var d, h, m, s, ms;
    if(leftTime >= 0) {
        h = Math.floor(leftTime / 1000 / 60 / 60);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
        ms = Math.floor(leftTime % 1000);
        if(ms < 100) {
            ms = "0" + ms;
        }
        if(s < 10) {
            s = "0" + s;
        }
        if(m < 10) {
            m = "0" + m;
        }
        if(h < 10) {
            h = "0" + h;
        }
    } else {
        console.log('已截止')
    }
    //将倒计时赋值到div中
    // document.getElementById("_d").innerHTML = d + "天";
    document.getElementById("_h").innerHTML = h ;
    document.getElementById("_m").innerHTML = m ;
    document.getElementById("_s").innerHTML = s ;
    //递归每秒调用countTime方法，显示动态时间效果
    setTimeout(countTime, 50);
}

