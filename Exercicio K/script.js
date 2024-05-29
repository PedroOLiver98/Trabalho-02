alert("Bem-vindo!"); 

let valor = parseInt(prompt("Digite um valor na faixa de  1 a 9"));

let numeroAleatorio = Math.floor(Math.random() * 9) + 1;

if (valor < 1 || valor > 9) {
    alert("O valor digitado está fora da faixa permitida");
} else {
    alert("O valor está na faixa permitida.");
}