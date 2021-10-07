//2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.
const error = (lado) => (lado <= 0)? '' : 'Digite um valor maior que 0.';

const areaPerimetroQuadrado = (lado = 0) => {
  return {
    area: lado **2,
    perimetro: lado * 4,
    error: error(lado),
  }
}

module.exports = areaPerimetroQuadrado;
