let numero = 0 ;
let resultado = 0;

do{
    numero = parseInt(prompt("Ponga algo"))
    if(isNaN(numero)){
        numero = 0 
    }
    resultado = resultado + numero 

}
while(numero != 0);
console.log(resultado)