//69. Escreva um programa que receba um vetor de 15 posições de inteiros. Em seguida, o programa deve ler um valor inteiro e imprimir o número de vezes que este valor ocorre no vetor.
const verificaVetor = (...vetor) => {
  let numeros = [];
  for ( let index1 = 0; index1 < vetor.length; index1++) {
    let contador = 0;
    for (let index2 = 0; index2 < vetor.length; index2++) {
      if (vetor[index1] === vetor[index2]) contador += 1;
    }
    numeros.push(contador);
  }

  for (let i = 0; i < vetor.length; i += 1) {
    // if ()
    console.log(`nº ${vetor[i]}: ${numeros[i]}x`);
  }
}

module.exports = verificaVetor;
