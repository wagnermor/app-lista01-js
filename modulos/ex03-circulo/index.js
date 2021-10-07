//3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.
const error = (raio) => (raio > 0)? '' : 'Digite um raio maior que 0.';

const circulo = (raio) => {
  const pi = Math.PI;
  return {
    area: pi * (raio ** 2),
    perimetro: 2 * pi * raio,
    error: error(raio), 

  }
}

module.exports = circulo;
