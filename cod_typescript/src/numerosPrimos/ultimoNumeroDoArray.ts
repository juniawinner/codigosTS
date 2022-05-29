function ultimoNumeroDoArray() {
  let count = 0;
  let numero: any;
  let divisor: number;
  let resultado: number;
  let resultadoNumeroInteiro: boolean;

  let num = [52, 97, 151];
  numero = num.pop();    //Para retorna o primeiro elemento: numero = num.shift()

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

ultimoNumeroDoArray();
