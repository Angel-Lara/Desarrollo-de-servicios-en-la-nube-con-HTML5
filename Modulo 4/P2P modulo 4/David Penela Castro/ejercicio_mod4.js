var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/preguntas', function(req, res){
  res.send('<html><body>'
	+ '<h1>Formulario</h1>'
	+ '<form method="get" action="/respuesta">'	
	+ 	'¿Quién descubrió América? <br>'
	+	'<input type="hidden" name="id" value="1" /<br>'
	+ 	'<input type="text" name="respuesta" /<br>'
	+ 	'<input type="submit" value="Enviar"/>'
	+ '</form>'
	+ '<br>'
	+ '<form method="get" action="/respuesta">'	
	+ 	'¿Capital de Portugal? <br>'
	+	'<input type="hidden" name="id" value="2" /<br>'
	+ 	'<input type="text" name="respuesta" /<br>'
	+ 	'<input type="submit" value="Enviar"/>'
	+ '</form>'
	+ '</body></html>');
});

app.get('/respuesta', function(req, res) {
  var html;
  var respuestaOK = null;

  if (req.query.id === '1')
  {	
    respuestaOK= 'Colón';
  }
  else if (req.query.id === '2')
  {	
    respuestaOK= 'Lisboa';
  }
   
  if (respuestaOK != null)
  {
    html = "Su respuesta: '" + req.query.respuesta + "'";
    
    if (req.query.respuesta === respuestaOK)
    {
      html += ' es correcta.';
    }
    else
    {
      html += " es incorrecta. La respuesta correcta es '" + respuestaOK + "'.";
    }
  }
  else
  {
    html += "Error en la recepción del formulario.";
  }

  html += '<br><br><a href="/preguntas"> Volver a la página inicial</a>';
  res.send(html);
});
app.listen(8000);
