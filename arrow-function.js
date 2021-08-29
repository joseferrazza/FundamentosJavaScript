// declaracao de função
function Maior(valor1, valor2) {
    if (valor1 > valor2) {
        return valor1
    } else {
        return valor2
    }
}

console.log(Maior(3,2));

//arrow function

const maiorNumero = (valor1, valor2) => {
    if (valor1 > valor2) {
        return valor1
    } else {
        return valor2
    }
 }

 console.log(maiorNumero(3,2));
 console.log(maiorNumero(3,4));