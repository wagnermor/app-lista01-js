//25. Escreva um programa que receba o número equivalente ao mês e imprima a quantidade de dias deste mês.
const diasDoMes = (numeroDoMes) => {
  const ano = new Date().getFullYear();
  const numeroDediasDoMes = new Date(ano, numeroDoMes, 0).getDate();
  const mes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez'];
  return `${numeroDediasDoMes} dias no mês de ${mes[numeroDoMes - 1]}`;
}

module.exports = diasDoMes;
