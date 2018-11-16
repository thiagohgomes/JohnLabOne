var mysql = require('mysql');

module.exports = function(){
	return mysql.createConnection({
	    host: 'node_mobile.mysql.dbaas.com.br',
	    user: 'node_mobile',
	    password: 'Lancamento@31',
	    database: 'node_mobile'
	});
}