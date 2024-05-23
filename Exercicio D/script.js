alert("Bem-vindo!"); 

let aluno = prompt("Informe o Aluno(a)");
let nota1 = Number(prompt("Informe a Nota1"));
let nota2 = Number(prompt("Informe a Nota2"));
let nota3 = Number(prompt("Informe a Nota3"));
let nota4 = Number(prompt("Informe a Nota4"));

const media = 7;

let mediaAluno = (nota1 + nota2 + nota3 + nota4) / 4;
let situacao;
let notaRecuperacao;

if (mediaAluno >= media){
	situacao = "Aprovado Parabéns";
} else {
	situacao = "Vai para Recuperação";

	notaRecuperacao = Number(prompt("Informe a nota da recuperção"));
	mediaAluno = notaRecuperacao;
	if (notaRecuperacao >= media) {
		situacao = "Aprovado Parabéns";
	
	} else {
		situacao = "Reprovado";
	}
}


alert(`O Aluno(a): ${aluno} está: ${situacao} com a media de: ${mediaAluno}`);

