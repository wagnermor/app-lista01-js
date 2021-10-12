//56. Um número se diz perfeito se é igual à soma de seus divisores próprios. Divisores próprios de um número positivo N são todos os divisores inteiros positivos de N exceto o próprio N. Por exemplo, o número 6, seus divisores próprios são 1, 2 e 3, cuja soma é igual à 6 (1 + 2 + 3 = 6). Outro exemplo é o número 28, cujos divisores próprios são 1, 2, 4, 7 e 14, e a soma dos seus divisores próprios é 28 (1 + 2 + 4 + 7 + 14 = 28). Crie uma função que ao receber um número inteiro, retorne os seus respectivos divisores próprios e se o número é perfeito ou não.
const divisoresProprios = (numero) => {
  let divisoresProrios = [];
  for (let i = 0; i < numero; i += 1) if (i !== numero && numero % i === 0) divisoresProrios.push(i);
  const somaDivisoresProprios = divisoresProrios.reduce((acc, cur) => acc + cur);
  return numeroPerfeito(numero, divisoresProrios, somaDivisoresProprios);
}

const numeroPerfeito = (n, divisores, soma) => soma === n ? `O nº ${n} é perfeito e seus divisores próprios são: ${divisores}.` : `O nº ${n} é imperfeito.`;

module.exports = divisoresProprios;
