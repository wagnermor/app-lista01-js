//19. Escreva um programa que calcule a raiz de uma equação do primeiro grau.
// ax + b = z

const equacao1Grau = (a,b,z) => {
  if (b > 0) return `A raiz da equação ${a}x + ${b} = ${z} é: ${(z - b) / a}`;
  if(b < 0) return `A raiz da equação ${a}x - ${b * - 1} = ${z} é: ${(z + (b * -1)) / a}`;
}

module.exports = equacao1Grau;
