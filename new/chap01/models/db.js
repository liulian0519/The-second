//引包
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/hahaha');

db.once('open',function (callback) {
    console.log("数据库连接成功")
})