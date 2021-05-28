const students = ['Roman', 'Alex', 'Yulia', 'Olga', 'Vlad'];

//input: callback, object(optional)
//output: array new

//callback
//input: element of array, index(optiomal), array(optional)
//output: modified element

// function mapCallback(element, index, array) {
//   return `Hello, ${element}`;
// }

// const greetings = students.map(mapCallback);
// console.log(greetings);

// const greetings = students.map(element => `Hello, ${element}`);
// console.log(greetings);

// const greetings = students
//   .filter(el => {
//     if (el === 'Roman') {
//       return false;
//     }
//     return true;
//   })
//   .map(el => `Hello, ${el}`);
// console.log(greetings);

const greetings = students.filter(el => el !== 'Roman').map(el => `Hello, ${el}`);
console.log(greetings);

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// input: callback, initial acc value (number) (optional),
// output: number

//callback
// input: acc, number
// output: number

// function reduceCallback(acc, elem, index, array) {
//   console.log('STEP #' + index);
//   console.log('element: ' + elem);
//   console.log('acc: ' + acc);

//   if (elem > 100) {
//     acc += elem;
//   }

//   return acc;
// }

// const transactionsSum = transactions.reduce(reduceCallback, 0);
// console.log(transactionsSum);

const bigTransactions = transactions.reduce((acc, elem) => {
  if (elem > 100) {
    acc.push(elem);
  }

  return acc;
}, []);

console.log(bigTransactions);
console.log(transactions);
