//4. Dado os três lados de um triângulo determinar o perímetro do mesmo.
const error = (ladoA, ladoB, ladoC) => {
  return ladoA > 0 && ladoB > 0 && ladoC > 0 ? '' : 'Todos os lados devem ser maiores que 0';
}

const triangulo = (ladoA = 0, ladoB = 0, ladoC = 0) => {
  return {
    error: error(ladoA, ladoB, ladoC),
    perimetro: error(ladoA, ladoB, ladoC)? 0 : ladoA + ladoB + ladoC,
  }
}

module.exports = triangulo;
