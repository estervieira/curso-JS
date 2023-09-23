let num1 = 9.54578;

// Arredonda o número para baixo
let num2 = Math.floor(num1);
console.log(num2);

// Arredonda o número para cima
let num3 = Math.ceil(num1);
console.log(num3);

// Retorna o valor de um número arredondado para o inteiro mais próximo
let num4 = Math.round(num1);
console.log(num4);

// Maior número em uma sequência 
console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 6));

// Menor número em uma sequência 
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 6));

// Número aleatório entre 0 e 1, sem incluir o 1
console.log(Math.random());

// Número aleatório entre 10 e 5 
const aleatorio = Math.random() * (10 - 5 ) + 5;
console.log(aleatorio);

// Número aleatório entre 10 e 5 sem casas decimais 
const aleatorio1 = Math.round(Math.random() * (10 - 5 ) + 5);
console.log(aleatorio1);

// PI
console.log(Math.PI);

// Potenciação
console.log(Math.pow(2, 10));
console.log(2 ** 10);

// Rais quadrada 
let num5 = 9;
console.log(num5 ** 0.5);

// No js não dar erro com a conta com denominador 0, retorna infinty
console.log(100/0);