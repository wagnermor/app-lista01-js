//29. Escreva um programa que calcula o desconto previdenciário de um funcionário.
//Dado um salário, o programa deve retornar o valor do desconto proporcional ao mesmo.
//O cálculo segue a regra: o desconto é de 11% do valor do salário, entretanto, o valor máximo de desconto é 334,29, o que seja menor.
const formata_BRL = require('../0-formata-moedaBR');

const descontoPrevidencia = (salario) => {
  descontoPercentual = salario * 0.11;
  descontoMaximo = 334.29;

  return (descontoPercentual < 334.29)? `Valor do desconto: ${formata_BRL(descontoPercentual)}`: `Valor do desconto: ${formata_BRL(descontoMaximo)}`;
}

module.exports = descontoPrevidencia;
