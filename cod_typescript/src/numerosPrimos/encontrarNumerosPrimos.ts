function numeroPrimo() {
  let count = 0;
  let numero = 151;
  let divisor: number;
  let resultado: number;
  let resultadoNumeroInteiro: boolean;

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

numeroPrimo();
