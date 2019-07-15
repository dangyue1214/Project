function navChange(){
    // $("main").scroll( function() {
    // //当前页面滚动的距离
    //     // let _top=$("main").scrollTop();
    //     let _top=$(".srcTop").scrollTop();
    //     if( _top==0){
    //         console.log(1)
    //         // $(".nav-box  li:eq(1) a span").css({
    //         //     "color":"red",
    //         //     "borderRight":"0.04rem solid red"});
    //         // $(".nav-box  li:eq(1)").siblings.css({
    //         //     "color":"black",
    //         //     "borderRight":"none"})
    //         $(".nav-item a span").addClass("spanColorChange");
    //     }
    // })
    // var liDom2=document.getElementsByClassName('nav-item')[1]
    // liDom2.onclick=function(){
    //     huaweiPhone.scrollTop=0;
    // }
    $(".nav-box  li:eq(1)").click(function(){
            $(".nav-box  li:eq(1) a span").css({
                "color":"red",
                "borderRight":"0.04rem solid red"})
        // $(".nav-item a span").addClass("spanColorChange");
        // console.log($(".nav-box  li:eq(1)").siblings);
        // $(".nav-box  li:eq(1)").siblings.css({
        //     "color":"black",
        //     "borderRight":"none"})
    })
}


// .main-nav .nav-box li:nth-of-type(1) a span{
//     color:red;
//     border-right:0.04rem solid red;
// }