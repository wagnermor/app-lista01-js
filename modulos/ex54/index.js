//54. Construa um programa que receba um número e verifique se ele é um número triangular. ~~(Um número é triangular quando é resultado do produto de três números consecutivos. Exemplo: 24 = 2 x 3 x 4)~~

//Um número triangular é um número natural que pode ser representado na forma de um triângulo equilátero. O n-ésimo número triangular pode ser visto como o número de pontos de uma forma triangular com lado formado por n pontos, o que equivale à soma dos primeiros n números naturais.
//A sequência dos números triangulares (sequência A000217 na OEIS), começando pelo 0-ésimo termo, até o 40-ésimo é:
//0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210, 231, 253, 276, 300, 325, 351, 378, 406, 435, 465, 496, 528, 561, 595, 630, 666, 703, 741, 780, 820..
const numeroTriangular = (numero) => {
  for (let i = 0; i < numero; i += 1) {
    let sequenciaTriangular = (i * (i + 1)) / 2;
    if (numero === sequenciaTriangular) return `O nº ${numero} é TRIANGULAR.`;
    if (numero < sequenciaTriangular) return `O nº ${numero} NÃO é triangular.`;
  }
}

module.exports = numeroTriangular;
