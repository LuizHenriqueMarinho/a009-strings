// # Exercício 3

// A partir da frase a seguir, faça o que se pede

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

// **EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”

//Crie a const para a frase aqui

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase)
const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja")
console.log(novaFrase)
let verifica
console.log(verifica = novaFrase.includes("verde"))
console.log(verifica = novaFrase.includes("laranja"))
let fraseMaiuscula = novaFrase.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")
console.log(fraseMaiuscula)