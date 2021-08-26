let home = document.getElementById(“main”);
class enventa{
  constructor (descripcion, imagen, precio){
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.precio = precio;
    }
  }
const propiedades = [];
propiedades.push(new enventa(“departamento 2 ambientes”,“Elementos/dpto1.jpeg”,“120000"));
propiedades.push(new enventa(“departamento 3 ambientes”,“Elementos/dpto2.jpeg”,“145000”));
propiedades.push(new enventa(“departamento 1 ambiente”,“Elementos/dpto3.jpeg”,“80000"));
for (const propiedad of propiedades){
  let card = document.createElement(“div”);
  card.innerHTML = `<h3>${propiedad.descripcion}</h3>
                    <img src=${propiedad.imagen}>
                  <p>Precio: usd ${propiedad.precio}</p>`
  home.appendChild(card);
}





21:38
la url de la imagen se guarda como un parametro del objeto y la vamos cargando dinamicamente dentro del For of. ${propiedad.imagen}