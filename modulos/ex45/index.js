//45. Escreva um programa que receba 5 números, e imprima a média entre eles.
const media = (...notas) => {
  let soma = 0;
  for (let nota of notas) {
    soma += nota;
  }
  const media = soma / (notas.length);
  return `Média: ${media}`;
}

module.exports = media;
