alert("Bem-vindo!"); 

let aluno = prompt("Informe o nome do Aluno");
let nota1 = Number(prompt("Informe a Nota Escolar n1°"));
let nota2 = Number(prompt("Informe a Nota Escolar n2°"));
let nota3 = Number(prompt("Informe a Nota Escolar n3°"));
let nota4 = Number(prompt("Informe a Nota Escolar n4°"));

const media = 5;
let valorNotas = (nota1 + nota2 + nota3 + nota4);

let resultado;

if (valorNotas >= media) {
    resultado = "Aprovado(a)";
} else {
    resultado = "Reprovado(a)";
}

alert(`O Aluno(a) ${aluno} está: ${resultado}`);




