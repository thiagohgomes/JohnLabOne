var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
    app.get('/noticias', function(req,res){

    	var connection = dbConnection();    

        connection.query("SELECT * FROM noticias", function(error, result){
            if(result != null)
            	res.render('noticias/noticias', { noticias : result });
            else
            	res.send(error);
        });
        
    });
}