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


