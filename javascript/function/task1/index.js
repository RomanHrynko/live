'use strict';

function getSenseOfLife() {
  return 42;
}

function getSquared(num) {
  return num ** 2;
}

// Long option
const result = getSquared(30);
console.log(result);

// Short option
console.log(getSquared(30));

// ================

function sum(a, b) {
  return a + b;
}

function greeting(age) {
  console.log(`I am ${age} years old`);
}

// long option

const someFunc = (num1, num2) => {
  return num1 * num2;
};

// short option
const mult = (a, b) => a * b;

// ==============================

const greetingExpression = function (age) {
  console.log(`I am ${age} years old`);
};
greetingExpression(50);

// ===============================

const getSquared = num => num ** 2;
