var express = require("express");
var app = express();
var router = require("./router/router.js");
var db = require("./models/db.js");


app.set("view engine","ejs");
app.get("/",router.showIndex);
app.get("/add",router.showAdd);
app.get("/doAdd",router.doAdd);
app.get("/edit/:sid",router.edit);
app.listen(3000);