//63. Escreva um programa que receba dois vetores de números reais de mesma dimensão (10 posições), e imprima o vetor resultante da soma destes vetores.
const somaVetores = (vetorA, vetorB) => {
  let vetorSoma = [];
  for (let i = 0; i < vetorA.length; i+= 1) vetorSoma.push(vetorA[i] + vetorB[i]);
  return vetorSoma.join('-');
}

const printSomaVetores = (vetorA, vetorB) => {
  if (vetorA.length !== 10 && vetorB.length !== 10) {
    return `Cada vetor precisa conter 10 números`;
  } else {
    return somaVetores(vetorA, vetorB);
  }
}

module.exports = printSomaVetores;
