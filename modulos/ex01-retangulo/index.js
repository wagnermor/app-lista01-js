//1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.
const error = (base, altura) => {
  if (base === 0 || altura === 0) return 'Medida inválida';
  return base !== altura? '' : 'Medida de um quadrado. Digite medidas de um retangulo';
}

function areaEPerimetroRetangulo(base = 0, altura = 0) {
  return {
    area: base * altura,
    perimetro: 2 * (base + altura),
    error: error(base, altura)
  };
}

module.exports = areaEPerimetroRetangulo;
