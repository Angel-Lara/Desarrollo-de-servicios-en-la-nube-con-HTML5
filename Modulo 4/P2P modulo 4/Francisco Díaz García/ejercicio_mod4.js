var express = require('express');
var app = express();

app.get('/preguntas', function (req, res){

	// Pagina 1 
	res.send ('<html><head><title>Preguntas</title></head>'+
 	   '<body><form method="get" action="/respuesta">'+
   	   '<input type="hidden" name="id" value="pregunta1">'+
           '¿Qui&eacute;n descubri&oacute; Am&eacute;rica?: <br>'+
   	   '<input type="text" name="pregunta1" value="" /><br>'+
   	   '<input type="submit" value="Enviar"></form><br>'+
  	   '<form method="get" action="/respuesta">'+
   	   '<input type="hidden" name="id" value="pregunta2">'+
   	   '¿Capital de Portugal?: <br>'+
   	   '<input type="text" name="pregunta2" value="" /><br>'+
   	   '<input type="submit" value="Enviar"></form></body></html>');
});

app.get('/respuesta', function (req, res){
	
        // Pregunta 1
	if (req.query.id==="pregunta1") {
		
		res.locals.respuesta ="Cristóbal Colón";

		if (req.query.pregunta1.replace(/ó/ig,'o').toLowerCase()==="cristobal colon"){
			res.locals.respuestaUser="Correcta";
		}	
		else {
			res.locals.respuestaUser="Incorrecta";	
		}
	}
	
	// Pregunta 2
	if (req.query.id==="pregunta2") {
		
		res.locals.respuesta ="Lisboa";

		if (req.query.pregunta2.toLowerCase()==="lisboa"){
			res.locals.respuestaUser="Correcta";
		}	
		else {
			res.locals.respuestaUser="Incorrecta";	
		}
	}

        // Pagina 2	
	res.send ('<html><head><title>Respuesta</title></head>'+
 	   '<body><form method="get" action="/preguntas">'+
	   'Su respuesta es: ' + res.locals.respuestaUser +'<br><br>'+
           'La respuesta correcta es: ' + res.locals.respuesta+'<br><br>'+
           '<a href="/preguntas">Volver</a></body></html>'); 
});

app.listen(8000);
