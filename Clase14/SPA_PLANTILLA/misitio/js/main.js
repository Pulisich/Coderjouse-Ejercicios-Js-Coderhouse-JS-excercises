//EJEMPLO SPA PLANTILLA

const app = new ProductoController( new ProductoModel(), new ProductoView());

const routes = [

    { path: '/' ,action: 'agregar'},
    { path: '/pagina1', action: 'listar'},
    { path: '/pagina2', action: 'buscar'},

];

console.dir(location);

//OBTENER RUTA ACTUAL (USANDO EL OBJETO LOCATION Y SU PROPIEDAD HASH)

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
console.log(parseLocation) 