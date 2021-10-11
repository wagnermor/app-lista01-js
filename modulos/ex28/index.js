//28. Escreva um programa que receba uma letra e mostre se ela é vogal ou consoante.
const verificaLetra = (letra) => {
  const vogais = /^[aeiou]$/i;
  return vogais.test(letra)? letra + ": é vogal" : letra + ": é consoante";
}

module.exports = verificaLetra;
