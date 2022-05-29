function numeroPrimo() {
    var count = 0;
    var numero = 151;
    var divisor;
    var resultado;
    var resultadoNumeroInteiro;
    for (divisor = 1; divisor <= numero; divisor++) {
        resultado = numero / divisor;
        resultadoNumeroInteiro = Number.isInteger(resultado);
        if (resultadoNumeroInteiro === true) {
            count = count + 1;
            console.log(count);
        }
    }
    if (count > 2) {
        console.log("".concat(numero, " N\u00C3O \u00E9 primo"));
    }
    else {
        console.log("".concat(numero, " \u00E9 primo"));
    }
}
numeroPrimo();
