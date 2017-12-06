//引包
var mongoose = require("mongoose");
//链接数据库
mongoose.connect('mongodb://localhost/haha');
var Cat = mongoose.model('cat',{name:String});
var kitty = new Cat({name: 'liulian'});
kitty.save(function (err) {
    console.log("miaofj");
})