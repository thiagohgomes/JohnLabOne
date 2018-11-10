var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world!');
    
}).listen(process.env.PORT || 8080);
/*
var app = require('./config/server');
app.listen(80, function(){
	console.log('servidor online');
})
*/
