let ciudades = []
function ingresarCiudades(){

    let ciudad = prompt("Poner ciudad")
    while (ciudad){
        
        ciudades.push(ciudad.trim().toLocaleUpperCase())
        ciudad = prompt("Poner ciudad")
    
}
console.log(ciudades)
}
ingresarCiudades()

function longitud(){

    console.log(`Hay ${ciudades.length} ciudades`)

}
longitud()

function pantalla(ciudades){

    let primer = ciudades[0]
    let tercero = ciudades[2]
    let ultima = ciudades[ciudades.length - 1]

    document.write(primer + "<br>")
    document.write(tercero + "<br>")
    document.write(ultima + "<br>")
}
pantalla(ciudades)

function agregarParis(){

    let agrgarParis = ciudades.push("PARIS")

}
agregarParis()
console.log(ciudades)

function pantalla2(){

  let segundo = ciudades[1]

  document.write(segundo + "<br>")

}
pantalla2()

function agregarBarcelona(){

    ciudades.splice(1,1,"BARCELONA")
}
agregarBarcelona()
console.log(ciudades)
