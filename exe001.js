function areaRetangulo(base, altura) {
  return base * altura;
}

function perimetroRetangulo(base, altura) {
  return 2 * (base + altura);
}

let tratamentoDeDados = function (inputBase, inputAltura) {
  
  const perimetro = perimetroRetangulo(inputBase, inputAltura);
  const area = areaRetangulo(inputBase, inputAltura);
  
  return `O perimetro é: ${perimetro}; A area e: ${area}`;
}
console.log(tratamentoDeDados(5, 7));
