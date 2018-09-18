var express = require('express');
var app = express();
var path = require("path");
var port = 3000;

app.use(express.static("public"));

app.get("/testing", function(req,res){
	res.send("Hello world!");
})

app.listen(port, function(){
	console.log('listening on port:'+ port);
});


