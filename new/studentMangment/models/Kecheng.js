//引包
var mongoose = require("mongoose");

//Schema
var kechengSchema = new mongoose.Schema({
    "kid":Number,
    "name":String,
    "students":[Number]     //这个数组存放sid

});
kechengSchema.index({"kid":1});
kechengSchema.statics.tianjiaxuesheng = function (kidarray,sid,callback) {
    for(var i =0;i<kidarray.length;i++){
        Kecheng.update({"kid":kidarray[i]},{$push : {"students":sid}},function (err,result) {
            console.log("添加报名成功");
        })
    }
}
//model
var Kecheng = mongoose.model("Kecheng",kechengSchema);

module.exports = Kecheng;
