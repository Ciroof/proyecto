var autos = [
	{
		marca : "Ford",
		modelo : "Fiesta",
		color : "Rojo",
		anio : 2020,
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
		anio : 2019,
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
		anio : 2017,
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
		anio : 2010,
		kilometros : 1520,
		precioFinal : 15.200100,
		cuotas : 14,
		patente : "JUT 618",
		estado : "disponible",
	},
];
// Funciones de busqueda
var comp = 0;
let buscarPatente = (objeto, patente)=>{
	patente = patente.toUpperCase();
	patente2 = objeto.patente.toUpperCase();
	if (patente2 == patente){
		console.log("El auto de la patente ingresada es: ");
		console.log(objeto);
	}else{
		comp +=1;
	}
}
let datosAuto = (objeto, patente)=>{
	patente = patente.toUpperCase();
	patente2 = objeto.patente.toUpperCase();
	if (patente2 == patente){
		console.log("El auto de la patente ingresada es: ");
		document.querySelector("#marca").value = objeto.marca;
		document.querySelector("#modelo").value = objeto.modelo;
		document.querySelector("#color").value = objeto.color;
		document.querySelector("#anio").value = objeto.anio;
		document.querySelector("#kilo").value = objeto.kilometros;
		document.querySelector("#precio").value = objeto.precioFinal;
		document.querySelector("#cuota").value = objeto.cuotas;
		document.querySelector("#patente").value = objeto.patente;
		document.querySelector("#patente").disabled = true;
		document.querySelector("#estado").value = objeto.estado;
	}else{
		alert("Patente no encontrada");
	}
}


let buscarEstado = (objeto, estado)=>{
	estado = estado.toLowerCase();
	estado2 = objeto.estado.toUpperCase();
	if (estado2 == estado){
		console.log(objeto);
	}else{
		comp +=1;
	}
}

let buscarMarca = (objeto, marca)=>{
	marca = marca.toLowerCase();
	marca2 = objeto.marca.toLowerCase();
	if (marca2 == marca){
		//alert(objeto);
		console.log(objeto);
	}else{
		comp +=1;
	}
}

//Funciones de ejecucion
let botonPatente = function(){
	let patenteValor = document.querySelector("#matriculas").value;
	autos.forEach((auto)=>{
		buscarPatente(auto,patenteValor);
	});
	if (comp == autos.length){
		console.log("Vehiculo no encontrado");
		comp = 0;
	}
	comp = 0;
	vaciarInputs();
}

let botonEstado = function(){
	let estado = document.querySelector("#estados");
	let valor = estado.value ;
	for (var x = 0; x <= autos.length -1 ; x++) {
		buscarEstado(autos[x],valor);
	}
	if (comp == autos.length){
		console.log("Vehiculos no encontrados");
		comp = 0;
	}
	comp = 0;
	vaciarInputs();
}
//ejecuta la busqueda por marca mediante la entrada de datos del usuario
let botonMarca = function(){
	let marca = document.querySelector("#marcas");
	let valor = marca.value ;
	for (var x = 0; x <= autos.length -1 ; x++) {
		buscarMarca(autos[x],valor);
	}
	if (comp == autos.length){
		//alert("Vehiculos no encontrados");
		console.log("Vehiculos no encontrados");
		comp = 0;
	}
	comp = 0;
	vaciarInputs();
}

//Funcion carga de vehiculos ingresados por el usuario
let cargarAutos = ()=>{
	let patente = document.querySelector("#matriculas").value;
	if(!patente){
		let marca = document.querySelector("#marca");
		let valor1 = marca.value ;
		let modelo = document.querySelector("#modelo");
		let valor2 = modelo.value ;
		let color = document.querySelector("#color");
		let valor3 = color.value ;
		let anio = document.querySelector("#anio");
		let valor4 = anio.value ;
		let kilo = document.querySelector("#kilo");
		let valor5 = kilo.value ;
		let precio = document.querySelector("#precio");
		let valor6 = precio.value ;
		let cuota = document.querySelector("#cuota");
		let valor7 = cuota.value ;
		let patente = document.querySelector("#patente");
		let valor8 = patente.value ;
		let estado = document.querySelector("#estado");
		let valor9 = estado.value ;
		if(valor1 != "" && valor2 != "" && valor3 != "" && valor4 != "" && valor5 != "" && valor6 != "" && valor7 != "" && valor8 != "" && valor9 != ""){
			console.log("Datos guardados con exito");
			autos.push({
			marca : valor1,
			modelo : valor2,
			color : valor3,
			anio : valor4,
			kilometros : valor5,
			precioFinal : valor6,
			cuotas : valor7,
			patente : valor8,
			estado : valor9,
			});
		}else{
			console.log("Erros datos incorrectos o campos vacios intente de nuevo");
		}
	}else{
		let marca = document.querySelector("#marca");
		let valor1 = marca.value ;
		let modelo = document.querySelector("#modelo");
		let valor2 = modelo.value ;
		let color = document.querySelector("#color");
		let valor3 = color.value ;
		let anio = document.querySelector("#anio");
		let valor4 = anio.value ;
		let kilo = document.querySelector("#kilo");
		let valor5 = kilo.value ;
		let precio = document.querySelector("#precio");
		let valor6 = precio.value ;
		let cuota = document.querySelector("#cuota");
		let valor7 = cuota.value ;
		let patente = document.querySelector("#patente");
		let valor8 = patente.value ;
		let estado = document.querySelector("#estado");
		let valor9 = estado.value ;
		if(
			valor1 != "" &&
			valor2 != "" &&
			valor3 != "" &&
			valor4 != "" &&
			valor5 != "" &&
			valor6 != "" &&
			valor7 != "" &&
			valor8 != "" &&
			valor9 != ""
		){
			autos.forEach((auto)=>{
				if(auto.patente == patente){
					auto.marca = valor1;
					auto.modelo = valor2;
					auto.color = valor3;
					auto.anio = valor4;
					auto.kilometros = valor5;
					auto.precioFinal = valor6;
					auto.cuotas = valor7;
					auto.patente = valor8;
					auto.estado = valor9;
				}
			});
			document.querySelector("#patente").disabled = false;
		}else{
			console.log("Erros datos incorrectos o campos vacios intente de nuevo");
		}
	}
	patenteAutos = null;
	vaciarInputs();
}
//Vacia el contenido de todos los input del html
function vaciarInputs(){
	var inputs = document.querySelectorAll("input");
	//console.log(inputs);
	inputs.forEach(function(input){
		input.value = null;
	});
	document.querySelector("#patente").disabled = false;
}
//Modifica los datos de vehiculos existentes
var modAutos = function(){
	let patente = document.querySelector("#matriculas");
	let valor = patente.value ;
	autos.forEach(function(auto){
		datosAuto(auto,valor);
	});
}