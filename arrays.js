const notas = [10, 6.5, 8, 7.5];

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

console.log(notas);
console.log(`média: ${media}`);

//adicionando elementos ao array 
notas.push(7); //ultima posicao
console.log(notas);

notas.unshift(2); //primeira posição
console.log(notas);


//deletando elementos do array
notas.pop(); //ultima posicao
console.log(notas);

notas.shift(); //primeira posicao
console.log(notas);

//procurando um elemento
console.log(notas.find(valorBusca => valorBusca == 8)); //vai achar o 8
console.log(notas.find(valorBusca => valorBusca == 12)); //nao vai achar nada
console.log(notas.find(valorBusca => valorBusca < 8)); //vai achar o 6.5 (primeiro elemento que satisfaz)

//procurando um indice
console.log(notas.findIndex(valorBusca => valorBusca == 8)); //vai achar o 2
console.log(notas.findIndex(valorBusca => valorBusca == 12)); //nao vai achar nada (-1)
console.log(notas.findIndex(valorBusca => valorBusca < 8)); //vai achar o 1 (primeiro elemento que satisfaz)

//dividindo arrays
const nomes = ['nome1', 'nome2', 'nome3', 'nome4','nome5','nome6' ]
const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(nomes);
console.log(sala1);
console.log(sala2);

//alterando um item do array
const alunos = ['nome1', 'nome2', 'nome3', 'nome4','nome5','nome6' ];
console.log(`Lista antiga: ${alunos}`)

// vai tirar os registros 2 e 3 e incluir um unico no lugar
alunos.splice(1,2,'nomeAlterado'); // parametro 1 -> onde começa / parametro 2-> quantos deleta / parametro 3 -> qual insere
console.log(`Lista nova: ${alunos}`)

//vai incluir alterar um novo registro na posicao 1
alunos.splice(1,1,"nome2");
console.log(`Lista com segunda alteraçã: ${alunos}`)

//vai incluir incluir um novo registro na posicao 2
alunos.splice(2,0,"nome3");
console.log(`Lista com segunda alteraçã: ${alunos}`)