//6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.
const error = (dividendo, divisor) => {
  if (!divisor && !dividendo) return "O divisor e o dividendo não podem ser igual a 0";
  if (!divisor) return "O divisor não pode ser igual a 0";
  if (!dividendo) return "O dividendo não pode ser igual a 0";
  return '';
}

const divisao = (dividendo = 0, divisor = 0) => {
  return {
    quociente: Math.trunc(dividendo / divisor),
    resto: dividendo % divisor,
    error: error(dividendo, divisor),
  }
}

module.exports = divisao;
