var mongoose = require("mongoose");
var Student = require("../models/Student.js")

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
    res.render("add");
}
//执行插入
exports.doAdd = function (req,res,next) {
    //存储数据
    Student.create(req.query,function () {
        // console.log("插入成功");
        res.send("插入成功")
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
        res.render("edit",{
            "student":result
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