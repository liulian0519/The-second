var mongoose = require('mongoose');
var db = require("./db.js");
var ObjectId = require("mongodb").ObjectId();
//创建了一个schema结构
var bookSchema = new mongoose.Schema({
    name :{type:String},
    author :{type:String},
    price : {type:Number},
    // type : {type:Array}
});
//创建静态方法
//列出所有图书
bookSchema.statics.liechusuoyoushu = function(callback){
    return this.model('Book').find({},callback);
}
//根据—_id 查找图书
bookSchema.statics.findbookByName = function(name,callback){
    return this.model('Book').find({"name":name},callback);
}
//创建修改的静态方法
// studentSchema.statics.xiugai = function (conditions,update,options,callback) {
//     this.model("Student").update(conditions,update,options,callback);
// }


//创建了一个学生模行，就是学生类
var bookModel = db.model('Book',bookSchema)

module.exports = bookModel;