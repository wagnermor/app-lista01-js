//8. Dado que a fórmula para conversão de Fahrenheit para Celsius é JS = 5/9 (F – 32), leu um valor de temperatura em Fahrenheit e exibi-lo em Celsius
const toCelsius = (fahrenheit) => `${fahrenheit}°F = ${Math.trunc(5 / 9 * (fahrenheit - 32))}°C`;

module.exports = toCelsius;
