let carrito =[];
class Productos{
     constructor(i, nombre, precio){
        
         
        this.i = i
        this.nombre = nombre = prompt(`Introduzca el nombre del producto `);
        while(this.nombre == null ||this.nombre == ""){        
         this.nombre = prompt(`Vuelva el nombre del producto`);
        }
        this.precio = precio = parseInt(prompt("precio del producto"));
        while(isNaN( this.precio)){
        this.precio = parseInt(prompt("vuelva a introducir el precio del producto"));
       }
        this.item = [this.i, this.nombre, this.precio];
       carrito.push(this.item);
    
}

    imprimeDatos(){
        console.log(`agrego ${this.nombre} al carrito `)
        console.log(`El codigo de barra es $0${this.i+1}`)
        console.log(`Su precio ${this.precio}`)
    };
       

    }
function cajaRegistradora(){  

    for(i=0; i < 3; i++){

        item = new Productos(i)

        item.imprimeDatos()
}
};
cajaRegistradora()
