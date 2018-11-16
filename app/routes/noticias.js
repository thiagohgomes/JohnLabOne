module.exports = function(app){
    app.get('/noticias', function(req,res){

        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'node_mobile.mysql.dbaas.com.br',
            user: 'node_mobile',
            password: 'Lancamento@31',
            database: 'node_mobile'
        });

        connection.query("SELECT * FROM noticias", function(error, result){
            if(result != null)
            	res.send(result);
            else
            	res.send(error);
        });

        //res.render('noticias/noticias');
    });
}