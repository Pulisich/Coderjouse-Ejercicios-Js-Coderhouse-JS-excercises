let nombre= 0
let apellido=0
let direccion=0

alert("¡Bienvenido a mi portfolio personalizado! ¡Exploremos juntos!")

nombre= prompt("¿Cuál es tu nombre")
apellido= prompt("¿Y tu apellido?")
console.log (nombre + " "+ apellido)

direccion= prompt ("Bienvenido " + nombre + " " + apellido + " mi sitio tiene varias secciones, por favor ingresá acá a dónde querés ir: PROYECTOS, PENDIENTES, INFO, CONTACTO, RANDOM")

if(direccion=="PROYECTOS"){
    alert("Por ahora está en construcción.")
}else if (direccion=="PENDIENTES"){
    alert("Si, la mayoría son pendientes, por ahora, esta página también")
}else if(direccion=="INFO"){
    alert("Si...tampoco la hice, todavía")
}else if(direccion=="CONTACTO"){
    alert("No te voy a mentir, mi idea original era hacer un elige tu propia aventura, pero se me hizo muy complejo y me agarró pánico debido a falta de tiempo")
}else if (direccion=="RANDOM"){
    alert("Acá iría una sección random de cosas sobre mí, o te llevaría a una sección random, lo que pase primero")
}else {
    alert ("Perdón " + nombre + " no reconozco ese comando")
}


