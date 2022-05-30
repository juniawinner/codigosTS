process.stdin.resume();
process.stdin.setEncoding("utf8");
var inputString = "";
var inputLines = [];
var currentLine = 0;
process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on("end", function () {
    inputLines = inputString.split("\n");
    inputString = "";
    main();
});
function readLine() {
    return inputLines[currentLine++];
}
/*
 * Complete a função "fizzBuzz", a seguir.
 *
 * A função aceita INTEGER n como parâmetro.
 */
function fizzBuzz(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
function main() {
    var n = parseInt(readLine().trim(), 10);
    fizzBuzz(15); // const n = 15
}
