// # Exercício 1

// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
//     ```
//     Estas são as comidas favoritas de nomeDoUsuario
//     - Comida1
//     - Comida2
//     - Comida3
//     ```
    
// Você deve usar apenas um `console.log()` para isso

//   <details> 
//   <summary> 💡 Dica</summary>
  
//     ⭐ Você pode juntar texto com variáveis de duas formas:
//     - Concatenando as strings (com o sinal de +)
//     - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
//     Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
//   </details>

let nome 
let comida1
let comida2
let comida3
nome = prompt("qual o seu nome?")
comida1= prompt("qual a sua comida favorita 1?")
comida2= prompt("qual a sua comida favorita 2?")
comida3= prompt("qual a sua comida favorita 3?")
console.log("essas são as comidas favoritas de " + nome + "\n" + comida1 + "\n" + comida2 + "\n" + comida3)

