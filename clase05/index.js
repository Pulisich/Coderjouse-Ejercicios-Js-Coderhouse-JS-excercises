//OBJETOS
//LITERALES

// const lapicera1={
//     color: "Rojo",
//     marca: "BIC"//no hace falta ponerle coma al último
// }

// console.log(lapicera1.color)
// lapicera1.color= "Azul";
// console.log(lapicera1.color);
// console.log(lapicera1);

//CONSTRUCTORES

// function Persona (nombre, edad, calle){
//     this.nombre= nombre;
//     this.edad = edad;
//     this.calle= calle;
// }

// const persona1 = new Persona ("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona ("Marge", 36, "Av. Siempreviva 742");

// console.log(persona1)
// console.log(persona2)

//FUNCION CONSTRUCTORA

// function Automovil(marca, modelo, color){
//     this.marca= marca;
//     this.modelo= modelo;//ESTOS SON PARÁMETROS
//     this.color= color;
// }

// const auto1= new Automovil("Ford", "Taunus", "Negro");
// let auto2=new Automovil("Dodge", "Charger-Familia", "Negro");
// let auto3= new Automovil("Subaru", "Express", "Azul");

// console.log(auto1)
// console.log(auto2)
// console.log(auto3)

//FUNCION CONSTRUCTORA CON OBJETOS LITERALES COMO PARÁMETROS

 function Olimpiadas(objLit){
     this.nombre= objLit.nombre;
     this.medalla= objLit.medalla;
     //MÉTODOS
     this.mostrar= function(){alert("El deporte es: "+ this.nombre + " y su medalla es de: " + this.medalla)};    

    }

 const deporte1= new Olimpiadas({nombre:"Esgrima", medalla:"ORO"})
 console.log(deporte1);
deporte1.mostrar();
//METODOS de STRING

let frase="Hola mi nombre es PEPE";
console.log(frase.length)
let fraseMayus= frase.toLocaleUpperCase();
let fraseMinus= frase.toLowerCase();
console.log(frase)
console.log(fraseMayus)
console.log(fraseMinus)

//CLASES

class Computadora{
    constructor(tipo, sistema, memoria, procesador){
        this.tipo=tipo;
        this.sistema=sistema;
        this.memoria=memoria;
        this.procesador=procesador;
    }
    mostrarComputadora(){
        console.log(this);
    }
    actualizarMemoria(){
        let nuevaMemo= parseInt(prompt("Ingrese el nuevo valor total de memoria RAM: "))
        this.memoria=nuevaMemo;
    }
}
const compu1= new Computadora("Notebook", "Linux", 8, "Intel i7");
const compu2= new Computadora("Desktop", "Windows", 12, "Intel i6");
console.log(compu1)
console.log(compu1.sistema)
compu1.mostrarComputadora();
compu2.mostrarComputadora();
compu1.actualizarMemoria();
compu1.mostrarComputadora();