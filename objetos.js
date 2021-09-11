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

//chaves que contem arrays
const pessoa = {
    nome: "zé",
    idade: 45,
    cpf: "27323133866",
    email: "jose.ferrazza@gmail.com",
    fone: ["16 99601-2935","16 3307-4204"]
}

console.log(pessoa)

pessoa.fone.forEach(chave => console.log(chave))

//chaves que sao objetos
pessoa.dependente = {
    nome: "Pedro",
    parentesco: "filho"
}

console.log(pessoa)
console.log(pessoa.dependente.nome)

//criando arrays de objetos
delete pessoa.dependente

pessoa.dependente = [{
    nome: "Pedro",
    parentesco: "filho"
}]
pessoa.dependente.push({
    nome: "Sofia",
    parentesco: "filha"
})

console.log(pessoa)

const mulher = pessoa.dependente.filter(dependente => dependente.nome === "Sofia")

console.log(mulher)

//funcoes
const contabancaria = {
    nome: "zé",
    idade: 45,
    cpf: "27323133866",
    email: "jose.ferrazza@gmail.com",
    fone: ["16 99601-2935","16 3307-4204"],
    saldo: 100,
    depositar: function (valor){
        this.saldo += valor
    }
}

console.log(contabancaria.saldo)
contabancaria.depositar(30)
console.log(contabancaria.saldo)