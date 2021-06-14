// var vs let
console.log(test);

var test = 'hello';
console.log(test);

console.log(letTest);
let letTest = 'Sunday';

sum(1, 6);

function sum(a, b) {
  console.log(a + b);
}

printTest();

var printTest = () => {
  console.log('Print');
};
