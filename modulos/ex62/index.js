//62. Faça um programa em JS que receba um array de 10 posições e conte quantos números pares são elementos do array. Imprima esta quantidade.
const numeroElementosPares = (posicoes) => {
  const array = new Array(posicoes);
  let posicoesPares = 0;
  
  for (let index = 0; index < array.length; index++) if (index % 2 === 0) posicoesPares += 1;
  return posicoesPares;
}

module.exports = numeroElementosPares;
