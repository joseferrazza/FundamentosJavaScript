const nomes = ['nome1','nome2','nome3','nome4']
const notas = [10,2,3,8]

const reprovados = nomes.filter((nome,indice) => notas[indice] <= 5)

console.log(nomes)
console.log(notas)
console.log(reprovados)