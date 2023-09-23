let num1 = 10.25852; // number
let num2 = 2.5; // number

// .toString transforma o num1 em String temporariamente 
console.log(num1.toString() + num2);
console.log(typeof num1);

/* 
Transforma a variável em String definitivamente 
num1 = num1.toString();
console.log(typeof num1);
*/

// Converte para número binário
console.log(num1.toString(2));

// Arredonda para quantidade de casas decimais que deseja 
console.log(num1.toFixed(2));

// Confere se o numero é inteiro, se for tem como resultado true
console.log(Number.isInteger(num1));

// Confere se a conta é inválida, se for, retorna true
let temp = num1 * 'teste';
console.log(Number.isNaN(temp));

// Não fazer conta com string 
let temp1 = num1 + '5';
console.log(temp1);



// IEEE 754-2008
let num3 = 0.7; // number
let num4 = 0.1; // number

// num3 = ((num3 * 100) + (num4 * 100)) / 100; // 0.8
// num3 = ((num3 * 100) + (num4 * 100)) / 100; // 0.9
// num3 = ((num3 * 100) + (num4 * 100)) / 100; // 1.0

num3 = Number(num3.toFixed(2));

console.log(num3.toFixed(2));
console.log(Number.isInteger(num3));