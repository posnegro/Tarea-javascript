let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
let cantidad = 12 - contactos.length;

class Contacto{
    constructor(name, number) {
        this.name = name;
        this.number = number;
      }
}
function addContacto(){
    let namer = prompt("Ingrese el nombre del contacto").toLocaleLowerCase()
    while(namer == null ||namer == ""){        
        namer = prompt(`Vuelva a ingresar el nombre del contacto`)
        }
    let numer = parseInt(prompt("Ingrese un numero"))
    while(isNaN( numer)){
        numer = parseInt(prompt("Vuelva a ingresar un numero"))
         }   
    let idnContacto = contactos.length
if(idnContacto <= 12){
    contactos.push(new Contacto(namer, numer));
    
    localStorage.setItem("contactos",JSON.stringify(contactos));
    cantidad-- 
}
else{"Ya no se puede agregar mas contactos agenda llena"}
}
function existeContacto(){
    let namer = prompt("Ingrese el nombre del contacto").toLocaleLowerCase()  
    let user = contactos.find(function (Contacto) {
        return Contacto.name === namer;
      });
      if (user) {
        console.log("El contacto ya existe")
      } else {
        console.warn("El contacto no existe");
      }
}

function listarContactos(){
    contactos.forEach(function(Contacto) {
        console.log(`Nombre: ${Contacto.name}`)
        console.log(`Numero: ${Contacto.number}`)  
        console.log("==========================")     
    });

}


function buscarContacto(){
    let namer = prompt("Ingrese el nombre del contacto").toLocaleLowerCase()
   let user = contactos.find(function (Contacto) {
    return Contacto.name === namer;
  });

  if (user) {
    console.log(`Nombre: ${user.name}`);
    console.log(`Usuario: ${user.number}`);
    console.log("=========================");
  } else {
    console.warn("No se encuentra el contacto");
  }
}



function eliminarContacto(){
    let namer = prompt("Ingrese el nombre del contacto").toLocaleLowerCase()
    let idContacto = contactos.findIndex(function(Contacto){
        return Contacto.name === namer
    })

    if(idContacto >-1){
        let validar = confirm("Esta seguro que quiere eliminar el contacto?")
        if(validar){
            contactos.splice(idContacto,1)
            localStorage.setItem("contactos",JSON.stringify(contactos))
            console.log("El contacto ha sido borrado")
        }
        cantidad++
    }
    else{
        console.warn("El contacto no existe")
    }

}

function huecosLleno(){
    if(contactos.length== cantidad){
        console.log("La agenda esta llena")
    }
    else{
        console.log("La agenda no esta llena")
        contactos.forEach(function(Contacto) {
            console.log(`Nombre: ${Contacto.name}`)
        })
    }
}

function huecosLibres(){
    if(contactos.length <= 12){
        console.log(`Le queda ${cantidad} huecos libres para ingresar `)
    }
    else{
        console.log("No le queda huecos libres")
    }
}

