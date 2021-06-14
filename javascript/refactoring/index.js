// function getCounter() {
//   let counter = 0;
//   return function () {
//     return (counter += 1);
//   };
// }

// let counter1 = getCounter();
// console.log(counter1());
// var a;

// if (true) {
//   var a = 4;
//   console.log(a);
// }
// console.log(a);

// function sayHi() {
//   let message = 'Hi';

//   return function displayName(name) {
//     return `${message}, ${name}`;
//   };
// }
// let sayHello = person();
// sayHello('Roman');

const arr = [1, 3, 5, 10, 15];

const arrRes = arr.filter(el => {
  if (el > 5) {
    return true;
  } else {
    return false;
  }
});
console.log(arrRes);
console.log(arr);
