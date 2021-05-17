
let carrito = []

//Agregar productos
function agregarProductos(x){
    do {
            productos = (prompt("introduzca el producto y cancele cuando finalice"))
            
            if (productos === "" ){
                alert("Ponga un producto!")
            }
            else if ( productos === null){
                alert("Finalizo su compra")
            }
            else{
                x.push(productos.toLocaleUpperCase())
            }
        }
    while (productos != null )
}

//Listar productos
function Listar(){
    console.log(carrito)
}
// Buscar los productos

function buscar(query) {
    return carrito.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }

//eliminar productos
function eliminar(position){
    let  posicion = carrito.indexOf(position.toLocaleUpperCase())
        carrito.splice(posicion, 1)
}

 do{
 opciones = prompt("Que desea  Agregar/Listar /Buscar / Buscarlos/ Eliminar/ en el carrito cancele para finalizar ")
if( opciones != null){
switch (opciones.toLocaleUpperCase()) {
    case "AGREGAR":
        agregarProductos(carrito);
        break;
    case "LISTAR":
           Listar()
         break;
    case "BUSCAR":
        let palabra = prompt("Que producto decea buscar")
         let buscar_Completa = carrito.find(function(array){
           return array === palabra.toLocaleUpperCase()
         })
         console.log(buscar_Completa)
            break;
    case "BUSCARLOS":
        let filter = prompt("Las iniciales del producto que desea buscar")
        console.log(buscar(filter));
            break;
    case "ELIMINAR":
        let  eliminando1 = prompt("eliminar elija la posicion del producto")
        eliminar(eliminando1)
            break;
    default:
        console.log("Opcion no admitida")
        break;
}
}
} while ( opciones != null )
