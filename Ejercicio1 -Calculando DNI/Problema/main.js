var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var DNI = prompt("Escribe tu numero de DNI");
if(parseInt(DNI)<0 || parseInt(DNI)>99999999 || DNI.length<8 ){
	alert("El número proporcionado no es válido");
}else {
	var division = parseInt(DNI)%23;
	alert(division);
	var consonante = prompt("Escribe tu letra del DNI." +"\nSu letra debe escribirse en mayúscula.");
	if(letras[division]===consonante) {
		alert("La letra y el DNI son correctos");
		alert("Su DNI es: " +DNI+ "."+"\nSu letra es: " +consonante+ ".");
	}else {
		alert("La letra que ha indicado no es correcta.")
	}
}