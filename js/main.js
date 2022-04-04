function devolver(){
    function devuelvePi(){ 
        var devolver = (Math.PI).toFixed(2); 
        return devolver; 
      }
  
      alert(devuelvePi());
}

function masIva(precio, iva){
    iva = iva || 21
    var coniva = (precio + precio*iva/100);
    return coniva;
  }
  var precio = Number(prompt("Introduce un precio"));
  var iva = Number(prompt("Introduce el iva"));
  if(iva > 0){
    var resultado = masIva(precio, iva);
  }
  else{
    var resultado = masIva(precio);
  }
  alert("Precio sin iva: " + precio);
  alert("<br>Precio más Iva: " + resultado);

function voltear(texto){
    var caracter = "";
    var salida = "";
    for(var i=0; i < texto.length; i++){
      caracter = texto.charAt(i);
      salida = caracter + salida;
    }
    return salida;
  }
 
  var texto = prompt("Introduce un texto");
  var reves = voltear(texto);
  alert("Texto original: " + texto);
  alert("Texto al revés: " + reves);

function aleatorio(min,max){
    var numero = Math.round((Math.random() * (max-min)) + min);
    return numero;
  }
  var minimo = Number(prompt("Introduce el mínimo"));
  var maximo = Number(prompt("Introduce el máximo"));
  var resultado = aleatorio(minimo,maximo);
  alert(resultado);

function aleatorio2(min,max){
    var numero = Math.round((Math.random() * (max-min)) + min);
    return numero;
  }
  var numeros = new Array();
  var temp = 0;
  var copia = true;
  var j = 0;
  for(var i=0; i<100; i++){
    do{
      j = 0;
      copia = true;
      temp = aleatorio2(1,1000);
      for(var j=0; j < numeros.length; j++){
        if(temp == numeros[j]){
          copia = false; 
        }
      }
    }while(copia == false);
    numeros[i] = temp;
  }
  numeros.sort(function(a,b){return a-b});
  var cont = 0;
  for(var i=0; i < numeros.length; i++){
    alert("Numero " + cont + ": " + numeros[i] + "<br>");
    cont++;
  }

function piramideNumerica(){
    var i, rep;
    for (i = 1; i <= 30; i++) {
        for (rep = 0; rep < i; rep++) {
            alert(i);
        }
        alert("<br>");
    }
}

function pramideAlreves(){
    var numrep = prompt("Introduce numero de repeticiones");
if (Number(numrep) == numrep) {
    if (numrep > 0 && numrep <= 50) {
        var rep,i;
        for (i = numrep; i >= 1; i--) {
            for (rep = i; rep >= 1; rep--) {
                alert(i);
            }
            alert("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 
else {
    alert("No has introducido un número");
    }
}

function multiplos(){
    alert("<hr>");
var i;
var j = 500;
var rep = 0;
for (i = 1; i <= j; i++) {
    alert(i);
    if (i % 4 == 0) {
        alert(" (Multiplo de 4)");
    }
    if (i % 9 == 0) {
        alert(" (Multiplo de 9)");
    }
    alert("<br>");
    if (i % 5 == 0) {
        alert("<hr>");
    }
}
}
function tablaMultiplicar(){
    var i,j;
var filas = Number(prompt("Introduce numero de filas"));
var colum = Number(prompt("Introduce numero de columnas"));
var res = filas * colum;
alert("<table border>");
for (i = 0; i < filas; i++) {
    alert("<tr>");
    for (j = 0; j < colum; j++) {
        alert("<td>");
        alert(res);
        res--;
        alert("</td>");
    }
    alert("</tr>");
}
alert("</table>");
}

function posicion(){
    var vocales = ["a", "e", "i", "o", "u"];
    var texto = prompt("Introduce un texto");
    var textomin = texto.toLowerCase();
    var posicion = 0;
    var parar = false;
    for (var i = 0; i < textomin.length; i++) {
        for (var j = 0; j < vocales.length; j++) {
            if (vocales[j] == textomin.charAt(i)) {
                posicion = i;
                parar = true;
                break;
            }
        }
        if (parar) {
            break;
        }
    }
    alert("La primera vocal está en la posición " + posicion);
}
function numero(){
    var numero = Number(prompt("Introduce un número entre 1 y 100"));
    if((numero >= 1) && (numero <= 100)) {
        var x = 0;
        var y = 1;
        var z;
        alert(x + "<br>");
        for (i = 0; i < (numero-1); i++) {
            z = x + y;
            alert(z + "<br>");
            y = x;
            x = z;
        }
    }
    else {
        alert("Número erróneo");
    }
}

function posicionIn(){
    var posicion = 0;
    for (var i = 0; i < textomin.length; i++) {
        if (vocales.includes(textomin.charAt(i))) {
            posicion = i;
            break;
        }
    }
    alert("<br>La primera vocal está en la posición " + posicion);
}

function juego(){
    var jugados = 0;
    var ganados = 0;
    var perdidos = 0;
    do {
        var jugada = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");
        var aleatorio = Math.floor((Math.random() * 9) + 1);
        var elige = "";
        if (aleatorio <= 3) {
            elige = "piedra";
        }
        else if (aleatorio <= 6) {
            elige = "papel";
        }
        else {
            elige = "tijera";
        }

        if ((jugada == "piedra") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "piedra") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "piedra") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "papel") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "papel") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "papel") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "tijera") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "tijera") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "tijera") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        jugados++;

    } while (confirm("Jugar de nuevo"));

    alert("Partidas jugadas: "+jugados+"<br>");
    alert("Partidas ganadas: "+ganados+"<br>");
    alert("Partidas perdidas: "+perdidos+"<br>");
    alert("Partidas empatadas: "+(jugados-ganados-perdidos));
}
function polindromo(){
    var cadena = prompt("Introduce un Texto para Comprobar si es un Palíndromo:");
	var numchar = cadena.length;
	cadena = cadena.toLowerCase();
	var j;
	var car;
	var salida = "";
	var cadena_espac = "";
	var cadena_reves = "";
	for (i = 0; i < numchar; i++) {
		car = cadena.charAt(i);
		if (car != " ") {
			cadena_espac += car;
			cadena_reves = car + cadena_reves;
		}
	}
	if (cadena_espac == cadena_reves) {
		alert("El texto es un palíndromo");
	}
	else {
		alert("El texto No es un palíndromo");
	}
}
function mayor(){
    var nombre1 = prompt("Nombre 1:");
    var edad1 = Number(prompt("Edad 1:"));

    var nombre2 = prompt("Nombre 2:");
    var edad2 = Number(prompt("Edad 2:"));

    var nombre3 = prompt("Nombre 3:");
    var edad3 = Number(prompt("Edad 3:"))

    var maximo = Math.max(edad1, edad2, edad3);

    if (maximo == edad1) {
        alert("El mayor es: " + nombre1);
    }
    if (maximo == edad2) {
        alert("El mayor es: " + nombre2);
    }
    if (maximo == edad3) {
        alert("El mayor es: " + nombre3);
    }
}
function suma(){
    var  n1 = prompt("Escribe un número");
    var n2 = prompt("Escribe otro número");
alert("La suma es: "+ ( parseInt(n1)+ parseInt(n2) ) );
}
function mayorOmenor(){
    var n1 = prompt("Escribe un número");
    var n2 = prompt("Escribe otro número");
      if (n1 > n2) {
       alert(n1);
    } else {
    alert(n2);
    }
}

function divicion(){
    var n1 = prompt("Escribe un número");
if (n1 % 2 === 0) {
document.write("Es divisible por 2");
} else {
document.write("No es divisible por 2");
}
}

function tiempo(){
    var fecha1 = new Date();    
    var tiempo1 = fecha1.getTime(); 
    var nombre = prompt("Introduce el Nombre:");
    var ape1 = prompt("Introduce apellido 1:");
    var ape2 = prompt("Introduce Apellido 2:");
    var fecha2 = new Date(); 
    var tiempo2 = fecha2.getTime(); 
    var total = (tiempo2 - tiempo1) / 1000;
    total = total.toFixed(1);
    alert("En introducir " + nombre + " " + ape1 + " " + ape2 + " ha tardado " + total + " segundos.");
}
function probabilidad(){
    var res;
    var i;  
    for (i = 1; i <= 14; i++) {
        num = Math.floor((Math.random() * 100) + 1);
        if (num <= 60) {
            document.write("Resultado " + i + ": 1<br>");
        }
        else if (num <= 90) {
            document.write("Resultado " + i + ": X<br>");
        }
        else {
            document.write("Resultado " + i + ": 2<br>");
        }
    }
}