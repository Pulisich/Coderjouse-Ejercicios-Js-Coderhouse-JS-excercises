//DOM

console.dir(document.body);

//ACCESO POR ID
let seccionSuperior= document.getElementById("superior");//la transformo en variable para poder usarla después. 
console.log (seccionSuperior.innerHTML);
console.log(seccionSuperior.innerText);
seccionSuperior.style.background= "cyan";

let vinculo= document.getElementById( "colores");
console.log (vinculo.innerText);

vinculo.style.font = "italic bold 25px Arial"

function cambiarVinculo(){
    vinculo.innerText= prompt("Ingrese el texto del link");
}

cambiarVinculo();
// //ACCESO POR CLASE





// //ACCESO POR TAG NAME

// document.getElementsByTagName();
