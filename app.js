var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
<<<<<<< HEAD
    res.render('home/index');
});

app.get('/formulario_inclusao_noticia', function(req,res){
    res.render('admin/form_add_noticia');
});

app.get('/noticias', function(req,res){
    res.render('noticias/noticias');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor rodando com Express");
});


/*
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
=======
>>>>>>> cdd6235d48a0be8de81cce404fc573b47f06243a
    res.send("<html><body>Portal de Notícias</body></html>");
});

app.get('/tecnologia', function(req,res){
    res.render('secao/tecnologia');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor rodando com Express");
});
<<<<<<< HEAD
*/
=======

>>>>>>> cdd6235d48a0be8de81cce404fc573b47f06243a


/*
var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("<html><body>Portal de Notícias</body></html>")
})

app.listen(process.env.PORT || 3000, function(){
	console.log('servidor online com express.');
})
*/


/*
var http = require('http');

var server = http.createServer(function(req,res){
    var categoria = req.url;
    if(categoria == '/tecnologia'){
        res.end("<html><body>Notícias de Tecnologia</body></html>");
    }else if(categoria == '/moda'){
        res.end("<html><body>Notícias de Moda</body></html>");
    }else if(categoria == '/beleza'){
        res.end("<html><body>Notícias de Beleza</body></html>");
    }else{
        res.end("<html><body>Portal de Notícias</body></html>");
    }
});

server.listen(process.env.PORT || 3000);

console.log('servidor online');
*/


/*
var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

var server = http.createServer(function (req, res) {
        res.writeHead(200);
        res.write(html);
        res.end();
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
*/

/*
var app = require('./config/server');
app.listen(80, function(){
	console.log('servidor online');
})
*/


