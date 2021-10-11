//43. Escreva um programa que imprima todos os números pares do intervalo fechado de 1 a 100.
const intervaloPar = () => {
  for (let i = 1; i <= 100; i += 1) {
    if (i % 2 === 0) console.log(`---> ${i}`);
  }
}

module.exports = intervaloPar;