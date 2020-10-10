var express = require('express')
var app = express()
var http = require('http').createServer(app)

var port = 3200;

app.use(express.static('./public'))

http.listen(port,function(){
    console.log(`Served on port ${port}`);
})
