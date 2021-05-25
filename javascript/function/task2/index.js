// input: number, number, function
// output: undefined
function sum(from, to, printer) {
  console.log(from);
  console.log(to);
  console.log(printer);
  let sum = 0;
  for (let i = from; i <= to; i += 1) {
    sum += i;
  }

  printer(sum);
}

function printResult(res) {
  console.log('Result is here: ' + res);
}

function sendEmail(res) {
  console.log('Result is here: ' + res);
}

// test printResult
const number = 444;
console.log(printResult(number));
// test sum
console.log(sum(5, 10, printResult));
