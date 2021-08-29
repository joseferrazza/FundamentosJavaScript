//declaração de função
function imprimeTexto(texto) {
    console.log (texto)
}

function soma () {
    const soma = 2 + 2;
    return soma;
}

function Matematica (valor1) {
    console.log("round: " + Math.round(valor1));
    console.log("ceil: " + Math.ceil(valor1));
    console.log("floor: " + Math.floor(valor1));
    console.log("trunc: " + Math.trunc(valor1));
    console.log("sqrt: " + Math.sqrt(valor1));
}

//chamada de função
imprimeTexto("ze");
imprimeTexto("oi");
imprimeTexto(soma());

Matematica(64.4);