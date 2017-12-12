//引包
var mongoose = require("mongoose");
//链接数据库
mongoose.connect('mongodb://localhost/xuanke');

var db = mongoose.connection;
db.once('open',function (callback) {
    console.log("数据库成功打开");
});
//学生//
var studentSchema = new mongoose.Schema({
    "name":String,
    "age":Number,
    "sex":String
});
var Student = mongoose.model("Student",studentSchema);
// 课程
var kechengSchema = new mongoose.Schema({
    "name":String,
    "info":String,
    "student":[studentSchema]
});
var Kecheng = mongoose.model("Kecheng",kechengSchema);
//实例化几个学生
Student.create({"name":"小明","age":12,"sex":"男"});
Student.create({"name":"小红","age":10,"sex":"女"});
Student.create({"name":"小墙","age":11,"sex":"男"});
Student.create({"name":"小花花","age":11,"sex":"女"});