//67. Faça um programa em JS que receba dois vetores de 10 posições de inteiros e copie o maior valor dos dois em cada posição em um terceiro vetor. Em seguida, imprima este terceiro vetor.
const vetores = (vetor1,vetor2) => {
  const vetor3 = [];
  vetor3.push(vetor1.sort((a,b) => a - b)[vetor1.length - 1]);
  vetor3.push(vetor2.sort((a,b) => a - b)[vetor2.length - 1]);
  return `1º vetor: ${vetor1}\n2º vetor: ${vetor2}\n3º vetor: ${vetor3}`;
}

module.exports = vetores;
