var fs = require('fs');

var params = process.argv.length;

if (params < 4) { // Como minimo tiene que tener 4 parametros
  console.log('Sintaxis: "node merge.js <dest> <f1> <f2> .. <fn>"');
  process.exit();
}

// node merge.js <dest> <f1> <f2> .. <fn>

var i = 3; // Leemos archivos, desde el parametro 3 en adelante
while (i < params) {
  fs.readFile(
    process.argv[i], // Archivo actual
    function(err, data) { // Callback de finalizacion
      fs.appendFile(
        process.argv[2], // Fichero de destino, en el parametro 2
        data, // Contenido del archivo actual
        function(err) { // Callback de finalizacion
          if (err) throw err;
          console.log('Se añadió un archivo');
        }
      )
    }
  )
  i++;
}
