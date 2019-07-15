//倒计时
function countTime() {
    var date = new Date(); //获取当前时间
    var now = date.getTime();
    var endDate = new Date("2019-6-20 00:00:00");//设置截止时间
    var end = endDate.getTime();
    var leftTime = end - now; //时间差
    var d, h, m, s, ms;
    if(leftTime >= 0) {
        // d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
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
    // document.getElementById("_ms").innerHTML = ms + "毫秒";
    //递归每秒调用countTime方法，显示动态时间效果
    setTimeout(countTime, 50);
}
