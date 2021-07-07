// function positiveSum(arr) {
//   return arr.reduce((acc, num) => {
//     if (num > 0) {
//       acc += num;
//     }

//     return acc;
//   }, 0);
// }

// function positiveSum(arr) {
//   return arr.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);
// }

// const arrTest = [1, -4, 7, 12];
// console.log(positiveSum(arrTest));

// Algo:
// 1. Used reduce to sum num
// 2. if arr emrty retrun 0

// Algo:
// 1. Create resArr
// 2. Iterate num from 2 to integer/2
// 3. if integer % num === 0 => push res arr
// 4. of res.length ? result `${integer} is Prime`

// function divisors(integer) {
//   const resultArray = [];

//   for (let number = 2; number <= Math.floor(integer / 2); number += 1) {
//     if (integer % number === 0) {
//       resultArray.push(number);
//     }
//   }

//   return resultArray.length ? resultArray : `${integer} is Prime`;
// }

function divisors(integer) {
  const result = [];
  for (let index = 2; index <= integer / 2; index += 1) {
    if (integer % index === 0) {
      result.push(index);
    }
  }

  return result.length ? result : `${integer} is Prime`;
}
console.log(divisors(12)); // should return [2,3,4,6]
console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return "13 is prime"
