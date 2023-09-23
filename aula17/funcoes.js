// Função: executa uma ação 
// Tudo que estiver dentro da função estar protegido 
function saudacao(nome) {
    return `Bom dia ${nome}`;
}

// Para chamar a função coloca os parenteces na frente para falar que essa função está sendo executada; 
const variavel = saudacao('Luiz');
console.log(variavel);


function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(3, 1));
console.log(soma(10, 2));

const resultado = soma(2, 2);
console.log(resultado);

