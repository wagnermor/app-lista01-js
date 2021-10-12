//60. A famosa conjectura de Goldbach diz que todo inteiro par maior que 2 é soma de dois números primos. Testes foram feitos, mas ainda não se achou um contra-exemplo. Escreva um programa mostrando que a afirmação é verdadeira para todo número par entre 500 e 1000. O programa deve imprimir o número par e os dois primos que somados dão o número par.
const numeroPrimo = require('../ex48');
const goldback = () => {
  let numerosPar = [];
  let numerosPrimos = [];
  let goldback = [];

  for (let i = 500; i <= 1000; i += 1) if (i % 2 === 0) numerosPar.push(i);
  
  for (let index = 2; index <= 600; index += 1) if (numeroPrimo.isPrimo(index)) numerosPrimos.push(index);//modulo ex48

  for (let i = 0; i < numerosPar.length; i += 1) {
    for (let index = 0; index < numerosPrimos.length; index += 1) {
      for (let index2 = 0; index2 < numerosPrimos.length; index2 += 1) {
        if (numerosPar[i] === (numerosPrimos[index]) || numerosPar[i] === (numerosPrimos[index]  + numerosPrimos[index2])) {
          goldback.push(`${numerosPar[i]} = ${numerosPrimos[index]} + ${numerosPrimos[index2]}`);
          index = numerosPrimos.length;
          index2 = numerosPrimos.length;
        }
      }
    }
  }

  for (let item of goldback ) console.log(item);//imprime o array linha a linha
}

module.exports = goldback;
/*------------ Mesma logica feita com for + while:

  for (let i = 0; i < numerosPar.length; i += 1) {
    let index = 0;
    while (index < numerosPrimos.length) {
      let index2 = 0;
      index += 1;
      while (index2 < numerosPrimos.length) {
        if (numerosPar[i] === (numerosPrimos[index2]  + numerosPrimos[index])) {
          goldback.push(`${numerosPar[i]} = ${numerosPrimos[index]} + ${numerosPrimos[index2]}`);
          index = numerosPrimos.length
          index2 = numerosPrimos.length
        }
        index2 += 1;
      }
    }
  }
  */
