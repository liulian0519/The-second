//引包
var mongoose = require("mongoose");
//链接数据库
mongoose.connect('mongodb://localhost/haha');

var db = mongoose.connection;
db.once('open',function (callback) {
    console.log("数据库成功打开");
});
var blogSchema = new mongoose.Schema({
    title : String,
    author : String,
    body:String,
    comments:[{body:String,date:Date}]
});
//发表评论
blogSchema.methods.pinglun = function (obj,callback) {
    this.comments.push(obj);
    this.save();
}

var Blog = mongoose.model('Blog',blogSchema);
// var blog = new Blog({
//     "title":"test",
//     "author":"liulian",
//     "body":"hahahaha"
// });
Blog.findOne({"title":"test"},function (err,blog) {
    if(!blog){
        return;
    }
    blog.pinglun({"body":"再来一条","date":new Date()})
})
// blog.pinglun({"body":"neirong","date":new Date()})
