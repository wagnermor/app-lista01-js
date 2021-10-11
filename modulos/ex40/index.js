//40. Escreva um programa que receba um numero inteiro de 1 a 4 e mostre na tela o numero por extenso.
const numerosPorExtenso = ['Zero', 'Um', 'Dois', 'Três', 'Quatro', 'Cinco'];

const escreveNumero = (numero) => numero < 1 || numero > 4 ? `Escolha inválida!\nNúmeros disponíveis: 1, 2, 3 e 4` : numerosPorExtenso[numero];

module.exports = escreveNumero;
