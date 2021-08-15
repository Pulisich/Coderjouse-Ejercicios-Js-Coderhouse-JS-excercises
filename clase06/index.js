//ARRAYS

const listaJs=[27, "Agosto", "Voley", true, "Escorpio", "Argentina", 88];
console.log(listaJs[0]);
console.log(listaJs[4]);
console.log(listaJs[2] + listaJs[5]);
let valor= listaJs[0] + listaJs[6];
console.log(valor);

// for(let i=0; i<7; i++){
//     alert(listaJs[i]);
// }

console.log("Cantidead de elementos del array: " + listaJs.length);
console.log("Método toString: " + listaJs.toString);
listaJs.push(1980);
console.log("Cantidad de elementos del array actualizado: " + listaJs.length)
console.log("Método join: " + listaJs.join("---"));
const otraLista= ["Pepe", "Alberto"];
const listasConcatenadas= listaJs.concat(otraLista);
console.log (listasConcatenadas);
const listaSubconjunto= listaJs.slice(3,5);
console.log(listaSubconjunto);


//ARRAY DE OBJETOS

const producto1={nombre: "Celular Xiaomi Redmi 9", precio: 899};
console.log(typeof producto1);
const producto2={nombre: "Celular iPhone 12", precio: 1100};
const producto3={nombre: "Samsung A10", precio: 399};
const listaCel= [producto1, producto2, producto3];
console.log(listaCel);

for (const celu of listaCel){
    console.log(celu.nombre);
    console.log(celu.precio);
}


//TYPEOF

let miFuncion =(a,b)=> a+b;
let forma= " Hexagonal";
let tamano= 1;

console.log (typeof miFuncion);
console.log(typeof forma);
console.log(typeof tamano);

if(typeof forma== "string"){
    forma= forma.trim();
}


//find (Busca por posición de lista)

const listaNum= [12, 45, 23, 87, 12];
const encontrado= listaNum.find(item=> item<13);
console.log(encontrado);

//filter (Filtra TODOS los elementos que cumplan con una condición)
const sublistaFiltro = listaNum.filter(numero=> numero > 23);

//map (Hace un array nuevo con el array anterior y la operación indicada)

const numeros = [1, 2, 3, 4, 5];
const porDos = numeros.map(x=> x*2)
console.log(numeros)
console.log(porDos)

const masCien= porDos.map(x=> x + 100);
console.log(masCien);

const nombres= ["Ana", "Ema", "Juan Carlos", "Hermegildo"];
const longitudes= nombres.map(nombre => nombre.length)
console.log(nombres);
console.log(longitudes);

class Insumo {
    constructor(marca, tipo, color, precio) {
            this.marca = marca.toUpperCase();
            this.tipo = tipo.toLowerCase();
            this.color = color.toLowerCase();
            this.precio = parseFloat(precio);
        }
        //metodos
    aplicarDescuento() {
        //descuento de un 10%
        this.precio = this.precio * 0.90;
    }
}

// let marca = prompt("Ingrese la marca del producto");
// let tipo = prompt("Ingrese el tipo del producto");
// let color = prompt("Ingrese el color del producto");
// let precio = prompt("Ingrese el precio del producto");
// let insumo1 = new Insumo(marca, tipo, color, precio);
// console.log(insumo1);
// const listaProductos = [];
// listaProductos.push(insumo1);
// console.log(listaProductos);

let insu1 = new Insumo("genius", "teclado", "negro", "699.99");
let insu2 = new Insumo("samsung", "impresora", "negro", "10800");
let insu3 = new Insumo("sony", "joystick", "azul", "11.999");
let insu4 = new Insumo("logitech", "webcam", "negro", "1699.99");
let insu5 = new Insumo("genius", "mouse", "rojo", "1000");
//insu5.aplicarDescuento();
const listaProductosFinal = [];
listaProductosFinal.push(insu1);
listaProductosFinal.push(insu2);
listaProductosFinal.push(insu3);
listaProductosFinal.push(insu4);
listaProductosFinal.push(insu5);
// console.log(listaProductosFinal);
//recorro todos los insumos de la lista y les aplico el descuento
for (const insumo of listaProductosFinal) {
    insumo.aplicarDescuento();
}
console.log(listaProductosFinal);
//si quiero aplicar descuento solo a la marca genius
const filtradosGenius = listaProductosFinal.filter(item => item.marca == "GENIUS");
console.log(filtradosGenius);
for (const elemento of filtradosGenius) {
    elemento.aplicarDescuento();
}
//si queremos que el cliente ingrese la marca de los productos que quiere filtrar
let marcaSolicitada = prompt("Ingrese la marca que desea buscar");
const filtrados = listaProductosFinal.filter(prod => prod.marca == marcaSolicitada.toUpperCase());
console.log(filtrados);