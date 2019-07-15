/**
 * banner部分的轮播图
 */
var mySwiper = new Swiper('.swiper-container_0', {
    direction: 'horizontal',
    loop: true,
    autoplayDisableOnInteraction: false,
    autoplay: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination_0',
        clickable: true,
    },
})

// 板块section1中的限时抢购轮播图
var mySwiper_1 = new Swiper('.swiper-container_1', {
    direction: 'horizontal',
    // loop: true,
    autoplayDisableOnInteraction: false,
    effect: 'coverflow',
    slidesPerView: 3,
    centeredSlides: true,
    coverflow: {
        rotate: 90,
        stretch: 2,
        depth: 60,
        modifier: 2,
        slideShadows: true
    }
})

//板块section1中的限时抢购轮播图(右侧抹茶)
var mySwiper_2 = new Swiper('.swiper-container_2', {
    direction: 'horizontal',
    loop: true,
    autoplayDisableOnInteraction: false,
    autoplay: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination_2',
        clickable: true,
    },


})


/**
 * 导航栏与section内容的切换
 * 导航栏点击第三 四 五个的时候,滚动条自动切换到指定位置
 */
$("li").click(function () {
    $(this).find("span").addClass("nav_active").parent().siblings().find("span").removeClass("nav_active");
    let index = $(this).index();
    $($(".eve_section")[index]).show().siblings().hide();
    if (index < 3) {
        $('ul').scrollLeft(0);
    } else if (index == 3) {
        $('ul').scrollLeft(47);
    } else {
        $('ul').scrollLeft(94);
    }
})


/**
 * 滚动至某个阶段,
 * 1. header部分消失
 * 2.导航栏被固定
 */
$(".grail").scroll(function () {
    //1. header部分消失
    if ($(".grail").scrollTop() >= 80) {
        $("header").slideUp(300);
    } else {
        $("header").slideDown(300);
    }

    //2.导航栏被固定
    if ($(".grail").scrollTop() >= 467) {
        $("nav").css({ "position": "fixed" })
    } else {
        $("nav").css({ "position": "static" })
    }
})

/**
 * grail部分向下拖动回弹的效果
 */


