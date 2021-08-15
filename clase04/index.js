/*var nombreIngresado= prompt( "Ingrese su nombre");
alert ("El nombre ingresado es " +nombreIngresado);

function solicitarNombre(){
    let nombreIngresado= prompt ("Ingresar nombre");
    alert("El nombre ingresado es "+ nombreIngresado);
}

solicitarNombre();//Aaaaah solo me toma la función cuando la llamo no cuando la declaro
solicitarNombre();

function parametrear(parametro1, parametro2){
    console.log(parametro1 + " "+ parametro2);
}

parametrear ("Pablo", "Pulisich");

let resultado= 0;//Recordemos que = es para inicializar, no es lo mismo que == que implica que es igual a algo. POR ESO PUEDE CAMBIAR.

function sumar(primerNumero, segundoNumero){
    resultado= primerNumero + segundoNumero;
}

function mostrar(mensaje){
    console.log(mensaje)
}

sumar(6, 3);
mostrar ("El resultado es igual a " + resultado);

function calcular (primerNumero, segundoNumero, operacion){
    switch(operacion){
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero-segundoNumero;
            break;
        case "*": 
            return primerNumero*segundoNumero;
            break;
        case "/":
            return primerNumero/segundoNumero;
            break;
        default:
            return 0;
            break;    
    }

}

console.log (calcular(5, 10, +));*/

//función con parámetros

// let nombre= prompt("Ingrese su nombre");
// let apellido= prompt("Ingrese su apellido");

// function saludarConParametros(nom,ape){
//     alert ("Buenas noches " + nom + " "+ ape)
// }

// saludarConParametros(nombre, apellido);

//función con parámetro y return

function aplicarDescuento(total, porcentajeDescuento) {
    let descuento= (porcentajeDescuento*total)/100;
    let totalConDescuento= total-descuento;
    return totalConDescuento
}

let valorTotal= parseInt(prompt( "Ingese el monto de su compra"));
let descuentoAplicado= parseInt(prompt("Ingrese el porcentaje de descuento que posee"));

let montoFinal= aplicarDescuento(valorTotal, descuentoAplicado);

alert ("El monto final a abonar es $" + montoFinal)