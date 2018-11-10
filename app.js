var app = require('./config/server');
app.listen(process.env.PORT || 8080, function(){
	console.log('servidor online');
	
	alert('online')
})
