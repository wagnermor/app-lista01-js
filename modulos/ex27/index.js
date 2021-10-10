//27. Escreva um programa que receba 3 números e calcule a média ponderada entre eles.
//Considere que o maior número recebe peso 5 e os outros dois recebem peso 2,5.
const peso5 = (nota) => nota * 5 / 10;

const peso2_5 = (nota) => nota * 2.5 / 10;

const mediaPonderada = (n1, n2, n3) => {
  const notas = [n1, n2, n3].sort((a, b) => b - a);
  const media = peso5(notas[0]) + peso2_5(notas[1]) + peso2_5(notas[2]);
  return `Média: ${media}`;
}

module.exports = mediaPonderada;
