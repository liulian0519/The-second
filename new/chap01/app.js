var db = require("./models/db.js");
//定义了一个模型，学生模型 “学生类”
var Student = require("./models/Student.js");
//实例化了一个学生类
var xiaoming = new Student({"name":"小明","age":12,"sex":'男'});
//保存
xiaoming.save(function () {
    console.log("存储成功");
});