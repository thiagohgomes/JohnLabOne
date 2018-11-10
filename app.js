var app = require('./config/server');
app.listen(process.env.PORT || 80, function(){
	console.log('servidor online');
})
