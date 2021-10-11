//35. Escreva um programa que receba um número inteiro de 1 a 7 e informe o dia da semana correspondente, sendo domingo o dia de número 1. Se o número não corresponder a um dia da semana, mostre uma mensagem de erro.
const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const informaDia = (numero) => {
  if (numero < 1 || numero > 7) {
    return `ERROR: Dia não encontrado.`;
  } else {
    return diasDaSemana[numero - 1];
  }
}

module.exports = informaDia;
