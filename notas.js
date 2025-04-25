const readline = require("readline-sync");

let notas = [];

for (let i = 1; i <= 3; i++) {
    let numero = parseFloat(readline.question("Digite um numero: "));
    notas.push(numero)
}

let soma = notas.reduce((acc, val) => acc + val, 0);
let media = soma/3;
console.log("Sua media é "+ (media.toFixed(2)))

if (media >= 6) {
    console.log("Aprovado");
}

else if (media < 6 && media >= 5 ) {
    console.log("Recuperação");
}

else {
    console.log("Reprovado")
}