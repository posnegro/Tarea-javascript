//Tarea 1
let nombre = "julio"

const mayu= (cadena) => {
    const primerCaracter = cadena.charAt(0).toUpperCase();
    const restoDeLaCadena = cadena.substring(1, cadena.length);
    return primerCaracter.concat(restoDeLaCadena);
  }
console.log (mayu(nombre))

console.log(nombre.toUpperCase().charAt(0)+nombre.substr(1,2)+nombre.substr(3,4))










//Tarea 2
let numero_1 = 25 ;

let numero_2 = 40 ;

let numero_3 = 3;

console.log(`El numero maximo es: ${Math.max(numero_1, numero_2, numero_3)}`);
console.log(`El numero maximo es: ${Math.max(numero_1, numero_2, numero_3)}`);

console.log(Math.sqrt(40))

//tarea 3
let numero1 = 20 ;
let numero2 = 30 ;

if (numero1 > numero2 ) {
   console.log(`${numero1} es mayor que ${numero2} la suma de ${numero1} y ${numero2} es igual a ${numero1 + numero2} `)
}

else if (numero1 < numero2 )
{
    console.log(`${numero1} es menor que ${numero2} la suma de ${numero1} y ${numero2} es igual a ${numero2 - numero1} `)
}
else  {
    console.log(`${numero1} es igual a ${numero2} la multiplicacion de ${numero1} y ${numero2} es igual a ${numero1 * numero2}`)
}

