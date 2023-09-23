// Não podemos criar variáveis com palavras reservadas
// Variáveis precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos redeclarar variáveis com let
// NÃO UTILIZE VAR, UTILIZE LET.

let nome1 = 'João'; // String 

console.log('João nasceu em 1984.');
console.log(nome1, 'nasceu em 1984.');

console.log('Em 2000 João conheceu Maria.');
console.log('Em 2000', nome1, 'conheceu Maria.');

console.log('João casou-se com Maria em 2012.');
console.log(nome1, 'casou-se com Maria em 2012.');

console.log('Maria teve 1 filho com ', nome1, 'em 2015.');
console.log('Maria teve 1 filho com João em 2015.');

console.log('O filho de', nome1, 'se chama Eduardo.');
console.log('O filho de João se chama Eduardo.')


let nome; // Declarou a variável
nome = 'João'; // Inicializando a variável
console.log(nome);
nome = 'ótavio';
console.log(nome);

let nomeCliente = 'Luiz';
nomeCliente = 'Otávio';
console.log(nomeCliente);



