/*Con que mires un video de qué es REST y como se hace un servidor REST ya está, la mayoría te hablarán de la base de datos, pero en nuestro caso sólo hay una variable interna en el programa message, que además si el servidor se parara se borraría.
Vas a tener que utilizar NodeJS y Express (que te permitirá hacer que el servidor de respuesta a las llamadas GET y PUT) y también saber que es un JSON (formato de datos que se suele utilizar para responder a las llamadas de Express).
Para las pruebas aconsejo que usar Advanced REST Client
Ejemplo de uso.

1.- Arranco el servidor llamando: node server.js

2.- Por terminal me muestra un mensaje "Farola instalada en localhost:8080"

3.- En Advanced REST Client hago una llamada GET a localhost:8080/message y recibo el json {message:""}

4.- hago una llamada POST a localhost:8080/message incluyendo en DATA FORM el dato message:"Petrov nos ha traicionado, mátalo"

5.- hago una llamada GET a localhost:8080/message y recibo el json {message:"Petrov nos ha traicionado, mátalo"}

6.- Hago una llamada GET a localhost:8080/message y recibo el json {message:""} ya lo he leído, así que nadie sabrá que vamos a por Petrov.
*/

console.log('farola instalada en localhost:8080')

var http = require('http');

var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");

var  message = '';

app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

router.get('/message', function(req, res) {  
	res.setHeader('Content-Type', 'application/json')
	res.json({message, message});
	message = '';
});

router.post('/message', function(req, res) {  
	message = req.body.DATA;
	res.status(200);
	res.send('TODO OK');
});


app.use(router);

app.listen(8080);
