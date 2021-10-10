//17. Um programa para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para decidir o número de notas de cada valor que deve ser disponibilizado para o cliente que realizou o saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor fossem distribuídas em número mínimo possível. Por exemplo, se a quantia solicitada fosse R$ 87,00, o programa deveria indicar uma nota de R$ 50,00, três notas de R$ 10,00, uma nota de R$ 5,00 e duas notas de R$ 1,00.
//Escreva um programa que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o critério da distribuição ótima 
//(considere existir notas de R$1,00; R$2,00; R$5,00; R$10,00; R$20,00; R$50,00 e R$100,00).
const gerenciaSaque = (valorSaque) => {
  let notasDe100 = 0;
  let notasDe50 = 0;
  let notasDe20 = 0;
  let notasDe10 = 0;
  let notasDe5 = 0;
  let notasDe2 = 0;
  let notasDe1 = 0;
  const valorSacado = valorSaque;
  while(valorSaque > 0) {
    if (valorSaque > 100) {
      notasDe100 += 1, valorSaque -= 100;
    } else if (valorSaque > 50) {
      notasDe50 += 1, valorSaque -= 50;
    } else if (valorSaque > 20) {
      notasDe20 += 1, valorSaque -= 20;
    } else if (valorSaque > 10) {
      notasDe10 += 1, valorSaque -= 10;
    } else if (valorSaque > 5) {
      notasDe5 += 1, valorSaque -= 5;
    } else if (valorSaque > 2) {
      notasDe2 += 1, valorSaque -= 2;
    } else {
      notasDe1+= 1, valorSaque -= 1;
    }
  }
  return `O valor de R$${valorSacado},00 foi sacado em:
  ${notasDe100} notas de 100;
  ${notasDe50} notas de 50;
  ${notasDe20} notas de 20;
  ${notasDe10} notas de 10;
  ${notasDe5} notas de 5;
  ${notasDe2} notas de 2;
  ${notasDe1} notas de 1;
  `;
}

module.exports = gerenciaSaque;
