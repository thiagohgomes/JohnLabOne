module.exports = function(application){
	application.get('/', function(req, res){
		res.render('index');
	});
	application.get('/autenticado', function(req, res){
		res.render('restrictpage');
	});

	application.post('/autenticar', function(req, res){
		res.send('chegando aqui')
	})


}