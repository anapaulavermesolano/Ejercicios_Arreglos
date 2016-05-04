var diez= 10;
suma = 0;
alert("escribe 10 numeros para sumarlos");
for(var i = 1; i <= diez; i++) {
	number = Number(prompt("Escribe el numero "+i));
	document.write(" " + number+ " +");
	suma+=number;
}
document.write("<br>"+"Suma total de tus numeros es: "+ suma);