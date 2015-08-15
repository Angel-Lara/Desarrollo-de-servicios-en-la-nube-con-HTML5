console.log(Math.PI.toFixed(8));
console.log("\u000A");
console.log("Caracteres (\u55e8\uff0c\u4f60\u597d\u5417)");

var x="嗨，你好吗".charCodeAt(0).toString(16);
var y= String.fromCharCode(parseInt(x,16));
console.log("El caracter escapado \\u" + x + " representa; "+ y);
var x="嗨，你好吗".charCodeAt(1).toString(16);
var y= String.fromCharCode(parseInt(x,16));
console.log("El caracter escapado \\u" + x + " representa; "+ y);
var x="嗨，你好吗".charCodeAt(2).toString(16);
var y= String.fromCharCode(parseInt(x,16));
console.log("El caracter escapado \\u" + x + " representa; "+ y);
var x="嗨，你好吗".charCodeAt(3).toString(16);
var y= String.fromCharCode(parseInt(x,16));
console.log("El caracter escapado \\u" + x + " representa; "+ y);
var x="嗨，你好吗".charCodeAt(4).toString(16);
var y= String.fromCharCode(parseInt(x,16));
console.log("El caracter escapado \\u" + x + " representa; "+ y);