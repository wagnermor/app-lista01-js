//48. Escreva um programa que determine se um dado número N  é primo ou não.
const numeroPrimo = (numero) => {
  if (numero === 2) return true;
  for (let i = 2; i < numero; i += 1) {
    if (numero % i === 0) {
      return false;
    }
    // return numero > 1;
    return true;
  }
}

const imprimeNumeroPrimo = (n) => numeroPrimo(n) ? `O nº ${n} é primo` : `O nº ${n} NÃO é primo`;

module.exports = {
  isPrimo: numeroPrimo,
  imprimeNumero: imprimeNumeroPrimo,
}
