//36. Em uma certificação são feitos 5 exames (I, II, III, IV e V). Escreva um programa que receba as notas destes exames e imprima a classificação do aluno, sabendo que a média é 70.
//Classificação: A – passou em todos os exames;
//B – passou em I, II e IV, mas não em III ou V; JS – passou em I e II, III ou IV, mas não em V. Reprovado – outras situações.
const certificacao = (ex1, ex2, ex3, ex4, ex5) => {
  const media = 70;
  
  const classificacaoA = ex1 >= media && ex2 >= media && ex3 >= media && ex4 >= media && ex5 >= media;
  const classificacaoBI = ex1 >= media && ex2 >= media && ex4 >= media;
  const classificacaoBII = ex1 >= media && ex2 >= media && (ex3 >= media || ex4 >= media);
 
  if (classificacaoA) return 'Aprovação: A.';

  if (classificacaoBI || classificacaoBII) {
    return 'Aprovação: B';
  } else {
    return 'Reprovado.';
  };
};

module.exports = certificacao;
