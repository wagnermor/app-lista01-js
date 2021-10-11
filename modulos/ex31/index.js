//31. No Futebol Americano, usa-se o Quarterback Rating como um índice que indica o desempenho do quarterback (quando maior, melhor). Ele é calculado como indicado a seguir: Calcula-se o percentual de passes completados em relação aos passes tentados pelo quarterback. Deste valor subtrai-se 0,3 e divide-se por 0,2. Este valor não deve ser maior que 2,375 ou menor que 0 (caso seja, ajusta-se o valor para 2,375 ou 0,respectivamente).
//Em seguida, calcula-se a razão de jardas passadas pela quantidade de passes tentados. Deste valor, subtrai-se 3 e divide-se por 4. Novamente, este valor não deve ser maior que 2,375 ou menor que 0 (caso seja, procede-se como no caso anterior).
//Agora, calcula-se a razão de passes para touchdows pelo número de passes tentados. Divide-se o valor por 0,05. Mais uma vez, este valor não deve ser maior que 2,375 ou menor que 0 (caso seja, procede-se como de costume).
//Então, calcula-se a razão entre passes interceptados e o número de passes tentados. Deste valor, subtrai-se 0,095 e divide-se o resultado por 0,04. Como de praxe, este valor não deve ser maior que 2,375 ou menor que 0 (caso seja, atua-se como explicado).
//O quarterback rating é calculando somando-se as quatro parcelas anteriores, multiplicando a soma por 100 e dividindo-se o produto por 6.
//Escreva um programa, que receba o número de passes tentados, o número de passes completos, o número de jardas passadas, o número de passes para touchdown e o número de passes interceptados e informe o QB Rating do quarterback.
const ajustaValores = (valor) => {
  if (valor < 0) valor = 0;
  if (valor > 2.375) valor = 2.375;
  return valor;
}

const rating = (passes_Tentados, passes_Completos, jardas_Passadas, passes_Touchdown, passes_Interceptados) => {
  const percentualPassesCompletos = ajustaValores(((passes_Completos / passes_Tentados) - 0.3) / 0.2);//2,375
  const percentualJardasPassadas = ajustaValores(((jardas_Passadas / passes_Tentados) - 3) / 4);//0,14
  const percentualPassesTouchDown = ajustaValores((passes_Touchdown / passes_Tentados) / 0.05);//10,71
  const percentualPassesInterceptados = ajustaValores(((passes_Interceptados / passes_Tentados) - 0.095) / 0.04);//1,20

  const rating = ((percentualPassesCompletos + percentualJardasPassadas + percentualPassesTouchDown + percentualPassesInterceptados) * 100) / 6;
  return `Quarterback rating: ${parseFloat(rating.toFixed(3))}`;//formata a string com 3 casas decimais e retorna como number float
}

module.exports = rating;
