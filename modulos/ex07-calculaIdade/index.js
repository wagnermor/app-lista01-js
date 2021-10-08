//7. Solicitar a idade de uma pessoa em dias e informar na tela a idade em anos, meses e dias.
const idade = (dias) =>  1000 * 60 * 60 * 24 * (dias);

const numeroDiasMesAtual = new Date(datas().ano, datas().mes + 1, 0).getDate(); // total de dias do mes atual

const datas = function (idadeDias) {
  return {
    inicial: new Date(new Date().getTime() - idade(idadeDias)),
    atual: new Date(),
    ano: new Date().getFullYear(),
    mes: new Date().getMonth(),
    dia: new Date().getDate(),
  }
}

const calculaAno = (e) => datas().ano - datas(e).inicial.getFullYear();

const calculaMes = (e) => {
  let mes = datas().mes - datas(e).inicial.getMonth() - 1;
  if(datas().atual.getDate() > datas(e).inicial.getDate()) mes += 1; 
  return mes;
};

const calculaDia = (f) => {
  const diaInicial = new Date(datas().ano, datas().mes - 1, datas(f).inicial.getDate());
  const diaAtual = new Date();
  const diff = diaAtual.getTime() - diaInicial.getTime();

  let dias = new Date(diff).getDate();

  if (dias === numeroDiasMesAtual) dias = 0;
 
  return dias;
}

const retornaIdade = (idade_dias) => {
  return `Anos: ${calculaAno(idade_dias)}
Meses: ${calculaMes(idade_dias)}
Dias: ${calculaDia(idade_dias)}`;
}

module.exports = retornaIdade;

