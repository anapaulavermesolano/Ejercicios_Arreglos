var a =[];
var cantidad = Number(prompt("Ecribe la cantidad de nombres que quieres poner."));
for(var i = 0; i<= cantidad-1; i++) {
	a[i] = [];
	a[i] = prompt("Escribe los nombres.");
	document.write("<br>"+"Nombre N° "+ (i+1)+ ": "+ a[i]);
}
var push = prompt("	Quieres agragar mas nombres."+ "Escribe con SI & NO.");
	if (push == "SI") {
		var nombre = prompt("Escribe el nombre.")
		a.push(nombre);
	}else if (push == "NO") {
		alert("programa finalizado");
	}else {
		alert("Escriba bien");
	}
document.write("<br>"+"Nombre N° " +(i+1)+ ": " + a[i]);