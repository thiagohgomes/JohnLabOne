/*
var app = require('./config/server');
app.listen(process.env.PORT || 80, function(){
	console.log('servidor online');
})
*/
var http = require('http');

http.createServer(function (req, res) {
    //var app = require('config/server');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world!');
    
}).listen(process.env.PORT || 8080);
