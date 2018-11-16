module.exports = function(app){
    app.get('/noticias', function(req,res){

    	var connection = app.config.dbConnection();    
		var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(error, result){
            if(result != null)
            	res.render('noticias/noticias', { noticias : result });
            else
            	res.send(error);
        });
        
    });
}