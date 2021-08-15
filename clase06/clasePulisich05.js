let nombre=prompt("¿Cuál es tu nombre?")
let apellido=prompt("¿Cuál es tu nombre de familia?")


console.log(nombre + " "+ apellido);
alert("Bienvenido " + nombre +" "+ apellido);

 function nacimiento(anio, edad) {
     let fecha= anio - edad
     return fecha  
} 

 let edadActual= parseInt(prompt("¿Cuántos años tenés?"));
 let anioActual= parseInt(prompt("¿En qué año estamos?"));
 let anioNacimiento= nacimiento(anioActual, edadActual)
 alert("Naciste en: "+ anioNacimiento)
console.log(anioNacimiento)

if (anioNacimiento > 2003){
    alert("No vendemos a menores de edad, volvé con un adulto.")
}

let telefono= prompt("Ingrese un número de teléfono")
console.log(telefono)


//PASTAS DE JORGE

class Pastas{
    constructor(tipo, relleno, cantidad, precio){

        this.tipo= tipo;
        this.relleno= relleno;
        this.cantidad= cantidad;
        this.precio= precio;
        this.encargado= false;
        this.abonado= false;

    }
    
    mediaDocena(){
        this.precio= this.precio/2;
        this.cantidad= this.cantidad/2;
        console.log( this.tipo + this.relleno +" "+ this.cantidad/2 +" " + this.precio/2 + " encargado.")
    }
    pedido(){
        this.encargado= true;
        console.log( this.tipo +" "+ this.relleno+ " " + this.cantidad + " encargado")
    }

    pagado(){
        this.abonado= true;
        console.log (this.tipo + this.relleno + " abonado.")
    }
}

const producto1 = new Pastas ("Sorrentinos", "Jamón y Muzarella", 12, 600);
console.log(producto1);
const producto2 = new Pastas ("Sorrentinos", "Calabacín asado, Muzarella, y Nueces", 12, 750);
console.log(producto2);
const producto3 = new Pastas ("Sorrentinos", "Berenjenas ahumadas y Hongos", 12, 850);
console.log(producto3);

producto1.mediaDocena();

producto2.pedido();

producto3.pagado();
