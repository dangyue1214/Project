window.onload = function() {
    //头部搜索内容
    var mySwiper1 = new Swiper ('.swiper-container1', {
        effect : 'fade',
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 3000,//3秒切换一次
        },
        loop: true, // 循环模式选项
    })

    //banner图
    var mySwiper2 = new Swiper ('.swiper-container2', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 自动播放
        autoplay:{
            delay: 2000,//2秒切换一次
        },   
    }) 
    
    //商城头条
    var mySwiper3 = new Swiper ('.swiper-container3', {
        direction: 'vertical',
        loop: true, // 循环模式选项
        // 自动播放
        autoplay:{
            delay: 2000,//2秒切换一次
        },   
    })

    //商品详情轮播图
    var mySwiper3 = new Swiper ('.swiper-container4', {
        // direction: 'vertical',
        loop: true, // 循环模式选项
        // 自动播放
        autoplay:{
            delay: 2000,//2秒切换一次
        },   
    })
}