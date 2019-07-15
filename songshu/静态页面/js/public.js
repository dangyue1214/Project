/**
 * 点击返回,返回上一级
 */
 $(".back").click(function(){
     history.back(-1);
 });

 /**
 * 滚动至某个阶段,
 * 出现顶部返回按钮
 */
$(".grail").scroll(function () {
    //出现顶部返回按钮
    if ($(".grail").scrollTop() >= 380) {
        $(".but_r_b").slideDown(300);
    } else {
        $(".but_r_b").slideUp(300);
    }
})

//点击顶部返回
$(".return_r_b").click(function () {
    $(".grail").scrollTop(0);
})