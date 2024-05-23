alert("Bem-vindo!"); 

let numA = Number(prompt("Informe o primeiro número"));
let numB = Number(prompt("Informe o segundo número"));
let numC = Number(prompt("Informe o terceiro número"));

if (numA > numB && numB >= numC) {
   alert(`${numC},${numB},${numA}`);
} else if (numB >= numA && numB > numC && numA >= numC) {
   alert(`${numC},${numA},${numB}`);
} else if (numB > numA && numB >= numC && numA <= numC) {
   alert(`${numA},${numC},${numB}`);
} else if (numB > numA && numB <= numC) {
   alert(`${numA},${numB},${numC}`);
} else if (numB < numA && numA < numC) {
   alert(`${numB},${numA},${numC}`);
} else if (numB < numC && numC <= numA) {
   alert(`${numB},${numC},${numA}`);
} else {
   alert(`${numA},${numB},${numC}`);
}
