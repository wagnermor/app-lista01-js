//15. Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente longa. Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura, faça um programa para ler os dados necessários e calcular a altura do prédio.

//Para rodar esta função adicione como parâmetro uma altura em cm e o número de vezes que a sombra da ṕessoa cabe dentro da sombra do prédio.

const sombras = (altura_Da_Pessoa_Em_Cm, qnt_De_Vezes_Que_A_Sombra_Se_Repete) => {
  return `O prédio mede aproximadamente ${(altura_Da_Pessoa_Em_Cm * qnt_De_Vezes_Que_A_Sombra_Se_Repete) / 100} metros.`;
}

module.exports = sombras;
