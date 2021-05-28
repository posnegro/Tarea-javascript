let carrito =[]

class Productos{
    constructor(codigo, nombre, precio){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio


    }

    imprimeDatos(){
        console.log(`El ${this.nombre} es el producto N°${i+1} `)
        console.log(`El codigo de barra es ${this.codigo}`)
        console.log(`Su precio ${this.precio}`)
    }


}
for(i=0; i < 3; i++){

    
    let nombre = prompt(`Introduzca el nombre del producto N°${i+1}`)
        while(nombre == null || nombre == ""){        
        nombre = prompt(`Vuelva el nombre del producto N°${i+1}`)}
    
    let codigo = parseInt(prompt("codigo del producto"))
      while(isNaN(codigo)){
        codigo = parseInt(prompt("vuelva a introducir el codigo del producto"))         
    }
    let precio = parseInt(prompt("precio del producto"))
      while(isNaN(precio)){
        
         precio = parseInt(prompt("vuelva a introducir el precio del producto"))         
    
}
    let item = new Productos(codigo, nombre, precio)
    item.imprimeDatos()
    carrito.push(item)
}

