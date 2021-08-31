//trabalhando com for

const numeros = [100,200,300,400,500,600]
let i = 0

for (i=0; i < numeros.length; i++) {
    console.log(i, numeros [i])
}



const calculandoMedia = (arrayDeNumeros) => {
    let soma = 0

    for (i=0; i < arrayDeNumeros.length; i++) {
        soma += arrayDeNumeros[i]
    }
    console.log(soma)
    return soma / arrayDeNumeros.length

}

console.log(calculandoMedia(numeros))