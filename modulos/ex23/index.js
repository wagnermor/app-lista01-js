//23. Escreva um programa que receba um número e imprima se este número é ou não par.
const parOuImpar = (numero) => numero % 2 === 0 ? numero + " é" +  " par".toUpperCase() : numero + " é" + " impar".toUpperCase();

module.exports = parOuImpar;
