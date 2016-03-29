// importar
var express = require('express'),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
 
// instanciar
var app = express();
 
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

// route middleware that will happen on every request
router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next(); 
});

router.get('/', function(req, res) {  
   res.send("Hello World!");
});

app.use(express.static(__dirname + "/public"));

 
// escuchar
app.listen(3000, function (){
    console.log('Escuchando sobre el puerto 3000');
});