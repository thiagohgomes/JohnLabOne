var app = require('./config/server');
app.listen(process.env.PORT || 8080, function(){
	console.log('servidor online');
	
	res.writeHead(200, { 'Content-Type': 'text/html' });
    	res.end('Hello, world!');
})
