/*
var app = require('./config/server');
app.listen(process.env.PORT || 80, function(){
	console.log('servidor online');
})
*/

var app = require('config/server');

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, worlds!');
    
}).listen(process.env.PORT || 8080);
