var express = require("express");
var app = express();

//socket.io公式
var http = require('http').Server(app);
var io = require('socket.io')(http);
//session 公式
var session = require("express-session")
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

//模板引擎
app.set("view engine","ejs");
var alluser = [];
//首页
app.get("/",function (req,res,next) {
    res.render("index");
});
//
app.get("/check",function (req,res,next) {
    var yonghuming = req.query.yonghuming;
    if(!yonghuming){
        res.send("必须填写用户名");
        return;
    }
    if(alluser.indexOf(yonghuming) != -1){
        res.send("用户名已经被占用");
        return;
    }
    alluser.push(yonghuming);
    //付给session
    req.session.yonghuming = yonghuming;
    res.redirect("/chat");


})

//监听
http.listen(3000);