let carrito =[]
class Productos{
     constructor(codigo , nombre , precio ){
        this.codigo = codigo 
        this.nombre = nombre 
        this.precio = precio 
        this.i = 001

    }

    imprimeDatos(){
        console.log(`El ${this.nombre} es el producto N° `)
        console.log(`El codigo de barra es ${this.codigo}`)
        console.log(`Su precio ${this.precio}`)
    }

    crearProducto(){
        
        this.nombre = prompt(`Introduzca el nombre del producto N°$`)
        while(this.nombre == null ||this.nombre == ""){        
         this.nombre = prompt(`Vuelva el nombre del producto N°$`)
        }
        this.codigo = parseInt(prompt("codigo del producto"))
        while(isNaN(this.codigo)){
            this.codigo = parseInt(prompt("vuelva a introducir el codigo del producto"))         
        }
         this.precio = parseInt(prompt("precio del producto"))
         while(isNaN( this.precio)){
            this.precio = parseInt(prompt("vuelva a introducir el precio del producto"))
        }
        carrito.push(item)
         }
    

    }
let item = new Productos(this.codigo, this.nombre, this.precio)


item.crearProducto()
item.imprimeDatos()
 



    // 4{


    //     let nombre = prompt(`Introduzca el nombre del producto N°${i+1}`)
    //         while(nombre == null || nombre == ""){        
    //         nombre = prompt(`Vuelva el nombre del producto N°${i+1}`)}
        
    //     let codigo = parseInt(prompt("codigo del producto"))
    //       while(isNaN(codigo)){
    //         codigo = parseInt(prompt("vuelva a introducir el codigo del producto"))         
    //     }
    //     let precio = parseInt(prompt("precio del producto"))
    //       while(isNaN(precio)){
            
    //          precio = parseInt(prompt("vuelva a introducir el precio del producto"))         
        
    // }
    //     let item = new Productos(codigo, nombre, precio)
    //     item.imprimeDatos()
    //     carrito.push(item)
    // }
    
    

