//32. Escreva um programa que receba um caracter e diga se ele é uma vogal, consoante, número ou um símbolo (qualquer outro caracter, que não uma letra ou número).
const classificaCaracter = (caracter) => {
  const vogais = /[aeiou]/i;
  const numeros = /[0-9]/;
  const especiais = /(\W)|(\d)|[^0-9]/i;
  
  if (numeros.test(caracter)) return `${caracter} é um número`;
  if (especiais.test(caracter)) return `${caracter} é um caracter especial`;
  if (vogais.test(caracter)) {
    return `${caracter} é uma vogal`;
  } else {
    return `${caracter} é uma consoante`;
  }
}

module.exports = classificaCaracter;