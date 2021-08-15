let altura= parseInt(prompt("Por favor ingrese su altura en centímetros (cm)"))

if (altura < 130) {
    alert( "Usted debe ingresar con un adulto a menos que sufra de androcondoplasia, u alguna forma de enanismo");
} 

else if ((altura >= 130) && (altura <= 180)) {
    alert("Usted puede ingresar");
}
else if (altura > 180){
    alert( "Usted está medio alto para este juego ¿Acaso no vio ese episodio de Los Simpson?");

} else{
    alert( "Onda, tenés que poner una altura");
}
    