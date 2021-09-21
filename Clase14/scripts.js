//READY y LOAD
$(document).ready(function(){
    localStorage.setItem("productos", JSON.stringify(productos));
    renderProductos();

    //VER CARRITO CON JQUERY

    
$("#carrito").on("click", function(){
    $(".oculto").toggle(1500);
})



//PAGAR CON MERCADOPAGO EN JQUERY

$("#pagarItem").on("click", function(){
    Swal.fire({
        icon: 'error',
        title: '¡Chan!',
        text: 'Mercado Pago no está funcionando, probá más tarde o pedí por WhatsApp',
        footer: '<a href="https://api.whatsapp.com/send?phone=543584909380" target="blank">Pedir por WhatsApp</a>'
      })
})

// 



//LIMPIAR CARRO ¡AHORA EN JQUERY!
$("#quitarItem").on("click", function(){
    $("#itemCarro").hide( "fast" , function(){
        $("#itemCarro").remove();
    })
    
    localStorage.removeItem(("En Carro").slice());


    
})


$("#header").slideUp(1)
.slideDown(2000)

$(".ulistaProd").slideUp(0)
.slideDown(5000)

$("footer").slideUp(0)
.slideDown(10000)

})


//Array con todos los productos 

let listaCarrito= [];

class Pasta {
    constructor(tipo, relleno, caja, precio){
        this.tipo= tipo;
        this.relleno= relleno;
        this.caja= caja;
        this.precio= precio;
        this.cantidad= 1;
    }
};
 

// productos.push(new Pastas ("Sorrentinos", "Jamón y Muzarella", 15, 400));
// productos.push(new Pastas ("Sorrentinos", "Calabacín asado, Muzarella, y Nueces", 15, 450));
// productos.push(new Pastas ("Sorrentinos", "Berenjenas ahumadas y Hongos", 15, 470));
// productos.push(new Pastas ("Sorrentinos", "Salmón y coso", 15, 550))
// productos.push(new Pastas ("Sorrentinos", "Carne y Ricota", 15, 390));

// for (const pastas of productos){
//    console.log(pastas.tipo +" "+ pastas.relleno +" "+ pastas.precio);
   

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
     $(".ulistaProd").append(`<li class="list-group-item"><h3> ${producto.tipo}</h3></li>
     <li class="list-group-item"><h2>  Relleno: ${producto.relleno}</h2></li>
     <div> <img src= ${producto.foto} width: "55" height: "auto" class = "imgProd"></div>
     <li class="list-group-item"><p> Cantidad por caja: ${producto.caja}</p></li>
     <li class="list-group-item"><b> Precio: $${producto.precio}</b></li>
     <button type="button" id="boton${producto.id}"> Agregar al carro </button> `); //Genera un botón por cada producto con su propio ID
    
    
     //BOTONES PARA AGREGAR AL CARRO POR CADA ITEM

     $(`#boton${producto.id}`).on("click",function(){
        console.log(`Compraste ${producto.tipo}  relleno de  ${producto.relleno}`)
        $("#dentro").append(`<div id="itemCarro"><p> ${producto.tipo}</p>
        <p>${producto.relleno}</p>
        <p>${producto.caja}</p
        <p>$${producto.precio}</p></div> `)

        listaCarrito.push(new Pasta (producto.tipo, producto.relleno, producto.caja, producto.precio));
        
        console.log(listaCarrito);

        //Los productos están guardados en el Carrito en local storage, almacena uno por uno con cada id nuevo.
        localStorage.setItem("En Carro",JSON.stringify(listaCarrito))//¿Cómo hago para que me eliminar los productos por separado en el storage?
    
        
    })
    
    }
}


// }



//BOTONES CARRITO





//¿Hey Lautaro podrías chequear este código? Es exactamente lo mismo que arriba pero debería avisarme cuando el carro está vacío...pero no lo hace.

// let limpiarCarro = document.getElementById("quitarItem")
    
//     limpiarCarro.addEventListener("click", limpiar)
//     function limpiar(){

        
//         let carro= document.getElementById("itemCarro")
//         carro.parentNode.removeChild(carro)
        
//         if(carro.parentNode.removeChild(carro)=== null){
//             alert("Carro Limpio")
//         } //Acá debería avisarme que el carro está vacío
        
//         for( limpiarCarro of limpiar){
//         localStorage.removeItem("Carrito"); //Una vez que sepa cómo poner los items de a uno aprenderé por ende a sacar los items de a uno
//         };
//     }
 



