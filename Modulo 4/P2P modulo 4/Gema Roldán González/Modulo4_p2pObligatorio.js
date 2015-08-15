var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extend:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/mod4', function(req, res){
  res.send('<html><body>'
         + ' <form name="preg1" method="post" action="/respuesta">'
         + '  <h1> ¿Quién descubrió América?</h1>'
         + '  <input type="hidden" name="pregunta" value="1" />'
         + '  <input type="text" name="entrada1" size="50" '
         + 'placeholder="Introduzca quién descubrió América"/><br/><br/>'
         + '  <input type="submit" value="Responder"/>'
         + ' </form>'
         + ' <br/>'
         + ' <hr>'
         + ' <form name="preg2" method="post" action="/respuesta">'
         + '  <h1> Capital de Portugal</h1>'
         + '  <input type="hidden" name="pregunta" value="2"/>'
         + '  <input type="text" name="entrada2" size="50" '
         + 'placeholder="Introduzca la capital de Portugla"/><br/><br/>'
         + '  <input type="submit" value="Responder" />'
         + ' </form>'
         + '</body></html>');

});

app.post('/respuesta*', function(req, res, next){
  if (req.body.pregunta == 1){
    if (req.body.entrada1 === 'Cristóbal Colón'){
      res.send('Respuesta correcta. <a href="/mod4">Volver</a> ');
    } else{
      res.send('Respuesta incorrecta. Es "Cristóbal Colón". <a href="/mod4">Volver</a>');  
    }

  } else{ 
    if ( req.body.pregunta == 2){
       if (req.body.entrada2 === 'Lisboa'){
         res.send('Respuesta correcta. <a href="/mod4">Volver</a>');
       } else{
         res.send('Respuesta incorrecta. Es "Lisboa". <a href="/mod4">Volver</a>');
       }
    } else{
       next (new Error ('Pregunta desconocida. <a href="/mod4">Volver</a>'));
    }
  }
});

app.get('*', function(req, res){
  res.send('Operación inválida');
});

// Middleware de error
app.use(function(err, req, res, next){
  res.send(err.toString());
});

app.listen(8000);