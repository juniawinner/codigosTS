function somaDeNumeros() {
  let count = 0;
  let numero: number;
  let divisor: number;
  let resultado: number;
  let resultadoNumeroInteiro: boolean;

  let num = [40, 51, 60];
  numero = num.reduce((total, currentElement) => total + currentElement);

  for (divisor = 1; divisor <= numero; divisor++) {
    resultado = numero / divisor;

    resultadoNumeroInteiro = Number.isInteger(resultado);

    if (resultadoNumeroInteiro === true) {
      count = count + 1;

      console.log(count);
    }
  }

  if (count > 2) {
    console.log(`${numero} NÃO é primo`);
  } else {
    console.log(`${numero} é primo`);
  }
}

somaDeNumeros();
