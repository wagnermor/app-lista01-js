//24. Escreva um programa que receba três números e mostre o maior entre eles.
const mostraMaior = (numero1, numero2, numero3) => {
  if (numero1 > numero2 && numero1 > numero3) return `O maior número é ${numero1}`;
  if (numero2 > numero1 && numero2 > numero3) {
    return `O maior número é ${numero2}`;
  } else {
    return `O maior número é ${numero3}`;
  }
}

module.exports = mostraMaior;
