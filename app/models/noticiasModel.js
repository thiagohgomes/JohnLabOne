module.exports = function(){
	this.getNoticias = function(connection, callback){
		connection.query("SELECT * FROM noticias", callback);
	}

	return this;
}