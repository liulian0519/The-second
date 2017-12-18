//引包
var mongoose = require("mongoose");

//Schema
var studentSchema = new mongoose.Schema({
    "sid":Number,
    "name":String,
    "age":Number,
    "sex":String,
    "kengchengs":[Number]     //存放课程主键kid
});
studentSchema.index({"sid":1});
//model
var Student = mongoose.model("Student",studentSchema);
module.exports = Student;
