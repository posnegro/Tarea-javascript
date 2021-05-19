let anotador = []

function dados(min , max){
    return Math.floor(Math.random() * (max - min) + min) ;
}

let primero = dados(1,7)
let segundo = dados(1,7)
let resultado = primero + segundo
console.log(`${primero} + ${segundo} = ${resultado} `)
console.log("----------------------------------")
    
anotador.push(primero + segundo)

for(i=0; i<=50; i++){

    let random = dados(1,6) + dados(1,6) 

    if(resultado === random){
        anotador.push(random)
    }
    else{
        console.log(`${i + 1} - ${random}`)
    }

}
console.log(anotador)



















