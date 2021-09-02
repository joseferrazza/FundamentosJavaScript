const cliente = {
    nome: "zé",
    idade: 45,
    cpf: "27323133866",
    email: "jose.ferrazza@gmail.com"
}

//acessando dados usando a notacao de pontos
console.log(`O nome do cliente é ${cliente.nome} e a idade do cliente é ${cliente.idade}`)

//acessando dados usando a notação de colchetes
const chaves = ["nome","idade","cpf","email"]

console.log(cliente[chaves[0]])
console.log(cliente["nome"])
chaves.forEach(chave => console.log(cliente[chave]))

//adicionando chaves
cliente.fone = "996012935"

console.log(cliente)

//alterando valor
cliente.fone = "3307-4204"

console.log(cliente)

//deletando chaves
delete cliente.idade

console.log(cliente)


