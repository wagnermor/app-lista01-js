//42. Escreva um programa que imprima todos os números inteiros de 100 a 1 (em ordem decrescente).

const numeroDecrescente = () => {
  for (let i = 100; i > 0; i -= 1) console.log(`${i} <--`);
}

module.exports = numeroDecrescente;