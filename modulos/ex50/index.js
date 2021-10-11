//50. Escreva um programa que receba um valor e imprima todas as possíveis combinações em
//que o lançamento de um par de dados tenha como resultado da soma dos valores dos dados o número lido. Por exemplo, se a entrada /////for o número 7, o programa deve imprimir as seguintes combinações:•16 •25 •34 •43 •52 •61
const numeroAleatorio = (min, max) => parseInt(Math.random() * (max - min)) + min;

function somaUnidades (index) {
  index = index.toString().split('');//Transforma os numeros em string e adiciona em um array separadamente
  const soma = index.reduce((acc, cur) => {
    return (cur === "0") ? cur += 1 : parseInt(acc) + parseInt(cur)});//converte a string em numero e soma o array
  return soma;//retorna a soma
}
console.log(somaUnidades(70));

function verificaCombinacoes(numero) {//funcao p/ verificar as combinacoes
  let combinacoes = [];
  for (let i = numero + 1; i < 91; i++) {//repete enquanto i < 91 (9+0=9)
    if (somaUnidades(i) === numero) combinacoes.push(`•${i}`);//adiciona i ao array combinacoes se i for igual ao parametro numero
  }
  return `${combinacoes.join('')}`;//retorna o array de combinacoes retirando a "," entre os elementos.
}

function imprimeCombinacoes(n) {//funcao p validar o parametro digitado
  n = numeroAleatorio(7,10);//insere um numero randomico(7,8,9)
  if (n < 0 || n > 9) {
    return `Digite um número entre 0 e 9.`;
  } else if (n === 0) {
    return 0;
  } else {//se o numero digitado estiver entre 0 e 9.
    return `Número: ${n}\n${verificaCombinacoes(n)}`;//retorna a funcao que verifica as combinacoes
  }
}

module.exports = imprimeCombinacoes;
