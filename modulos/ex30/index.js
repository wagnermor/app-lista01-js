//30. Um posto está vendendo combustíveis com a seguinte tabela de descontos:
//Álcool Até 25 litros, desconto de 2% por litro Acima de 25 litros, desconto de 4% por litro
//Gasolina Até 25 litros, desconto de 3% por litro Acima de 25 litros, desconto de 5% por litro
//GasolinaEscreva um algoritmo que receba o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,70 e o preço do litro do álcool é R$ 1,90.
const descontoCombustivel = (litros, combustivel) => {
  const valorAlcool = 1.90;
  const valorGasolina = 2.7;
  const mensagemAlcool = "Combustíve: Álcool.\nValor a ser pago: R$ ";
  const mensagemGasolina = "Combustíve: Gasolina:\nValor a ser pago: R$ ";
  
  if (litros <= 25 && combustivel === "A" || combustivel === "a") {
    return `${mensagemAlcool} ${litros * (valorAlcool * 0.98)}`;
  } else if ( litros > 25 && combustivel === "A" || combustivel === "a") {
    return `${mensagemAlcool} ${litros * (valorAlcool * 0.96)}`;
  }

  if (litros <= 25 && (/^[G]$/i).test(combustivel)) {//verifica combustivel com regex
    return `${mensagemGasolina} ${litros * (valorGasolina * 0.97)}`;
  } else if ( litros > 25 && combustivel === "G" || combustivel === "g") {
    return `${mensagemGasolina} ${litros * (valorGasolina * 0.95)}`;
  }
}

module.exports = descontoCombustivel;
