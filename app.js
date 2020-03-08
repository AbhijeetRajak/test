var express = require("express");

var env = require("dotenv"); 
env.config();
var app = express();

console.log(process.env);

var PORT = process.env.PORT || 9999;
app.get("/", function(req,res){
    res.send("Hello World");
})

app.get("/users", function(req,res){
    res.send("User routes ");
})

app.listen(9999,function(){
    console.log("Server Connected");
})