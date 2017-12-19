var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req,res) {
   if(req.url == "/"){
       fs.readFile("./index.html",function (err,data) {
           res.end(data);
       });
   }
});
var io = require('socket.io')(server);
//监听连接事件
io.on("connection",function (socket) {
    console.log("1个客户端连接了");
})
server.listen(3000,"127.0.0.1")