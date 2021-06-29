'use strict';

function printMessage(country, city) {
  console.log(this);
  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}
const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

// in: context, args
// out: func

// bind option 1
// const printMessageBinded = printMessage.bind(user);
// printMessageBinded('Ukraine', 'London');

// bind option 2
// const printMessageBinded = printMessage.bind(user, 'Ukraine', 'London');
// printMessageBinded();

// bind option 3
// const printMessageBinded = printMessage.bind(user, 'Ukraine');
// printMessageBinded('London');

// in: func, context, args
// out: func

// function myBind(func, context, ...args) {
//   console.log(args);

//   //in: arg1, ...argN
//   //out: anything
//   return function (...funcArgs) {
//     console.log('func is called');

//     // input: context, args
//     // output: func res

//     return func.call(context, ...args, ...funcArgs);
//   };
// }

function myBind(func, context, ...args) {
  console.log(args);

  //in: arg1, ...argN
  //out: anything
  return function (...funcArgs) {
    console.log('func is called');

    // input: context, args
    // output: func res

    return func.call(context, ...args, ...funcArgs);
  };
}

function sum(c, d) {
  console.log('context is: ', this);
  console.log('arguments is: ', arguments);
  return this.a + this.b + c + d;
}
const context = {
  a: 100,
  b: 40,
};

const sumBinded1 = myBind(sum, context, 10, 30);
console.dir(sumBinded1);
console.dir(sumBinded1());

const sumBinded2 = myBind(sum, context);
console.dir(sumBinded2);
console.dir(sumBinded2(10, 30));

const sumBinded3 = myBind(sum, context, 30);
console.dir(sumBinded3);
console.dir(sumBinded3(10));
// HW
