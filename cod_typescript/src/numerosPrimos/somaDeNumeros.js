function somaDeNumeros() {
    var count = 0;
    var numero;
    var divisor;
    var resultado;
    var resultadoNumeroInteiro;
    var num = [40, 51, 60];
    numero = num.reduce(function (total, currentElement) { return total + currentElement; });
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
somaDeNumeros();
