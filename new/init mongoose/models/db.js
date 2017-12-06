//引包
var mongoose = require('mongoose');
//创建数据库连接
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/hahaha');

db.once('open',function (callback) {
    console.log("数据库连接成功")
})
module.exports = db;