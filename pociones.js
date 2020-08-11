setTimeout(function(){ Pociones(); }, 15000);
function Pociones(){
	let claseDePocion = ".btn.potion-slot-button.blue.bigger";
	let pociones = document.querySelector(claseDePocion);
	let CantidadPociones = pociones.length;
  console.log("Cantidad de pociones " + CantidadPociones);
	if(pociones.length == 1 ){
		pociones.click();
	}
	setTimeout(function(){console.log("intentos");location.reload;},600000);
}
