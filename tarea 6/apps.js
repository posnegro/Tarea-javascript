// **Objeto Persona**

// Crear un objeto llamado persona que contenga los siguientes atributos:

// Nombre

// Edad

// DNI

// Domicilio

// Hijos (cantidad)

// Profesión

// Agregar Métodos:

// Saludar ( mensaje de presentación en navegador o consola)

// Listar (muestra la lista con los datos de la persona)

// **Arreglo de objetos**

// Crear un arreglo de objetos que contenga datos de películas como:

// Título

// Género

// Año

// sinopsis

// Crea una función que permita mostrar en una lista cada película con sus datos.
//-------------------------------------------------------------------------
//Persona
let Persona = {
    nombre:"Julio",
    edad: 21,
    dni: 41763890,
    Domicilio:"Monteagudo 2437",
    hijos:"0",
    Profesion:"Lolero",
    saludar:function(nombre = this.nombre){
        console.log(`Hola, mi nombre es ${nombre}`)
    },
    listar:function(){
       
            console.log(`Nombre:${this.nombre}`)
            console.log(`Edad:${this.edad}`)
            console.log(`Dni:${this.dni}`)
            console.log(`Domicilio:${this.Domicilio}`)
            console.log(`Hijos:${this.hijos}`)
            console.log(`Profesion:${this.Profesion}`)
        
    }
}

console.log(Persona.listar())



//Peliculas
let peliculas = [
  {
    nombre: "Ironman",
    genero:"Super heroes",
    anio: 2008,
    sipnosis:
      "Un empresario millonario construye un traje blindado y lo usa para combatir el crimen y el terrorismo.",
  },
  {
    nombre:"Capitan America ",
    genero:"Super heroes",
    anio: 2011,
    sinopsis: "Tras tres meses de someterse a un programa de entrenamiento físico y táctico, encomiendan a Steve Rogers su primera misión como Capitán América. Armado con un escudo indestructible, emprende la guerra contra la perversa organización HYDRA.",
  },
  {
    nombre:"anita la huerfanita",
    genero:"Drama, Familiar",
    anio: 1982,
    sinopsis:"La huerfanita especial va a la casa de Daddy Warbucks, en esta adaptación de la tira cómica y el show de Broadway."
  },
  {
    nombre:"mortal kombat",
    genero:"Accion, Fantacia",
    anio: 2021,
    sinopsis:"En el Japón del siglo XVII, unos asesinos de Lin Kuei, liderados por Bi-Han atacan y matan a los miembros del clan ninja rival, Shirai Ryu y a la esposa e hijo de Hanzo Hasashi. Hanzo mata a los atacantes antes de caer en las manos de Bi-Han y ser llevado al Inframundo. Raiden, el dios del trueno, llega y pone a salvo a la hija pequeña de Hanzo que ha sobrevivido."
  }
];
function mostrar(){
    for (let i = 0; i < peliculas.length; i++) {
    
        console.log(`Nombre:${peliculas[i].nombre}`)
        console.log(`genero:${peliculas[i].genero}`)
        console.log(`anio:${peliculas[i].anio}`)
        console.log(`sinopsis:${peliculas[i].sinopsis}`)
        console.log("---------------------------------------")
    }
}
mostrar()

