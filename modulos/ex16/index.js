//16. Escreva um programa para gerar o invertido de um número com três algarismos (exemplo: o invertido de 498 é 894).
const inverte = (n) => parseInt(`${n}`.split('').reverse('').join(''));

module.exports = inverte;
