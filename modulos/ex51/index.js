//51. A série de Fibonacci é formada pela sequencia: • 1,1,2,3,5,8,13,21,34,55,...
//Escreva um programa que gere a série de FIBONACCI até o N-ésimo termo (com N sendo uma entrada do algoritmo).
const escreveFibonacci = (N) => {
  if ( N <= 0) return `Digite um número maior que 0.`;
  let a = 0;
  let b = 1;
  let c = 1;
  let sequencia = [];
  for (let i = 0; i < N; i += 1) {
    sequencia.push(c);
    c = a + b;
    a = b;
    b = c;
  }
  return `${sequencia}`;
};

/*representação grafica p explicar o algoritmo
0|1|1|2|3|5|8|13|21|34|55|
A|B|C| | | | |  |  |  |  |
0|A|B|C| | | |  |  |  |  |
0|1|A|B|C| | |  |  |  |  |
0|1|1|A|B|C| |  |  |  |  |
0|1|1|2|A|B|C|  |  |  |  |
0|1|1|2|3|A|B|C |  |  |  |
0|1|1|2|3|4|A|B |C |  |  |
0|1|1|2|3|4|5|A |B |C |  |
0|1|1|2|3|4|5|6 |A |B |C |
*/

module.exports = escreveFibonacci;
