//READY y LOAD
$(document).ready(function(){
    
    //PRODUCTOS EN EL LOCAL STORAGE
        
    localStorage.setItem("Productos disponibles", JSON.stringify(productos));
        
    //CARDS DE LOS PRODUCTOS    

    renderProductos();



    //VER CARRITO CON JQUERY

        
    $("#carrito").on("click", function(){
        $(".oculto").toggle(500);
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

    $("#limpiarCarro").on("click", function(){
        $("#dentro").children().remove();

        localStorage.removeItem("En Carro");
        
        Swal.fire({
            
            icon: 'success',
            title: 'El carro está vacío',
            showConfirmButton: false,
            timer: 1000
        })
    })



    //Se carga la página 

    $("#header").slideUp(1)
    .slideDown(2000)

    $(".ulistaProd").slideUp(0)
    .slideDown(5000)

    $("footer").slideUp(0)
    .slideDown(10000)



})


//CARDS ITEMS EN JQUERY

//FUNCIÓN QUE ME HACE LAS CARDS

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

        //ME CREA UNA MINI CARD DEL PRODUCTO EN EL CARRO

        console.log(`${producto.tipo}  relleno de  ${producto.relleno} agregado al carro`)
        $("#dentro").append(`<div id="itemCarro"><p> ${producto.tipo}</p>
        <p>${producto.relleno}</p>
        <p>${producto.caja}</p
        <p>$${producto.precio}</p>
        <button class="btn-danger quitarItem"> Quitar </button></div> 
        `)

        //PARA SACAR EL ITEM DEL CARRO DE A UNO
     
        let quitarCarro = document.getElementsByClassName("quitarItem")
           
        for( var i = 0; i < quitarCarro.length; i++){
            let boton = quitarCarro[i];
            boton.addEventListener("click", function(event){
                let botonClick= event.target;
                botonClick.parentElement.remove(function(){
                    botonClick.parentElement.fadeOut(3000)
                });
                console.log(` ${producto.tipo}  relleno de  ${producto.relleno} eliminado del carro.`)
                listaCarrito.slice(listaCarrito[0])
                
            })
            
        }



        listaCarrito.push(new Pasta (producto.tipo, producto.relleno, producto.caja, producto.precio));
        
        console.log(listaCarrito);
        

        // CARRITO EN LOCAL STORAGE LOS PRODUCTOS TIENEN SU PROPIO ID
        
        localStorage.setItem("En Carro",JSON.stringify(listaCarrito))
        
         
         if(localStorage.getItem("En Carro") != null){
         let elCarro= JSON.parse(localStorage.getItem("En Carro"))
   
         let total= 0

         for( const producto of listaCarrito){
             total = total + producto.precio;
             console.log( "Su total es de:" + total)
         }
        //  let cantidadCarro= 0
            
         for (const producto of elCarro){
        //  cantidadCarro = cantidadCarro + 1
         total= total + producto.precio
       
     }
         //  console.log(cantidadCarro)
        //   console.log(total)
   }

        //¿Cómo hago para que me eliminar los productos por separado en el storage?
    
        
    })
    
    }
}

//ORDENAR CARDS POR PRECIO.

function compare (a, b){
    if (a.precio < b.precio){
        return -1;
    }
    return 0;
 }




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


console.log(productos.sort(compare));

 //TOTAL CARRO

