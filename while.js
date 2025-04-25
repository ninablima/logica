const readline = require("readline-sync");

let numeros = [];
let numero = null;

while (numero !== 0) {

    numero = parseInt(readline.question("Digite um numero: "));

    if (numero !== 0);

    numeros.push(numero);

}

let soma = numeros.reduce((acc, val) => acc + val, 0);
console.log("Soma total: " + soma)