//引包
var mongoose = require("mongoose");

//Schema
var studentSchema = new mongoose.Schema({
    "name":String,
    "age":Number,
    "sex":String
});
//model
var Student = mongoose.model("Student",studentSchema);
module.exports = Student;
