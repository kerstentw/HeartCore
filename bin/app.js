var express = require("express")
var app = express()
var path = require("path")
fs = require("fs")
app.use('/static',express.static('static'))

PORT = 9999

var cast = JSON.parse(fs.readFileSync('static/js/cast.json',"utf8"));


app.get('/',function(req,res){
	//res.render("");
	res.sendFile(path.join(__dirname + "/templates/index.html"));
        	

})


app.listen(PORT,function(req, res){
	console.log("Running From:" + __dirname)
        console.log("NOTE: If Images are broken, run app from outside bin")
	console.log("Listening on Port:" + PORT)
})
