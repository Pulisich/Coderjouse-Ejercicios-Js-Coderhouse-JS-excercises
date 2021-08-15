//LOCAL STORAGE (GUARDA INFO INDEFINIDAMENTE EN EL NAVEGADOR MÁXIMO 10 MEGAS)
// localStorage.setItem("color", "Celeste")

// let datoLocalStorage = localStorage.getItem("color");
// console.log(datoLocalStorage+ " es un "+ typeof datoLocalStorage);
// localStorage.setItem("edad", 45);

// let numeroLocalSt= localStorage.getItem("edad")
// console.log(numeroLocalSt + " es un " + typeof numeroLocalSt);


// //SESSION  STORAGE ( GUARDA LA INFO HASTA QUE SE CIERRA LA PESTAÑA (DEL NAVEGADOR))
// sessionStorage.setItem("seleccionados", [1, 2, 3])
// sessionStorage.setItem("esValido", false )
// let lista= sessionStorage.getItem ("seleccionados");
// console.log (lista + " El objeto es un " + typeof lista);

// let bandera =( sessionStorage.getItem("esValido") == "true")
// console.log (bandera + " Es un dato del tipo " + typeof bandera)

// //RECORRIENDO EL STORAGE

// let cantidadElementos = sessionStorage.length;
// console.log(cantidadElementos);

// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     console.log("Clave: "+ clave);
//     console.log("Valor: "+ localStorage.getItem(clave));
// }

// //REMOVER UN DATO DEL STORAGE

//  localStorage.removeItem("edad");

// // //REMOVER TODOS LOS DATOS

//  localStorage.clear();

// //EJEMPLO APLICADO: TABLA DE MULTIPLICAR

// const multiplicar = (a,b)=> a*b;
// const guardarLocal = (clave, valor)=> { localStorage.setItem (clave, valor)};

// let ingersarNumero = parseFloat(prompt( "Ingresar Numero"))

// for (let i= 1; i <= 10 ; i++){
//     guardarLocal(i, multiplicar(ingersarNumero, i))
// }

// //EJERCICIO: PEDIR NOMBRE Y APELLIDO DEL USUARIO POR PROPMPT.
// // GUARDARLOS EN EL SESSION STORAGE Y MOSTRARLOS CON ALERT


// const nombre = prompt("Ingresar Nombre");
// const apellido = prompt ("Ingresar Apellido");

// sessionStorage.setItem("Nombre", nombre);
// sessionStorage.setItem("Apellido", apellido);

// alert("Bienvenido "+ nombre +" "+ apellido);

// //Otra forma...pero no e lo que pidieron


// let nombree = prompt("Ingresá tu nombre y apellido");

// localStorage.setItem('hola', nombree);

// let mensaje = localStorage.getItem('hola');

// alert(mensaje);

//JSON: Guardar objetos en el Storage

// const auto1= {marca: "Ford", modelo:"Taunus", anio:2010};
// const enJSON = JSON.stringify(auto1);
// localStorage.setItem("automovil",enJSON);

// //PARSEAR UN JSON


// const deJsonAObjeto= JSON.parse(localStorage.getItem("automovil"));
// console.log(deJsonAObjeto);

//EJEMPLO DIAPOSITIVA ALMACENAR ARRAYS

const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));