//61. Faça um programa em JS que crie e inicialize um array de 20 posições de inteiros com 0 para cada elemento. Imprima o vetor em seguida, indicando a posição e o valor na posição (um por linha).
const criaArray = () => {
  let array = [];
  for (i = 0, item = 1; i < 20; i++, item ++) {
    array.push(0);
    let zero = '';
    if (i < 10) zero = '0';
    if (item < 10) item = '0' + item;
    console.log(`index(${zero + i}): ${array[i]} ---> ${item}º item`);
    parseInt(item);
  }
}

module.exports = criaArray;
