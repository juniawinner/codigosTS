process.stdin.resume();
process.stdin.setEncoding("utf8");

let inputString = "";
let inputLines: string[] = [];
let currentLine = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete a função "fizzBuzz", a seguir.
 *
 * A função aceita INTEGER n como parâmetro.
 */

function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function main() {
  const n: number = parseInt(readLine().trim(), 10);

  fizzBuzz(15);  // const n = 15
}
