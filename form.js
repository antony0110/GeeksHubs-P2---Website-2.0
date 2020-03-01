
//Formulario 

var inputs = document.getElementsByClassName('formulario__input');
for (var i =0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup',function(){
            if(this.value.length >=1) {
                this.nextElementSibling.classList.add('fijar');
            } else {
                this.nextElementSibling.classList.remove('fijar');
            }
            });
    }
  //Pedir Permiso de conocer Ubicación
      
  if('geolocation' in navigator){
    console.log('Servicio activo');
    
    navigator.geolocation.getCurrentPosition(function(posicion){
    console.log("Posición Latitude->"+ posicion.coords.latitude+" Posición  Longitude ->"+posicion.coords.longitude, " Posición  Altitude ->"+posicion.coords.altitude);
    },function(error){
     console.log("Error ->"+ error);
  })}else{
    console.log('Servicio inactivo');
  }
  
  
      