function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;
 
  return {
    titulo: function()                    { return _titulo; },
    meter:  function(nombre, tf) { _contenido[nombre]=tf; },
    tf:     function(nombre)         { return _contenido[nombre]; },
    borrar: function(nombre)     { delete _contenido[nombre]; },
    toJSON: function()              { return JSON.stringify(_contenido);},
    // Utilizo siempre una coma para separar nombre y telefono aun habiendo dos puntos para el ultimo par nombre-telefono.
    listar: function() { var amigos=[]; for(var nombre in _contenido){var tf=_contenido[nombre]; amigos.push(nombre+', '+tf+"\n"); }; console.log(amigos.join('')); }
  }
}
var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               José: 157845123,
               Jesús: 178512355
             });

amigos.listar();