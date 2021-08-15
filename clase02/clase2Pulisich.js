let saludo= prompt("¡Hola!")
let primerPregunta
let segundaPregunta
let tercerPregunta
let numeroElegido


if ((saludo == "Hola")||(saludo =="hola")||(saludo == "holis")) {
    primerPregunta= prompt("¿Cómo estás?");
    console.log("El individuo es amistoso y cordial");
} else if (saludo=="Buenas") {
    segundaPregunta= prompt("¿Buenas qué? Soy un chatbot, no un reloj, ni siquiera sé la hora");
    console.log("El individuo puede que sea amistoso, pero cordial no es");
} else {
    alert("Wow que malos modales")
    console.log("El individuo tiene malos modales");
};
    



if ((segundaPregunta== "Días") || (segundaPregunta== "Tardes") || (segundaPregunta== "Nochees")){
    primerPregunta= prompt ("¿Cómo estás?");
}

if (primerPregunta== "Bien"){
    alert( "Que bueno saberlo");
} else if( (primerPregunta== "Maso") || (primerPregunta== "Mal")){
    alert ("Bueno, al menos no sos un intento de chatbot");
    console.log ("El individuo puede ser depresivo")
}

tercerPregunta= prompt ("Hagamos una cosa ¿Cuál es tu equipo favorito?");

if( (tercerPregunta== "Boca") || (tercerPregunta== "Boquita") || (tercerPregunta== "boca")){
    alert("Boca ¿Eh? Ustedes han hecho más daño al capitalismo quemando McDonald's que todos los estudiantes de la UBA juntos");
    console.log ("El individuo es hincha de Boca, recomendar gas pimienta");
} else if( (tercerPregunta== "River") || (tercerPregunta== "River Plate") || (tercerPregunta== "river")){
    alert( "¿River? Qué se siente que seas mundialmente conocido por AC/DC y nada más");
    console.log ("El individuo es hincha de River, recomendar los Cazafantasmas");
} else if ( (tercerPregunta== "San Lorenzo") || (tercerPregunta== "CASLA") || (tercerPregunta== "san lorenzo")){
    alert( "El Papa, Tinelli, y Viggo Mortensen...y aún así no tenes barrio, debiste prender las almenaras");
    console.log("El individuo es de San Lorenzo, recomendarle...algo, no sé tanto de fútbol como quisiera")
} else if ((tercerPregunta== "Racing") || (tercerPregunta== "racing") || (tercerPregunta== "El de Pepe Argento")){
    alert ("Cada vez que Racing gana algo, sea lo que sea, nos va mal, en todo, paren por favor.");
    console.log ("El individuo es mufa");
} else if ( (tercerPregunta=="Talleres") || (tercerPregunta== "La T") || (tercerPregunta== "CAT") ){
    alert ("Ustedes son la razón por la que mi barrio paga tanto gas en invierno...en verano el frio está bueno.");
    console.log("El individuo es un pecho frío");
} else if ((tercerPregunta== "Newell's Old Boys") || (tercerPregunta== "Niuls") || (tercerPregunta== "La Lepra")){
    alert ("Mi familia les dió el apellido y nos recompensaron tiroteando la casa de mi tío por votar a Miguel del Sel...Bastardos");
    console.log ("El individuo es un traidor a la familia de mi creador");
} else if ((tercerPregunta== "Independiente") || (tercerPregunta== "El Rojo") || (tercerPregunta== "CAI")){
    alert ("¿Qué se siente saber...mejor no me digas, y alejate de los niños");
    console.log("El individuo sabía lo que hacían y nunca dijo nada");
} else if ((tercerPregunta== "Belgrano") || (tercerPregunta== "CAB" || (tercerPregunta== "Los Pirata"))){
    alert ("Ésto es lo más cercano que han estado de una victoria, bien hecho.");
    console.log("El individuo es mi viejo o uno de sus amigos y me pidió que incluya a Belgrano, está bien.");
} else {
    alert("Felicidades por no poner una respuesta válida, ahora vas a tener que reiniciar la página para saber si tu equipo tiene un mensaje especial.");
    console.log ("El individuo es una de estas tres: impaciente, analfabeta, o incapaz de seguir instrucciones básicas")
}


console.log (tercerPregunta)