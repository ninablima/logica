const readline = require("readline-sync");

let idade = parseInt(readline.question("Qual a sua idade?"));
let carteirinha = readline.question("Voce e estudante ou idoso?(s/n)");

if (idade >= 16 && idade <18 || idade >= 65) {
    console.log("acesso liberado com meia entrada")
}

else if (idade >= 16 && carteirinha == "s") {
    console.log("acesso liberado com carteirinha de meia entrada")
}

else if (idade >= 18 && idade <65) {
    console.log("acesso liberado com inteira")
}

else{
    console.log("acesso negado")
}