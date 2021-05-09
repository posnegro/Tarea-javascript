
let acierto = false;
let contador = 0



while(contador < 4 && acierto === false )
{

let num = prompt('Ingrese un numero | + | - | * | /');

let valor1= parseInt(prompt("Ingrese el primer numero"))
let valor2= parseInt(prompt("Ingrese el primer numero"))
let operacion= parseInt(prompt("Ingrese el primer numero"))
if(isNaN(numero_1), isNaN(numero_2), isNaN(operacion) ){
    isNaN = 0
}


switch (num) {
    case "+":
        alert("Elegiste suma")
        
    if (num === "+" ){

        let numero_1 = parseInt(prompt("Ingrese el primer numero"))
         numero_1 = numero_1 + parseInt(prompt("Ingrese el segundo numero"))
        if(isNaN(numero_1)){
            console.error("Esta mal ingrese un numero")
            contador++
        }
        else 
        {console.log((`El resultados es ${numero_1}`))
        acierto=true
    }
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
         break;
    case "-":
        alert("Elegiste Resta")
        if (num === "-" ){

            let numero_1 = parseInt(prompt("Ingrese el primer numero"))
             numero_1 = numero_1 - parseInt(prompt("Ingrese el segundo numero"))
         if(isNaN(numero_1)){
                console.error("Esta mal ingrese un numero")
                contador++
            }
            else 
            {console.log((`El resultados es ${numero_1}`))
            acierto=true
        }
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
        break;
    case "*":   
    alert("Elegiste Multiplicacion")
    if (num === "*" ){

        let numero_1 = parseInt(prompt("Ingrese el primer numero"))
         numero_1 = numero_1 * parseInt(prompt("Ingrese el segundo numero"))
        if(isNaN(numero_1)){
            console.error("Esta mal ingrese un numero")
            contador++
        }
        else 
        {console.log((`El resultados es ${numero_1}`))
        acierto=true
    }
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
       break;
    case "/":
    alert("Elegiste division")
    if (num === "/" ){
        let numero_1 = parseInt(prompt("Ingrese el primer numero"))
         numero_1 = numero_1 / parseInt(prompt("Ingrese el segundo numero"))
         if(isNaN(numero_1)){
            console.error("Esta mal ingrese un numero")
            contador++
        }
        else 
        {console.log((`El resultados es ${numero_1}`))
        acierto=true
    }
         
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
        break;
    default:
        console.error("opcion no aceptada")
        contador++
        break;





    }


}












