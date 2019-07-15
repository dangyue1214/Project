var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/'; // 配置文件的路径



router.get("/api/headergoods",(req,res)=>{
    res.json(require("../qihoo_client/src/data/headergoods.json"))
});
router.get("/api/activitygoods",(req,res)=>{
    res.json(require("../qihoo_client/src/data/sales.json"))
});
router.get("/api/goodsclassify",(req,res)=>{
    res.json(require("../qihoo_client/src/data/goodsclassify.json"))
});
router.get("/api/allgoods",(req,res)=>{
    res.json(require("../qihoo_client/src/data/allgoods.json"))
});
router.get("/api/allgoodspage",(req,res)=>{
    res.json(require("../qihoo_client/src/data/allgoodspage.json"))
});
router.get("/api/cartsgoods",(req,res)=>{
    res.json(require("../qihoo_client/src/data/cartsgoods.json"))
});
router.get("/api/user",(req,res)=>{
    res.json(require("../qihoo_client/src/data/user.json"))
});
router.get("/",(req,res)=>{
    res.sendFile(path.resolve("../qihoo_client","index.html"))
});
router.get("/api/adminAllGoods",(req,res)=>{
    res.json(require("../qihoo_admin/src/data/allgoods.json"))
});
router.get("/api/adminManagement",(req,res)=>{
    res.json(require("../qihoo_admin/src/data/manage.json"))
});


module.exports = router;
