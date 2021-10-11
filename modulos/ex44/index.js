//44. Escreva um programa que imprima todos os números de 1 até 100, inclusive, e a soma de todos eles.
const numeroCrescenteSomado = () => {
  let somatorio = 0;
  for (let i = 1; i <= 100; i += 1) {
    somatorio += i;
    console.log(`----> ${i}`);
  }
  return `----> ${somatorio}`;
}

module.exports = numeroCrescenteSomado;