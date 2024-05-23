alert("Bem-vindo!");

let valorA = Number(prompt("Informe o valor a"));
let valorB = Number(prompt("Informe o valor b"));
let valorC = Number(prompt("Informe o valor c"));

let delta = ((valorB ** 2) -4 * valorA * valorC) ** (1/2);

let x1,x2;

if(isNaN(delta)) {
	alert("Não tem raiz")
} if (delta == 0) {
	x1 = (-1 * valorB) / (2 * valorA)
	x2 = x1
} else {
	if (delta > 0 ) {
	x1 = (-1* valorB + delta) / (2 * valorA);
	
	x2 = ( - valorB - delta) / (2 * valorA)
} 
}
alert(`Valor de X1 é: ${x1} e o Valor de X2 é: ${x2}`);