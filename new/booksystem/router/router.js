var Book = require("../models/Book.js");

//显是首页
exports.showIndex = function(req,res,next){
  Book.liechusuoyoushu(function (err,result) {
      res.render("index",{
          "tushu":result
      });
  })
}
//添加图书的页面
exports.addbook = function(req,res,next){
  res.render("addbook")
}
//真正保存到数据库  只关心对象不关心数据库
exports.doadd = function(req,res,next){
  // console.log(req.query)
    Book.create(req.query,function(err){
      if(err){
        res.send("保存失败")
      }
      res.send("保存成功")
    })
}
exports.showEdit = function (req,res,next) {
  Book.findbookByName(req.query.name,function (err,result) {
    // console.log(result);
      res.render("edit",
        result[0]
      );
  })
}
// exports.doedit = function (req,res,next) {
//     Book.update()
// }
