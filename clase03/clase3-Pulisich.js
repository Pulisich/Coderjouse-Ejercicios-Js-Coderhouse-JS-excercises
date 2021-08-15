for(let i=1; i<=10; i++) {
    let nombre= prompt("Ingrese su nombre")
    let apellido= prompt("Ingrese su apellido")
    let dni= parseInt(prompt("Ingrese su DNI SIN PUNTOS"))
    alert(apellido + " " + nombre+ " D.N.I.: " + dni +" se le ha asignado el turno número: " + i)
    console.log (nombre)
    console.log (apellido)
    console.log (dni)
}