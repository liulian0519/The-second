//引包
var mongoose = require("mongoose");

//Schema
var kechengSchema = new mongoose.Schema({
    "kid":Number,
    "name":String,
    "students":[Number]     //这个数组存放sid

});
kechengSchema.index({"kid":1});
//model
var Kecheng = mongoose.model("Kecheng",kechengSchema);
module.exports = Kecheng;
