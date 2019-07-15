var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get("/api/goodsIndex", (req, res) => { //获取首页的数据
    res.json(require("../data/yanxuanGoods"));
});

router.get("/api/goodsClassify", (req, res) => { //获取分类的数据
    res.json(require("../data/yanxuanGoods"));
});

router.get("/api/goodsKnow", (req, res) => { //获取识物的数据
    res.json(require("../data/knowGoods"));
});

router.post("/api/register", (req, res) => {//注册功能：将用户名密码保存至json文件
    var params = req.body;
    fs.readFile("./data/user.json", function (err, data) {//读取json，读出来的是二进制
        if (err) {
            return console.error(err);
        }
        var dataString = data.toString();  //二进制的数据转换为字符串
        var dataJson = JSON.parse(dataString); //字符串转化为json对象
        dataJson.userInfo.push(params);  //将传来的对象push进json文件
        var str = JSON.stringify(dataJson);
        //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile("./data/user.json", str, function (err) {
            if (err) {
                console.error(err);
            }
            console.log("用户注册操作，OK");
            res.json({
                "state": 1
            });
        });
    })
});

router.post("/api/register/isRepeatUser", (req, res) => {//注册功能：判断用户名是否注册过
    var params = req.body;
    fs.readFile("./data/user.json", function (err, data) {//读取json，读出来的是二进制
        if (err) {
            return console.error(err);
        }
        var dataString = data.toString();  //二进制的数据转换为字符串
        var dataJson = JSON.parse(dataString); //字符串转化为json对象
        for(var i=0;i<dataJson.userInfo.length;i++){
            if(params.username==dataJson.userInfo[i].username){
                console.log("用户名重复")
                res.json({
                    "state": 0,
                })
            }
        }
    })
});

router.post("/api/login", (req, res) => {//登录功能：查看账号和密码是否正确
    var params = req.body;
    fs.readFile("./data/user.json", function (err, data) {//读取json，读出来的是二进制
        if (err) {
            return console.error(err);
        }
        var dataString = data.toString();  //二进制的数据转换为字符串
        var dataJson = JSON.parse(dataString); //字符串转化为json对象

        let flag=false;
        for(var i=0;i<dataJson.userInfo.length;i++){
            if(params.username==dataJson.userInfo[i].username &&
                params.userpass==dataJson.userInfo[i].userpass){
                console.log("登录成功");
                flag=true;
                res.json({
                    "state": 1,
                })
            }
        }
        if(flag==false){
            console.log("登录失败")
            res.json({
                "state": 0,
            })
        }
    })
});

router.get("/api/carts", (req, res) => { //获取购物车的数据
    res.json(require("../data/myCart"));
});
router.post("/api/carts/addGoods", (req, res) => { //向购物车添加数据
    var params = req.body;
    fs.readFile("./data/myCart.json", function (err, data) {//读取json，读出来的是二进制
        if (err) {
            return console.error(err);
        }
        var dataString = data.toString();  //二进制的数据转换为字符串
        var dataJson = JSON.parse(dataString); //字符串转化为json对象
        let flag=false;
        for(let i=0; i< dataJson.products.length; i++){//有相同Id的，在前面的基础上增加
            if(dataJson.products[i].productId== params.productId){
                dataJson.products[i].productNum+=1;
                flag=true;
            }
        }
        if(!flag){
            dataJson.products.push(params); //将传来的对象push进json文件
        }
        dataJson.totNum+=1;
        var str = JSON.stringify(dataJson);
        //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile("./data/myCart.json", str, function (err) {
            if (err) {
                console.error(err);
            }
            console.log("购物车添加成功");
            res.json(require("../data/myCart"));
        });

    })
});

router.post("/api/carts/redusGoods", (req, res) => { //向购物车减少数据
    var params = req.body;
    fs.readFile("./data/myCart.json", function (err, data) {//读取json，读出来的是二进制
        if (err) {
            return console.error(err);
        }
        var dataString = data.toString();  //二进制的数据转换为字符串
        var dataJson = JSON.parse(dataString); //字符串转化为json对象
        dataJson.totNum-=1;
        for(let i=0; i< dataJson.products.length; i++){//有相同Id的，在前面的基础上减少
            if(dataJson.products[i].productId== params.productId){
                dataJson.products[i].productNum-=1;
            }
        }
        var str = JSON.stringify(dataJson);
        //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile("./data/myCart.json", str, function (err) {
            if (err) {
                console.error(err);
            }
            console.log("购物车减少成功");
            res.json(require("../data/myCart"));
        });

    })
});

router.post("/api/carts/delGoods", (req, res) => { //向购物车删除数据
    var params = req.body;
    fs.readFile("./data/myCart.json", function (err, data) {//读取json，读出来的是二进制
        if (err) {
            return console.error(err);
        }
        var dataString = data.toString();  //二进制的数据转换为字符串
        var dataJson = JSON.parse(dataString); //字符串转化为json对象
        dataJson.products.splice(params.index, 1);
        var totNum=0;
        for(let i=0; i< dataJson.products.length; i++){
            totNum+=dataJson.products[i].productNum
        }
        dataJson.totNum = totNum;
        var str = JSON.stringify(dataJson);
        //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile("./data/myCart.json", str, function (err) {
            if (err) {
                console.error(err);
            }
            console.log("购物车删除成功");
            res.json(require("../data/myCart"));
        });

    })
});
module.exports = router;