const express = require("express")
const path = require("path")
const app = express()
//跨域资源共享设置
app.all('*', function (req, res, next) {
    if (req.path !== "/" && !req.path.includes(".")) {
        res.header('"Access-Control-Allow-Credentials", true');
        res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("Content-Type", "application/json;charset=utf-8");
    }
    next();
});
app.use(express.static(__dirname));
app.get("/api/headergoods",(req,res)=>{
    res.json(require("../qihoo_client/src/data/headergoods.json"))
});
app.get("/api/activitygoods",(req,res)=>{
    res.json(require("../qihoo_client/src/data/sales.json"))
});
app.get("/api/goodsclassify",(req,res)=>{
    res.json(require("../qihoo_client/src/data/goodsclassify.json"))
});
app.get("/api/allgoods",(req,res)=>{
    res.json(require("../qihoo_client/src/data/allgoods.json"))
});
app.get("/api/allgoodspage",(req,res)=>{
    res.json(require("../qihoo_client/src/data/allgoodspage.json"))
});
app.get("/api/cartsgoods",(req,res)=>{
    res.json(require("../qihoo_client/src/data/cartsgoods.json"))
});
app.get("/api/user",(req,res)=>{
    res.json(require("../qihoo_client/src/data/user.json"))
});
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("../qihoo_client","index.html"))
});
app.get("/api/adminAllGoods",(req,res)=>{
    res.json(require("../qihoo_admin/src/data/allgoods.json"))
});
app.get("/api/adminManagement",(req,res)=>{
    res.json(require("../qihoo_admin/src/data/manage.json"))
});
app.listen(9999,()=>{
    console.log("server is ready on port 9999")
});
