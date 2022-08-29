var autos = [
	{
		marca : "Ford",
		modelo : "Fiesta",
		color : "Rojo",
		año : 2020,
		kilometros : 100,
		precioFinal : 300000,
		cuotas : 12,
		patente : "APL 123",
		estado : "disponible",
	},
	{
		marca : "Toyota",
		modelo : "Corola",
		color : "Gris",
		año : 2019,
		kilometros : 0,
		precioFinal : 200000,
		cuotas : 14,
		patente : "JJK 116",
		estado : "vendido",
	},
	{
		marca : "Toyota",
		modelo : "Rastrojero",
		color : "Amarillo",
		año : 2017,
		kilometros : 1200,
		precioFinal : 250000,
		cuotas : 14,
		patente : "JLK 716",
		estado : "vendido",
	},

	{
		marca : "fiat",
		modelo : "toro",
		color : "VERDE",
		año : 2010,
		kilometros : 1520,
		precioFinal : 15.200100,
		cuotas : 14,
		patente : "JUT 618",
		estado : "disponible",
	},
];
var comp = 0;
let buscarPatente = (objeto, patente)=>{
	patente = patente.toUpperCase();
	if (objeto.patente == patente){
		console.log("El auto de la patente ingresada es: ");
		console.log(objeto);
	}else{
		comp +=1;
	}
}

let buscarEstado = (objeto, estado)=>{
	estado = estado.toLowerCase();
	if (objeto.estado == estado){
		console.log(objeto);
	}
}


let patente = prompt("ingrese una patente a buscar");
for (var x = 0; x <= autos.length -1 ; x++) {
	buscarPatente(autos[x],patente);
	if(comp == autos.length){
		console.log("Patente inexistente");
		throw new error("ca***te");
	}
}


let estado = prompt("ingrese un estado a buscar: ");
for (var x = 0; x <= autos.length -1 ; x++) {
	if(x==0){
		console.log("Resultados de autos " + estado + ": ");
	}
	buscarEstado(autos[x],estado);
}
