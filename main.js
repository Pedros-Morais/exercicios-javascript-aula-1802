const moment = require("moment");
const soma = (a, b) => a + b;
console.log(soma(2, 3));

const numbers = [1, 2, 3]
numbers.map((k, i) => {
    doubleOfItem = k * 2
    return console.log(doubleOfItem)
})

const agora = new Date();
const dataEspecifica = new Date(2025, 1, 16);
console.log(dataEspecifica.getFullYear());
console.log(dataEspecifica.getMonth() + 1);
console.log(dataEspecifica.toLocaleDateString("pt-BR"));
const data = moment("2025-02-16");
console.log(data.format("DD/MM/YYYY"));
console.log(data.add(10, "days").format("DD/MM/YYYY"));
const executarOperacao = (a, b, operacao) => operacao(a, b);

const double = (a, b) => {
    return a * b
}

const split = (a, b) => {
    return a / b
}

console.log(split(4, 2), "dividndo")

const mensagemBoasVindas = (nome) => {
    `Seja bem-vindo, ${nome}!`;
}


//Exercicio 1 Dobrando
console.log(double(4, 2), "multiplicando")

//Exercicio 2 Divindo 
console.log(split(4, 2), "dividndo")

//Ex 3 Multiplas Linhas
console.log(mensagemBoasVindas("Hede"));

// Exercicio 4 Executar Operacao

console.log(executarOperacao(6, 3, (a, b) => a - b));

//Exercicio 5 
const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(preco => preco * 0.9);
console.log(precosComDesconto);

//filter 
const idades = [12, 22, 17, 14];
const menoresDeIdade = idades.filter(idade => idade < 18);
console.log(menoresDeIdade); // [12, 17, 14]
//reduce 
const numeros = [2, 3, 4, 5];
const produto = numeros.reduce((total, num) => total * num, 1);
console.log(produto); // 120

