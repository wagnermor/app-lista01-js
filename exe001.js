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

let dt = new Date();
dt.setDate(-12931);
let dia = dt.getDate();
let mes = dt.getMonth() + 1;
let ano = dt.getFullYear();

console.log(dt);
console.log(dia);
console.log(mes);
console.log(ano);

// const imprimeAnoAtual = () => new Date().getUTCFullYear();
const imprimeAnoAtual = [new Date().getFullYear()];

module.export = imprimeAnoAtual;
