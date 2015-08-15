/*
Programa JavaScript que implementa una agenda basica de telefonos
*/
function agenda (titulo, inic) {
    var _titulo = titulo;
    var _contenido = inic;
 
    return {
        titulo: function()              { return _titulo; },
        meter:  function(nombre, tf)    { _contenido[nombre]=tf; },
        tf:     function(nombre)        { return _contenido[nombre]; },
        borrar: function(nombre)        { delete _contenido[nombre]; },
        toJSON: function()              { return JSON.stringify(_contenido);},
       
		//Metodo que muestra la lista de todos los nombres, separados por un salto de línea, por ejemplo: "Pepe, 113278561 \nJosé, 157845123 \nJesús: 178512355 \n"
		listar: function(){
			var _lista = "";
			for (var nombre in _contenido) {
				_lista = _lista + nombre + ", " + _contenido[nombre] + " \n";
			};
			console.log(_lista); //imprimimos por pantalla el resultado
		}
  }
}

/*Creación de una agenda de amigos*/
var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               Jose: 157845123,
               Jesus: 178512355
             });

/*Llamada al método listar de la agenda*/
console.log(amigos.listar());