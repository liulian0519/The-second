//引包
var mongoose = require("mongoose");
//链接数据库
mongoose.connect('mongodb://localhost/StudentMangment');

var db = mongoose.connection;
db.once('open',function (callback) {
    console.log("数据库成功打开");
});
module.exports = db;