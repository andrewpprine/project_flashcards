var express = require('express');
var app = express();
var path = require("path");

app.use(express.static("public"));

app.get("/testing", function(req,res){
	res.send("Hello world!");
})

app.listen(3000, function(){
	console.log('listening on 3000');
});


