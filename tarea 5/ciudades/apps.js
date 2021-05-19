let ciudades = [];
//-------------------------------------------------
function ingresarCiudades(){

    let ciudad = prompt("Poner ciudad");
    while (ciudad){
        
        ciudades.push(ciudad.trim().toLocaleUpperCase())
        ciudad = prompt("Poner ciudad");
    
}
}
ingresarCiudades()
//--------------------------------------------
function listarCiudades() {

    for (let i = 0; i < ciudades.length; i++) {
      console.log(`${i + 1} - ${ciudades[i]}`);
    }
    console.log("--------------------------------")
  }
  listarCiudades();

  //-------------------------------

//-------------------------------------------------

function longitud(){

    console.log(`Hay ${ciudades.length} ciudades`)
    console.log("--------------------------------")

}
longitud();
//-------------------------------------------------
function pantalla(ciudades){
    
    let primer = ciudades[0];
    let tercero = ciudades[2];
    let ultima = ciudades[ciudades.length - 1];

    document.write("CIUDADES" + "<br>")
    document.write("#"+ primer + "<br>")
    document.write("#"+ tercero + "<br>")
    document.write("#"+ ultima + "<br>")
}
pantalla(ciudades);
//-------------------------------------------------
function agregarParis(){

    let agrgarParis = ciudades.push("PARIS")

}
agregarParis();
listarCiudades();
//-------------------------------------------------
function pantalla2(){

  let segundo = ciudades[1];

  document.write("#"+ segundo + "<br>")

}
pantalla2();

//-------------------------------------------------
function agregarBarcelona(){

    ciudades.splice(1,1,"BARCELONA")
}
agregarBarcelona();
listarCiudades();

