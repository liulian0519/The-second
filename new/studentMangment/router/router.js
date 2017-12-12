var mongoose = require("mongoose");
var Student = require("../models/Student.js")
exports.showAdd = function (req,res,next) {
    res.render("add");
}
exports.doAdd = function (req,res,next) {
    //存储数据
Student.create(req.query,function () {
    console.log("插入成功");
})

}