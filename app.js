const retangulo = require('./modulos/ex01-retangulo');
const quadrado = require('./modulos/ex02-quadrado');
const circulo = require('./modulos/ex03-circulo');
const triangulo = require('./modulos/ex04-triangulo');
const divisao = require('./modulos/ex06-divisao');
const idade = require('./modulos/ex07-calculaIdade');
const fahrenheitToCelsius = require('./modulos/ex08-FahrenheitToCelsius');
const mediaSemestral = require('./modulos/ex11-notaSemestral');
const metrosPorSegundo = require('./modulos/ex12-velocidade');
const calculaSombra = require('./modulos/ex15');
const inverte = require('./modulos/ex16');
const gerenciaSaque = require('./modulos/ex17');
const equacao1Grau = require('./modulos/ex19');
const entradaMaisDuas = require('./modulos/ex20');
const positivoOuNegativo = require('./modulos/ex21');
const modulo = require('./modulos/ex22');
const parOuImpar = require('./modulos/ex23');
const mostraMaior = require('./modulos/ex24');
const diasDoMes = require('./modulos/ex25');
const somaMaiores = require('./modulos/ex26');
const mediaPonderada = require('./modulos/ex27');
const verificaLetra = require('./modulos/ex28');
const descontoPrevidencia = require('./modulos/ex29');

console.log(idade(12959));
console.log(fahrenheitToCelsius(79));
console.log(mediaSemestral(3,3));
console.log(metrosPorSegundo(8000));
console.log(calculaSombra(185, 80));
console.log(inverte(123456789));
console.log(gerenciaSaque(389));
console.log(equacao1Grau(3,-5,20));
console.log(entradaMaisDuas(302.75));
console.log(positivoOuNegativo(10));
console.log(modulo(-6));
console.log(parOuImpar(676447365380));
console.log(mostraMaior(12,54,8));
console.log(diasDoMes(2));
console.log(somaMaiores(5,8,2));
console.log(mediaPonderada(8,6,7));
console.log(verificaLetra("C"));
console.log(descontoPrevidencia(10000));

const msg = "visite nosso site";
console.log(msg.split(' ')[msg.search("site")]);
console.log([1,2,3,4][1]);


// console.log(triangulo(4).area);
// console.log(divisao(-10,-2).quociente);
// console.log(divisao(10,3).quociente);
// console.log(divisao(23,8).resto);
// console.log(divisao(10,3).resto);
// console.log(divisao(-10,-2).error);

// const atual = {
//   data: new Date(),
//   ano: new Date().getFullYear(),
//   mes: new Date().getMonth(),
//   dia: new Date().getDate()
// }

// let d = 1000 * 60 * 60 * 24 * 8;
// let dInicial =  new Date(Math.abs(atual.data.getTime() - d));

// const ano = new Date().getFullYear();
// const mes = new Date().getMonth();
// const diaMes = new Date(ano, mes, 0).getDate();

// console.log(atual.data);
// console.log(dInicial);

// console.log(atual.ano - new Date(dInicial).getFullYear());
// console.log(atual.mes - new Date(dInicial).getMonth());

// console.log(Math.abs(atual.dia - diaMes));

// console.log(ano);
// console.log('================');
// console.log(dInicial);
// console.log(dInicial.getDate());
