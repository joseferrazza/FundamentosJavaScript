const notas = [10, 9, 8, 7]

let soma =0

notas.forEach(notas => {
    soma += notas
})

let media = soma / notas.length

console.log(`A média é ${media}`)

// dado um array, retornar outro array que adicione um ponto às notas


//usando function
function pontoAdicional (nota) {
    if (nota != 10) {
        nota += 1
    }
    return nota
}

const novoArrayNotas = notas.map(pontoAdicional)
console.log('Usando function')
console.log(notas)
console.log(novoArrayNotas)

//usando arrow function
const novoArrayNotasAF = notas.map(nota => {
    if (nota != 10) {
        nota += 1
    }
    return nota
})
console.log('Usando Arrow function')
console.log(notas)
console.log(novoArrayNotasAF)

//usando ternarias
const novoArrayNotasT = notas.map(nota => nota!=10 ? nota += 1: nota )
console.log('Usando ternarias')
console.log(notas)
console.log(novoArrayNotasAF)

//multiplicando por 10

const arrayNums = [1, 2, 3, 4]

const novoArrayNums = arrayNums.map(notas => {
    notas *= 10
    return notas
})

console.log(arrayNums)
console.log(novoArrayNums)
