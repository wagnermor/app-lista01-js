//53. Dado um país A, com 5.000.000 de habitantes e uma taxa de natalidade de 3% ao ano, e um país B com 7.000.000 de habitantes e uma taxa de natalidade de 2% ao ano, escreva um programa, que imprima o tempo necessário para que a população do país A ultrapasse a população do país B.
const superavit = () => {
  let paisA = 5000000;
  let paisB = 7000000;
  let tempo = 0;

  const natalidadePaisA = 0.03;
  const natalidadePaisB = 0.02;
  const natalidadePaisAMes = natalidadePaisA / 12;// (0.03 / 12) = 0.0025
  const natalidadePaisBMes = natalidadePaisB / 12;

  while(paisA < paisB) {
    paisA *= natalidadePaisAMes + 1;// 1.0025 = x + (x * 0.25%)
    paisB *= natalidadePaisBMes + 1;
    tempo += 1;
  }

  return `A população do país A ultrapassará a população do país B em:\n${parseInt(tempo / 12)} anos e ${tempo % 12} mese(s)`;
}

module.exports = superavit;
