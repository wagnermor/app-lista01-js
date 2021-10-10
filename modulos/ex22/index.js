//22. Escreva um programa que receba um número e exiba o seu módulo.
const modulo = (numero) => numero >= 0? `|${numero}| = ${numero}` : `|${numero}| = ${numero * -1}`;

module.exports = modulo;
