
let nombre= prompt("Ingrese su nombre");
let apellido= prompt("Ingrese su apellido");

 function saludarConParametros(nom,ape){
     alert ("Buenas noches " + nom + " "+ ape)
 }

 saludarConParametros(nombre, apellido);


alert("Bienvenido a mi calculadora de impuestos")

function aplicarImpuesto(total, porcentajeImpuesto) {
    let impuesto= (porcentajeImpuesto*total)/100;
    let totalConImpuesto= total+impuesto;
    return totalConImpuesto;
}

let valorTotal= parseInt(prompt( "Ingese el monto de su compra"));
let impuestoAplicado= parseInt(prompt("Ingrese el porcentaje de impuestos que se aplican: "));

let montoFinal= aplicarImpuesto(valorTotal, impuestoAplicado);

alert ("El precio final con impuestos a abonar es " + montoFinal + " ¡¿ " + montoFinal + " ?! ¡¿POR QUÉ?! ¡¿QUÉ ROMPISTE?!");

 
alert("Bueno veamos si al menos el descuento ayuda")



function aplicarDescuento(monto, porcentajeDescuento) {
        let descuento= (porcentajeDescuento*monto)/100;
        let descontado= monto-descuento;
        return descontado
}


let montoImpuesto= parseInt(prompt( "Ingese el precio con impuestos"));
let descuentoAplicado= parseInt(prompt("Ingrese el porcentaje de descuento que se aplica"));

let montoFinalImpuestos= aplicarDescuento(montoImpuesto, descuentoAplicado);

alert ("El monto final a abonar es $" + montoFinal)

