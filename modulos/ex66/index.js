//66. Faça um programa em JS que copie o conteúdo de um vetor de 10 posições de inteiro em um segundo vetor e imprima este último.
const copiaVetor = () => {
  const vetorA = [1,2,3,4,5,6,7,8,9,10];
  let vetorBI = ['a','b','c','d','e'];
  let vetorBII = vetorBI.slice();
  for (let item of vetorA) vetorBII.push(item);
  return `Primeiro vetor: ${vetorA}\nSegundo vetor antes da cópia: ${vetorBI}\nSegundo vetor depois da cópia: ${vetorBII}`;
};

module.exports = copiaVetor;
