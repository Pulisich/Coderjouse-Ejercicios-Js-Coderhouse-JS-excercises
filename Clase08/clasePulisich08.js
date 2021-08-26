let nombre=prompt("¿Cuál es tu nombre?")
let apellido=prompt("¿Cuál es tu nombre de familia?")


console.log(nombre + " "+ apellido);
alert("Bienvenido " + nombre +" "+ apellido);

 function nacimiento(anio, edad) {
     let fecha= anio - edad
     return fecha  
} 

 let edadActual= parseInt(prompt("¿Cuántos años tenés?"));
 let anioActual= 2021;
 let anioNacimiento= nacimiento(anioActual, edadActual)
 console.log(anioNacimiento)

 if (anioNacimiento > 2003){
    alert("No vendemos a menores de edad, volvé con un adulto.")
}

let telefono= prompt("Ingrese un número de teléfono")
console.log(telefono)



 sessionStorage.setItem("Nombre", nombre);
 sessionStorage.setItem("Apellido", apellido);
 sessionStorage.setItem("Telefono", telefono);



let presentacion = document.getElementById("nombreDom")
function presentar(){
    presentacion.innerText = nombre + " " + apellido
}
presentar();
 








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


const productos= [];

productos.push(new Pastas ("Sorrentinos", "Jamón y Muzarella", 15, 400));
productos.push(new Pastas ("Sorrentinos", "Calabacín asado, Muzarella, y Nueces", 15, 450));
productos.push(new Pastas ("Sorrentinos", "Berenjenas ahumadas y Hongos", 15, 470));
productos.push(new Pastas ("Sorrentinos", "Salmón y coso", 15, 550))


for (const pastas of productos){
    console.log(pastas.tipo +" "+ pastas.relleno +" "+ pastas.precio);
    
};

function compare (a, b){
    if (a.precio < b.precio){
        return -1;
    }
    return 0;
}

console.log(productos.sort(compare));

//BOTONES CARRITO



let carrito= document.getElementById("carrito");
let carroVisible = false;//estado inicial del carro
carrito.onclick= () =>{
    //muestra el div oculto que sería el carrito. 
    muestraOculto("carro", carroVisible )
    carroVisible = !carroVisible;//si era false, se pasa a true y viceversa
    
};

function muestraOculto(nombre, visibilidad){
    let elemento = document.getElementById(nombre)
    if (visibilidad== false){
        if(elemento.classList.contains("oculto")){
            elemento.classList.remove("oculto");    
        }
        elemento.className += "visible"//me agrega el visible a la clase y aparece
    }else {
        if(elemento.classList.contains("visible")){
            elemento.classList.remove("visible")
        }
        elemento.className+= "oculto"//me agrega el oculto a la clase y desaparece
    }
}

let limpiarCarro = document.getElementById("quitarItem")
console.log (limpiarCarro)

// let enCarro = document.createElement("ul")

// enCarro.innerhtml = productos

// document.dispatchEvent,



 agregarCarro= document.getElementById("botonCompra1")
 agregarCarro.onclick = () => {
     alert("¿Querés agregar este producto al carrito?");
 console.log("Producto 1 agregado al carro")}; //Después ver bien cómo asociar productos a botones.

// agregarCarro2= document.getElementById("botonCompra2")
// agregarCarro2.onclick = () => {alert("¿Querés agregar este producto al carrito?");
// console.log("Producto 2 agregado al carro")}; //Después ver bien cómo acumular más de un producto.

// agregarCarro3= document.getElementById("botonCompra3")
// agregarCarro3.onclick = () => {alert("¿Querés agregar este producto al carrito?");
// console.log("Producto 3 agregado al carro")}; 

// agregarCarro4= document.getElementById("botonCompra4")
// agregarCarro4.onclick = () => {alert("¿Querés agregar este producto al carrito?");
// console.log("Producto 4 agregado al carro")}; 

// agregarCarro5= document.getElementById("botonCompra5")
// agregarCarro5.onclick = () => {alert("¿Querés agregar este producto al carrito?");
// console.log("Producto 5 agregado al carro")}; 

// agregarCarro6= document.getElementById("botonCompra6")
// agregarCarro6.onclick = () => {alert("¿Querés agregar este producto al carrito?");
// console.log("Producto 6 agregado al carro")}; 


carro.onmouseover= () => console.log("El carro es este aunque tiene forma de cesta")

//Entregable Complementario 08

//Hago el div que contiene las cards

let noMeLaCont = document.createElement("div");//Acá le digo que me cree un div para las cards.
noMeLaCont.setAttribute("class","containerCards");

//Hago las cards

for (const pastas of productos){
    let baseCard = document.createElement("div");
    baseCard.setAttribute("class", "productos")

//Por cada pasta en productos voy a hacer un div que sirve de base que va a tener de clase productos.

    let divCard = document.createElement("div");
    divCard.setAttribute("class", "card");
    baseCard.appendChild(divCard);//Le enchufo el pibe card al div basecard.

//Creo el  div del body de las cards y se lo enchufo al div card

    let divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "cardBody");
    divCard.appendChild(divCardBody);

//Contenido de las cards

    let cardPasta = document.createElement("p");
    cardPasta.setAttribute("class", "datoProd");
    cardPasta.innerText= pastas.tipo;//poneme el texto del tipo de pasta, por alguna razón no puedo hacerlo lista.
    divCardBody.appendChild(cardPasta);//el pibe cardpasta enchufado al div del body

    let cardPastaRelleno = document.createElement("p");
    cardPastaRelleno.setAttribute("class", "datoProd");
    cardPastaRelleno.innerText = pastas.relleno;
    divCardBody.appendChild(cardPastaRelleno);

    let cardPastaCantidad = document.createElement("p");
    cardPastaCantidad.setAttribute("class", "datoProd");
    cardPastaCantidad.innerText= pastas.cantidad;
    divCardBody.appendChild(cardPastaCantidad);

    let cardPastaPrecio = document.createElement("p");
    cardPastaPrecio.setAttribute("class", "datoProd");
    cardPastaPrecio.innerText= pastas.precio;
    divCardBody.appendChild(cardPastaPrecio);

    noMeLaCont.appendChild(baseCard) //acá le enchufo todo lo que acabo de hacer al div que contiene las cards

}

document.getElementById("cards").appendChild(noMeLaCont);//ac+a le enchufo el div container de las cards con las cards al div que hice en el HTML para poder meterle las cards.

