const readline = require("readline-sync");

let peso = parseInt(readline.question("Qual o seu peso?"));
let altura = parseFloat(readline.question("Qual a sua altura?"));
let imc=peso/(altura*altura);
console.log("Seu IMC é " + (imc.toFixed(1)));

if (imc < 18.5) {
    console.log("Abaixo do peso");
}

else if (imc >= 18.5 && imc <= 24.9){
    console.log("Peso normal");
}

else if (imc >=25 && imc <= 29.9){
    console.log("Sobrepeso");
}

else{
    console.log("Obesidade");
}