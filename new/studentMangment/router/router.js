var mongoose = require("mongoose");
var Student = require("../models/Student.js")
var Kecheng = require("../models/Kecheng.js");
// Kecheng.create({ "kid":100, "name":"高数"});
// Kecheng.create({ "kid":101, "name":"离散"});
// Kecheng.create({ "kid":103, "name":"c语言"});//
//首页
exports.showIndex = function (req,res,next) {
    Student.find({},function (err,result) {
        res.render("index",{
            "students":result
        });
    });

}
//显示插入
exports.showAdd = function (req,res,next) {
    Kecheng.find({},function (err,result) {
        res.render("add",{
            "quanbukecheng":result
        });
    });

}
//执行插入
exports.doAdd = function (req,res,next) {
    //存储数据
    //req.query.kengchengd  -> [100,102]
    Student.create(req.query,function () {
        // console.log("插入成功");
        Kecheng.tianjiaxuesheng(req.query.kengchengs,req.query.sid,function (err,result) {
            res.send("插入成功");
        })

    });
}
//修改
exports.edit = function (req,res,next) {
    //修改
    var sid =parseInt(req.params["sid"]);
    Student.findOne({"sid":sid},function (err,result) {
        if(err || !result){

            res.send("错误");
            return;
        }
        Kecheng.find({},function (err,result2) {
            res.render("edit",{
                "student":result,
                "quanbukecheng":result2
            });
        });

    });
}
//执行修改
exports.doEdit = function (req,res,next) {
   var sid = req.params["sid"];
   Student.update({"sid":sid},req.query,function () {
       res.send("修改成功");
   })
}
//删除
exports.remove = function (req,res,next) {
    var sid = req.params["sid"];
    Student.remove({"sid":sid},function () {
        res.send("删除成功");
    });
}