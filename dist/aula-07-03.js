const meuCarro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "2.0L"
};
console.log("Exercício 1:");
console.log(meuCarro);
const multiplicar = (a, b) => a * b;
console.log("\nExercício 2:");
console.log(multiplicar(5, 3)); // 15
console.log(multiplicar(10, 2)); // 20
// Exercício 3
function inverterArray(array) {
    return array.reverse();
}
const numeros = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c", "d"];
console.log("\nExercício 3:");
console.log(inverterArray(numeros)); // [5, 4, 3, 2, 1]
console.log(inverterArray(strings)); // ["d", "c", "b", "a"]
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class RepositorioUsuario {
    constructor() {
        this.dados = [];
    }
    salvar(dado) {
        this.dados.push(dado);
    }
    obterTodos() {
        return this.dados;
    }
}
const repositorio = new RepositorioUsuario();
repositorio.salvar(new Usuario("Pedro", "pedro@gmail.com"));
repositorio.salvar(new Usuario("Maria", "maria@gmail.com")); // Correção no email
console.log("\nExercício 4:");
console.log(repositorio.obterTodos());
function processarResposta(resposta) {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    }
    else {
        console.log(`Resposta do servidor: ${resposta ? "Sucesso" : "Falha"}`);
    }
}
console.log("\nExercício 5:");
processarResposta("Operação concluída com sucesso"); // Resposta do servidor: Operação concluída com sucesso
processarResposta(true); // Resposta do servidor: Sucesso
processarResposta(false); // Resposta do servidor: Falha
const estudanteTrabalhador = {
    nome: "Pedro",
    curso: "Engenharia de Software",
    empresa: "BRB",
    cargo: "Lead of front"
};
console.log("\nExercício 6:");
console.log(estudanteTrabalhador);
