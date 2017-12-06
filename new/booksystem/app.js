var express = require("express");
var app = express();
var router = require("./router/router.js")
app.set("view engine","ejs");

app.get("/",router.showIndex);
app.get("/addbook",router.addbook);
app.get("/doadd",router.doadd);
app.listen(3000);