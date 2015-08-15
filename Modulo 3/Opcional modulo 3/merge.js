var fs = require('fs');

		if(process.argv.length <4)
		{ //Lanza un mensaje si los parámetros que vienen no son como mínimo 4.
			console.log('syntax: " node merge.js <dest> <f1> <f2> .. <fn>"');
			process.exit(); //Finaliza el proceso.
		}

//Guardo como string en la variable archivo_destino el nombre del archivo de destino ej. 'dest.txt'.

var archivo_destino = process.argv[2];


var archivos = process.argv.splice(3, process.argv.length);

//Guardo como string en la variable archivo el nombre del archivo a leer.

var archivo = archivos.shift();

//Ahora el Array archivos pasa a quedarse sin su primer valor después de hacer archivos.shift().

		/*
		 * Si el archivo existe lo leo
		 * y anexo sus datos al archivo
		 * de destino con la funcion
		 * anexarArchivo.
		 */

	if(archivo !=undefined)
	{
		fs.readFile(archivo, anexarArchivo);
	}

	function leerArchivo(error)
		{
			//Si ha ocurrido algún error se lanza una excepción.

			if(error)
			{
				throw error;
			}

			//Guardo nuevo archivo a leer y elimina el anterior ya leído del Array.

			var archivo_nuevo_a_leer = archivos.shift();

			//Si el nuevo archivo a leer exite lo lee y lo anexa al archivo de destino.

				if(archivo_nuevo_a_leer !=undefined)
				{
					//Lee el nuevo archivo y llama a la función que lo anexa al destino.
					fs.readFile(archivo_nuevo_a_leer,anexarArchivo);
				}


		}


		function anexarArchivo(error,data)
		{
			//Si ha ocurrido algún error se lanza una excepción

			if(error)
			{
				throw error;
			}

			//Pasa los datos al archivo de destino y llama a la función de lectura para leer el siguiente.

			fs.appendFile(archivo_destino,data,leerArchivo);
		}


		//Si todo ha funcionado correctamente muestra un mensaje por consola.


		console.log('\n===Archivos anexados correctamente!!!===');