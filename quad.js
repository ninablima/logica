const readline = require("readline-sync");

let numeros = []
let resultado = []

for (let i = 1; i <= 3; i++) {

    let numero = parseInt(readline.question("Digite um numero: "));
    numeros.push(numero);
}

for (let i = 0; i < numeros.length; i++) {

    let quad = numeros[i]*numeros[i]

    resultado.push(quad);
    console.log(resultado);
}