let CantidadPociones;
setTimeout(function(){ Pociones(); }, 15000);
function Pociones(){
	let claseDePocion = ".btn.potion-slot-button.blue.bigger";
	let pociones = document.querySelector(claseDePocion);
	if(pociones == undefined || pociones == null ) { CantidadPociones = 0;} else {  CantidadPociones = pociones.length }
	console.log("Cantidad de pociones " + CantidadPociones);
	if(CantidadPociones == 1 ){
		pociones.click();
	}
	setTimeout(function(){console.log("intentos");location.reload();},600000);
}
