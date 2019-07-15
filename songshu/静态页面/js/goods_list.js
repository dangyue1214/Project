/**
 * 分类和发现的切换
 */
$("header span").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    let index=$(this).index();
    $($("section")[index]).css({"display":"flex"}).siblings("section").css({"display":"none"});

})
/**
 * 分类里面的 商品切换
 * 点击第二个 第三个 滚动条自动上仪
 */
$("aside div").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    let index=$(this).index();
    $($(".eve_article")[index]).addClass("art_active").siblings().removeClass("art_active");
    if(index==1){
        $("aside").scrollTop(146);
    }
    if(index==2){
        $("aside").scrollTop(292);
    }
})

/**
 * 
 */
