//65. Faça um programa em JS que receba um array de 20 inteiros e imprima o menor e o maior valor dentre os elementos do array, bem como suas respectivas posições.
const arrayMM = require('../ex64').arrayMenorMaior;

const printArrayMenorMaior2 = (...array) => {
  const newArray = arrayMM(array);
  const menor = newArray[0];
  const maior = newArray[newArray.length - 1];
  return `Menor valor: ${menor} posição: ${0}\nMaior valor: ${maior} posição: ${newArray.length - 1}`;
}

module.exports = printArrayMenorMaior2;
