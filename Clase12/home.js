//READY y LOAD
$(document).ready(function(){
    localStorage.setItem("productos", JSON.stringify(productos));
    renderProductos();

})

//Array con todos los productos 


//Ordenado array por precio, las cards se crean en base a este array, copado.

function compare (a, b){
    if (a.precio < b.precio){
        return -1;
    }
    return 0;
 }

 console.log(productos.sort(compare));

//CARDS ITEMS EN JQUERY

const renderProductos =()=>{
    for (const producto of productos) {
     $(".ulistaProd").append(`<li class="list-group-item"><h3> ${producto.tipo}</li>
     <li class="list-group-item"><h2>  Relleno: ${producto.relleno}</h2></li>
     <div> <img src= ${producto.foto} width: "55" height: "auto"></div>
     <li class="list-group-item"><p> Cantidad por caja: ${producto.caja}</p></li>
     <li class="list-group-item"><b> Precio: $${producto.precio}</b></li>
     <button type="button" id="boton${producto.id}"> Agregar al carro </button> `); //Quiero que éste botón me agregue los productos
    
    
     //BOTONES PARA AGREGAR AL CARRO POR CADA ITEM

     $(`#boton${producto.id}`).on("click",function(){
        console.log(`Compraste ${producto.tipo}  relleno de  ${producto.relleno}`)
        $("#dentro").append(`<div id="itemCarro"><p> ${producto.tipo}</p>
        <p>${producto.relleno}</p>
        <p>${producto.caja}</p
        <p>$${producto.precio}</p></div> `)

        
        // localStorage.setItem("Carrito",JSON.stringify(producto.tipo + " "+ producto.relleno+ " $" + producto.precio) )//¿Cómo hago para que me guarde los productos por separado en el storage?
    })
    
    }
}


// }



//BOTONES CARRITO


//VER CARRITO
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

//PAGAR CON MERCADOPAGO

let pagar= document.getElementById("pagarItem")

pagar.addEventListener("click", comprar)

function comprar(){

    Swal.fire({
        icon: 'error',
        title: '¡Chan!',
        text: 'Mercado Pago no está funcionando, probá más tarde o pedí por WhatsApp',
        footer: '<a href="https://api.whatsapp.com/send?phone=543584909380" target="blank">Pedir por WhatsApp</a>'
      })
}



//Limpiar carrito

let limpiarCarro = document.getElementById("quitarItem")
    
    limpiarCarro.addEventListener("click", limpiar)
    function limpiar(){

        
        let carro= document.getElementById("itemCarro")
        carro.parentNode.removeChild(carro)
        alert("Carro Limpio")

        // localStorage.removeItem("carrito", JSON.stringify(productos[0])) Una vez que sepa cómo poner los items de a uno aprenderé por ende a sacar los items de a uno
        };
 




  // productos.push(new Pastas ("Sorrentinos", "Jamón y Muzarella", 15, 400));
// productos.push(new Pastas ("Sorrentinos", "Calabacín asado, Muzarella, y Nueces", 15, 450));
// productos.push(new Pastas ("Sorrentinos", "Berenjenas ahumadas y Hongos", 15, 470));
// productos.push(new Pastas ("Sorrentinos", "Salmón y coso", 15, 550))
// productos.push(new Pastas ("Sorrentinos", "Carne y Ricota", 15, 390));

// for (const pastas of productos){
//    console.log(pastas.tipo +" "+ pastas.relleno +" "+ pastas.precio);
   
// };

