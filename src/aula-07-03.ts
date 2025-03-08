// Exercício 1
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "2.0L"
};

console.log("Exercício 1:");
console.log(meuCarro);

// Exercício 2
interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (a, b) => a * b;

console.log("\nExercício 2:");
console.log(multiplicar(5, 3)); // 15
console.log(multiplicar(10, 2)); // 20

function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}

const numeros = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c", "d"];

console.log("\nExercício 3:");
console.log(inverterArray(numeros)); 
console.log(inverterArray(strings)); 


interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
class Usuario {
    constructor(public nome: string, public email: string) {}
}

class RepositorioUsuario implements Repositorio<Usuario> {
    private dados: Usuario[] = [];

    salvar(dado: Usuario): void {
        this.dados.push(dado);
    }

    obterTodos(): Usuario[] {
        return this.dados;
    }
}

const repositorio = new RepositorioUsuario();
repositorio.salvar(new Usuario("Pedro", "pedro@gmail.com"));
repositorio.salvar(new Usuario("Maria", "maria@gmail.com")); 

console.log("\nExercício 4:");
console.log(repositorio.obterTodos());

type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    } else {
        console.log(`Resposta do servidor: ${resposta ? "Sucesso" : "Falha"}`);
    }
}

console.log("\nExercício 5:");
processarResposta("Operação concluída com sucesso"); 
processarResposta(true); 
processarResposta(false); 


interface Estudante {
    nome: string;
    curso: string;
}

interface Trabalhador {
    empresa: string;
    cargo: string;
}

type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Pedro",
    curso: "Engenharia de Software",
    empresa: "BRB",
    cargo: "Lead of front"
};

console.log("\nExercício 6:");
console.log(estudanteTrabalhador);