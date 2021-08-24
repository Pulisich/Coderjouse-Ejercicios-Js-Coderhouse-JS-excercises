//EVENTOS

//OPCION 1

let boton = document.getElementById("miBoton");

boton.addEventListener ("click", interactuar)

function interactuar(){
    let nombre = prompt("Ingrese su nombre");
    let fecha = new Date();
    alert("Hola "+ nombre + " hoy es " + fecha);
}

console.log(interactuar);
