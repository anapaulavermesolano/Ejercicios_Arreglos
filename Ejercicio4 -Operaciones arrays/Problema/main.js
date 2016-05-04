// var valores = [true, 5, false, "hola", "adios","AnaPaula", 2];
// var cadena = [];
// var a = [];
// 	for(var i = 0; i<=valores.length-1; i++) {
// 		if(typeof valores[i] == 'string') {
// 			a.push(valores[i]);
// 			for(var x = 0; x<=a.length-1; x++) {
// 			}
// 			alert(a)
			
// 		}
// }
function mayor(mayor){ 
	var mayor=0;
	var valores = [true, 5, false, "hola", "adios", 2,"anapaula", "holamundo"];
	var nueva=[];
	var mayor=[];

for(var i=0; i<valores.length;i++){
	if((typeof valores[i] )== 'string') {
		nueva.push(valores[i]);
		}
}
	console.log(nueva);
for(j=0;j<nueva.length-1;j++){
		if(nueva[j+1].length>nueva[j].length){
			mayor=nueva[j+1];
			console.log("EL valor mayor: "+nueva[j+1]);
		}else{
			mayor=nueva[j];
			document.write("<br>"+"El valor mayor es: "+nueva[j]);
		}
	}	
	document.write("EL valor mayor: "+mayor);

}
mayor(mayor);