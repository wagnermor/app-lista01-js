//34. Uma financeira usa o seguinte critério para conceder empréstimos: o valor total do empréstimo deve ser até dez vezes o valor da renda mensal do solicitante e o valor da prestação deve ser no máximo 30% da renda mensal do solicitante. Escreva um programa que receba a renda mensal de um solicitante, o valor total do empréstimo solicitado e o número de prestações que o solicitante deseja pagar e informe se o empréstimo pode ou não ser concedido.
const emprestimo = (rendaMensal, valorEmprestimo, numeroPrestacoes) => {
  const regraDeNegocios = rendaMensal * 12  <= valorEmprestimo && valorEmprestimo / numeroPrestacoes <= rendaMensal * 0.30;
  return regraDeNegocios ? `Empréstimo concedido` : `Empréstimo negado`;
}

module.exports = emprestimo;
