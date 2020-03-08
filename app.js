var express = require("express");


var app = express();


app.get("/", function(req,res){
    res.send("Hello World");
})

app.get("/users", function(req,res){
    res.send("User route");
})

app.listen(9999,function(){
    console.log("Server Connected");
})