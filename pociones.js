let CantidadPociones;
let claseDePocion = ".btn.potion-slot-button.blue.bigger";
let Clase_login = "#loginout"

setTimeout(function(){ ValidarLogeoAndEjecute(); }, 15000);

function Pociones(){
	let pociones = document.querySelectorAll(claseDePocion);
	if(pociones == undefined || pociones == null ) { CantidadPociones = 0;} else {  CantidadPociones = pociones.length }
	console.log("Cantidad de pociones " + CantidadPociones);
	if(CantidadPociones >= 1 ){
		pociones[0].click();
	}
	setTimeout(function(){console.log("intentos");location.reload();},600000);
}

function ValidarLogeoAndEjecute(){
	let loginout = document.querySelector(Clase_login);
	if(loginout.innerText == "Login"){
	loginout.click()
	console.log("Intento login");
	document.querySelector("#btnFacebookLoginAT").click();
	setTimeout(function(){ Pociones(); }, 6000);
	}
	else {
	 Pociones();
	}
	
}
