//26. Escreva um programa que receba 3 valores e escreva a soma dos 2 maiores.
const somaMaiores = (n1, n2, n3) => {
  const numeros = [n1,n2,n3].sort((a, b) => b - a);//(b - a) = Ordem decrescente
  return `[${numeros}]: ${numeros[0]} + ${numeros[1]} = ${numeros[0] + numeros[1]}`;
}

module.exports = somaMaiores;
