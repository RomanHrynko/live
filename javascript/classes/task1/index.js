/* eslint-disable max-classes-per-file, no-console */

// put your code here
class Sportsmen {
  constructor(firstName) {
    console.log('before', this);

    this.firstName = firstName;

    console.log('after', this);
  }

  // run() {
  //   setTimeout(function () {
  //     console.log(`${this.firstName} is running`);
  //   });
  // }

  run() {
    console.log(`${this.firstName} is running`);
  }

  swim() {
    console.log(`Hello, swim`);
  }
}

class Swimmer extends Sportsmen {
  constructor(firstName, swimStyle) {
    super(firstName);
    this.swimStyle = swimStyle;
    console.log(this);
  }

  swim() {
    console.log(`${this.firstName} is swimming ${this.swimStyle}`);
  }
}

// test data

// const obj = {
//   firstName: 'Roman',
// };
// console.log(obj);
const sportsmen1 = new Sportsmen('John');
sportsmen1.run();

// console.log(sportsmen1);

const sportsmen2 = new Sportsmen('Bob');
sportsmen2.run();

const swimmer1 = new Swimmer('John', 'Gypsy ax');
swimmer1.swim();
swimmer1.run();

// console.log(sportsmen1);

const swimmer2 = new Swimmer('Bob', 'butterFly');
swimmer2.swim();
swimmer2.run();

console.log(swimmer1);
