//Ciclos e iteraciones.

//let ingresarNumero= parseInt(prompt("Ingresar un numero"))

/*let suma=0
let promedio;
for (let i= 1; i< 4; i++){
    let nota= parseFloat(prompt("ingrese el valor de la nota nro: " + i))
    suma= suma + nota;
}
promedio= suma/3;
alert("El promedio es: " + promedio);

if(promed >= 6) {
    console.log("Usted está aprobado, hurra")
} else {
    console.log ("Usted se va a diciembre, hurra")
}
/*for (let i=1; i <= 10; i++){
    if(i==5){
        continue;
    } 
    alert(i);
}
 /*   for (let i=1; i <= 10; i++){
    if(i==5){
        break;
    } 
    alert(i)
}


for ( let i=1; i <= 2; i++){
    let ingresarNombre= prompt("Ingresar Nombre:");
    (" Turno N° " + i +"Nombre: " + ingresarNombre);
    console.log( "Turno N°: " + i + "Nombre" + ingresarNombre)
} alert("Híjole yo creo que no se bua poder")
for (let i= 1; i <=10; i++){
    let resultado = ingresarNumero*i;
    alert(ingresarNumero + " x " + i + "="+ resultado);
}

for(let i=0; i<3; i++){
    alert("Valor de i: " + i);
}*/

// EJERCICIO PRACTICA 
/* Desarrollar un algoritmo donde el usuario ingresa un código de producto y luego se imprime el detalle
del producto - Se piden 3 codigos 
COD 1 - Impresora Samsung Laser
COD 2 - Mouse Genius usb
COD 3 _ Resma A4 500 hojas
COD 4 - Auriculares Philips in-ear */


for(let i=0; i < 3; i++ ){
    
    let producto= parseInt(prompt("Ingrese el COD del producto: "))
    
    if( producto== 1){
        alert("Impresora Samsung Laser");
        console.log("Impresora Samsung Laser");
    } else if( producto == 2){
        alert("Mouse Genius USB");
        console.log("Mouse Genius usb");
    } else if (producto == 3){
        alert( "Resma A4 500 hojas");
        console.log ("Resma A4 500 hojas");
    } else if(producto== 4){
        alert("Auriculares Philips in-ear");
        console.log("Auriculares Philips in-ear");
    } else {
        alert("Por favor inserte un COD válido");
        console.log("Error de código")
    }
} 

/*for (let i = 1; i < 4; i++) {
    let codigo = parseInt(prompt("Ingrese el código del producto " + i));
    switch (codigo) {
        case 1:
            alert("COD 1 - Impresora Samsung Laser");
            break;
        case 2:
            alert("COD 2 - Mouse Genius usb");
            break;
        case 3:
            alert("COD 3 _ Resma A4 500 hojas");
            break;
        case 4:
            alert("COD 4 - Auriculares Philips in-ear");
            break;
        default:
            alert("¡ CODIGO ERRONEO !");
            break;
    }
}
*/

// // let denuncia = prompt("Escriba el servicio que desea contactar o escriba ESC para salir");
 
// //  while(denuncia != "ESC"){   
  
// //     switch (denuncia) {
    
// //         case "Policía":
// //             alert("La policía no puede responder su llamado resuélvalo usted");
// //             break;
// //         case "Emergencias":
// //             alert("Si está escribiendo en una PC o celular no es una emergencia");
// //             break;
// //         case "Defensa Civil":
// //             alert("¿Qué es Defensa Civil? En serio nunca los ví en mi vida");
// //             break;
// //         case "Bomberos":
// //             alert("Si es sobre un gato en un árbol por favor no joda, hay cosas serias")
// //             break;
// //         case "911":
// //             alert("¿No podías haber llamado?");
// //             break;
// //         default:
// //             alert("Oh oh, parece te está costando escribir, buena suerte con eso.");
// //             break;
// //     }
// //     denuncia= prompt("Por favor ingrese el nombre del servicio que desea contactar o escriba ESC para salir")
// // }

// let conformidad= prompt("¿Está conforme con nuestros servicios? Escriba SI o NO")

// if (conformidad=="NO")
// {
//     for (let i=900; i<901; i++)
//       {
//           let nombre= prompt ("Por favor ingrese su nombre");
//           let apellido= prompt ("Por favor ingrse su apellido");
//           alert(apellido + " " + nombre + " su turno para quejarse asignado es el: " + i + "// Turno actual: SISTEMA CAÍDO POR FAVOR LLAME A UN TÉCNICO!! " + " Tenga un buen día.")
//       }
// } else if (conformidad =="SI"){
//     alert("Nunca había sucedido, tenga buen día")
// } else {

//     alert ("SI o NO, no era tan difícil.")
// }

// console.log(conformidad)