//conversao implicita

const nro = 456;
const nroStr = "456";

console.log(nro === nroStr); //compara o valor e o tipo
console.log(nro == nroStr); //compara só o valor

console.log (nro + nroStr);

//conversao explicita
console.log (nro + Number(nroStr));

//conversao string
console.log(nro.toString());
console.log('o nro é ' + String(nro));

