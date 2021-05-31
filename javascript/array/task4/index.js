// input: num, num, ... numN
// output: num
// function multiply(argument, ...args) {
// psevdoArray
// console.log(arguments);
// console.log(Object.values(arguments));

// rest operator
//   console.log(args);
//   console.log(argument);

//   return args.reduce((acc, val) => acc * val);
// }

const multiply = (...args) => args.reduce((acc, val) => acc * val);
console.log(multiply(2, 5, 10));

//==========================

const array = [1, 2, 3, 4, 5];
console.log(...array);

const arrayCopy = [...array];
console.log(arrayCopy);

//========================================

const arr = [4, 2, 3, 11];

// input: callback;
// output: array;

// callback
// input: elem1, elem2
// output: number

const sortArr = arr.sort((el1, el2) => el1 - el2);
console.log(sortArr);
