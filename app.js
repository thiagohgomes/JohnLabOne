/*
var app = require('./config/server');
app.listen(process.env.PORT || 8080, function(){
	console.log('servidor online');
})
*/

var app = require('./config/server');
app.listen(process.env.PORT || 8080, function(){});


/*var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, worlds!');
    
}).listen(process.env.PORT || 8080);
*/
