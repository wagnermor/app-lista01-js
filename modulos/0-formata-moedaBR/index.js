//Esta função formata valores em moedacorrente brasileira
const formata_BRL = (valor, casasDecimais = 2) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: casasDecimais});

module.exports = formata_BRL;
