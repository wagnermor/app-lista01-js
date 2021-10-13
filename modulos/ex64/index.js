//64. Faça um programa em JS que receba um array de 20 inteiros e imprima o menor e o maior valor dentre os elementos do array.
const arrayMenorMaior = (array) => {
  array.sort((a, b) => a - b);
  return array;
}

const printArrayMenorMaior = (...array) => {
  const menor = arrayMenorMaior(array)[0];
  const maior = arrayMenorMaior(array)[array.length - 1];
  return `Menor valor: ${menor}\nMaior valor: ${maior}`;
}

module.exports = {
  arrayMenorMaior: arrayMenorMaior,
  printArrayMenorMaior: printArrayMenorMaior
}
