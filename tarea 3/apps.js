console.log("**************************")
console.log("Calculadora")
console.log("**************************")



console.log("1. Suma")
console.log("2. Resta")
console.log("3. Multiplicacion")
console.log("4. Division")

let acierto = false;
let contador = 0



while(contador < 4 && acierto === false ){

let num = parseInt(prompt('Ingrese un numero |1. Suma | 2. Resta | 3. Multiplicacion | 4. Division'));

if(isNaN(num)){
    console.error("Esta mal ingrese un numero")
    contador++
}
else{
switch (true) {
    case num === 1:
        console.log("Elegiste suma")
        break;
    case num === 2:
        console.log("Elegiste Resta")
        break;
    case num === 3:
        console.log("Elegiste Multiplicacion")
        break;
    case num === 4:
        console.log("Division")
        break;
    default:
        console.error("opcion no aceptada")
        break;
}



if (num === 1 ){

    let numero_1 = parseInt(prompt("Ingrese el primer numero"))
    let numero_2 = parseInt(prompt("Ingrese el segundo numero"))
    let numero_3 = numero_1 + numero_2 
    console.log(`El resultados es ${numero_3}`)
    acierto=true
}
else if (num === 2 ){

    let numero_1 = parseInt(prompt("Ingrese el primer numero"))
    let numero_2 = parseInt(prompt("Ingrese el segundo numero"))
    let numero_3 = numero_1 - numero_2 
    console.log(`El resultados es ${numero_3}`)
    acierto=true
}
else if (num === 3 ){

    let numero_1 = parseInt(prompt("Ingrese el primer numero"))
    let numero_2 = parseInt(prompt("Ingrese el segundo numero"))
    let numero_3 = numero_1 * numero_2 
    console.log(`El resultados es ${numero_3}`)
    acierto=true 
}
else if (num === 4 ){

    let numero_1 = parseInt(prompt("Ingrese el primer numero"))
    let numero_2 = parseInt(prompt("Ingrese el segundo numero"))
    let numero_3 = numero_1 / numero_2 
    console.log(`El resultados es ${numero_3}`)
    acierto=true
}
else {
    respuesta=prompt("La opcion no existe desea continuar? SI o NO")
    if (respuesta.toLocaleUpperCase()=== ("SI")){
        
        contador++
    }
    else if (respuesta.toLocaleUpperCase()=== ("NO")){
        alert("Se termina la calculadora");
        acierto=true
    }
    else {
        console.error("Error")
        contador++
    }
}


}

}

