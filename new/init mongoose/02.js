//引包
var mongoose = require("mongoose");
//链接数据库
mongoose.connect('mongodb://localhost/haha');

var db = mongoose.connection;
db.once('open',function (callback) {
    console.log("数据库成功打开");
});
var animalSchema = new mongoose.Schema({
    "name" : String,
    "type" : String
});
animalSchema.methods.zhaotonglei = function (callback) {
    this.model('Animal').find({"type":this.type},callback);
}
var Animal = mongoose.model('Animal',animalSchema);
// Animal.create({"name":"汤姆","type":"猫"});
// Animal.create({"name":"加菲猫","type":"猫"});
// Animal.create({"name":"puppy","type":"狗"});
// Animal.create({"name":"snoopy","type":"狗"});

Animal.findOne({"name":"puppy"},function (err,result) {
    // console.log(result);
    var dog = result
    dog.zhaotonglei(function (err,result) {
        console.log(result);
    })
})
