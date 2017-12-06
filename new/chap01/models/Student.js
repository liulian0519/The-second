var mongoose = require('mongoose');
var db = require("./db.js")
//创建了一个schema结构
var studentSchema = new mongoose.Schema({
    name :{type:String},
    age :{type:Number},
    sex : {type:String}
});
//创建了一个学生模行，就是学生类
var studentModel = db.model('Student',studentSchema)
module.exports = studentModel;