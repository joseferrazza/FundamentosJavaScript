const notas = [10, 9, 8, 7]

let soma =0

notas.forEach(notas => {
    soma += notas
})

let media = soma / notas.length

console.log(`A média é ${media}`)