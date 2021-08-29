function soma (valor1, valor2) {
    return valor1 + valor2;
}

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e a minha idade é ${idade}`
}

//valor padrao
function multiplicao(valor1=1, valor2=1) {
    return valor1 * valor2
}

console.log(soma(2,2));
console.log(nomeIdade("ze","45"));
console.log(multiplicao(5,10));
console.log(multiplicao(5));
console.log(multiplicao());
