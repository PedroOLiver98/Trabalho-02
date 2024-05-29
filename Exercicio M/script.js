alert("Bem-vindo!"); 

// Solicita o nome do usuário
let nome = prompt("Digite o seu nome:");

// Solicita o sexo do usuário
let sexo = prompt("Digite o seu sexo (Masculino/Feminino):");

// Verifica o sexo e exibe a mensagem apropriada
if (sexo.toLowerCase() === "masculino") {
  alert("Ola Sr. " + nome);
} else {(sexo.toLowerCase() === "feminino")
  alert("Ola Sra. " + nome);
}
