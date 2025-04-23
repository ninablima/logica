const readline = require("readline-sync");

let peso = parseFloat(readline.question("Qual o seu peso?"));
let altura = parseFloat(readline.question("Qual a sua altura?"));
let imc=peso/(altura*altura);

if (imc < 18.5) {
    console.log("Seu IMC é:" + imc);
    console.log("Abaixo do peso");
}

else if (imc >= 18.5 && imc <= 29.9){
    console.log("Seu IMC é:" + imc);
    console.log("Peso normal");
}

else if (imc >=25 && imc <= 29.9){
    console.log("Seu IMC é:" + imc);
    console.log("Peso normal");
}

else{
    console.log("Seu IMC é:" + imc);
    console.log("Obesidade");
}