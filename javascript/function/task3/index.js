// How to work on tech tasks. Step by step guide
//1. Learn requirement
//2. Create step by step algo (& input/output for funtions)
//3. Write draft solution & testing
//4. Refactoring & final testing -> final solution

//algo
// 1. iterate number from 2 to N
// 2. check if number is prime
// 2.1 Iterate numbers  from 2 to number 10;
// 2.2 if number  isdivided by any other
// input numbeer
// output boolean
function checkIsPrime(number) {
  for (let innerNum = 2; innerNum < number; innerNum += 1) {
    if (number % innerNum === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let number = 2; number < num; number += 1) {
    console.log('STEP # ' + number);

    if (checkIsPrime(number)) {
      console.log(number);
    }
  }
}
console.log(getPrimes(10));

function getPrimes(num) {
  for (let index = 2; index < num; index += 1) {
    console.log('STEP # ' + index);
    let isPrime = true;

    for (let number = 2; number < index; number += 1) {
      console.log('index is ' + index);
      console.log('number is ' + number);
      if (index % number === 0) {
        console.log('number is not prime');
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(index);
    }
  }
}
console.log(getPrimes(10));

//====================================

const squareArray = arr => (Array.isArray(arr) ? arr.map(num => num * num) : null);
