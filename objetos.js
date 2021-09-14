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

for (let info in contabancaria) {
    if (typeof contabancaria[info] === "object" || typeof contabancaria[info] === "function") {
        continue
    } else {
        console.log(`${info} = ${contabancaria[info]}`)
    }
}


//dados do objeto

//buscando as chaves do objeto
const chave = Object.keys(contabancaria)
console.log(`As chaves do objeto são ${chave}`)
console.log(`A chave 1 do objeto é ${chave[1]}`)

//buscando os valores das chave
const valores = Object.values(contabancaria)
console.log(valores)

//retornando Chave + Valores em arrays
const entradas = Object.entries(contabancaria)
console.log(entradas)
console.log(entradas[1] [1])

//usando a function spread
const arrayPessoa = [
    {
        nome: 'zé',
        idade: 45,
        cpf: '27323133866',
        email: 'jose.ferrazza@gmail.com',
        fone: [ '16 99601-2935', '16 3307-4204' ],
        dependente: [
          { nome: 'Pedro', parentesco: 'filho' },
          { nome: 'Sofia', parentesco: 'filha' }
        ]
      },
      {
        nome: 'karen',
        idade: 40,
        cpf: '260.210.068-44',
        email: 'karen.ferrazza@gmail.com',
        fone: [ '16 98835-95455', '16 3307-4204' ],
        dependente: [
          { nome: 'Pedro', parentesco: 'filho' },
          { nome: 'Sofia', parentesco: 'filha' }
        ]
      }

]

const dep = [...arrayPessoa[0].dependente]
console.log(dep)
console.table(dep)

//unindo dois objetos com spread

const objeto1 = {
    campo1: "valor1",
    campo2: "valor2"
}

const objeto2 = {
    campo3: "valor3",
    campo4: "valor4"
}

let ObjSpread = {...objeto1, ...objeto2}

console.log(ObjSpread)

const strJson = JSON.stringify(ObjSpread)
console.log(strJson)

const objJson = JSON.parse(strJson)
console.log(objJson)