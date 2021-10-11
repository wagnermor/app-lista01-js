//37. Uma Cia de pulverização utiliza avião para pulverizar lavouras. Os custos de pulverização dependem do tipo de praga e da área a ser contratada conforme a tabela:
//Tipo 1 – ervas daninhas R$ 50,00 por acre; Tipo 2 – gafanhotos R$ 100,00 por acre; Tipo 3 – broca R$ 150,00 por acre;
//Tipo 4 – todos acima R$ 250,00 por acre.
//Se a área a ser pulverizada for superior a 1000 acres, o fazendeiro tem um desconto de 5%. Em adição, qualquer fazendeiro cujo custo for maior do que R$ 750,00 tem um desconto de 10% sobre o valor que ultrapassar os R$ 750,00. Caso ambos os descontos se aplicam o da área é calculado antes. Fazer um algoritmo que receba: o tipo de pulverização (1 a 4) e área a ser pulverizada; e imprima o valor a ser pago.
const formata_BRL = require('../0-formata-moedaBR') ;
const tipos = [50, 100, 150, 250];

 const pulverizacao = (tipo, acres) => {
   const preco = tipos[tipo - 1] * acres;

   if (preco > 750 && acres > 1000) {
     return formata_BRL((preco * 0.95) * 0.90);
    } else if (preco > 750) {
     return formata_BRL(preco * 0.90);
    } else if (acres > 1000) {
     return formata_BRL(preco * 0.95);
    } else {
     return formata_BRL(preco);
   }
 }

module.exports = pulverizacao;
