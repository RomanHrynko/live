// const obj = {};
// obj.name = 'Hello';
// console.log(obj);

// // ==============

// const newObbj = new Object();
// newObbj.id = 1001;
// console.log(newObbj);

// ========================

// 1. add properties, build Object
// 2. filter Object
// input: obj, key(number, string etc), value(number, string etc)
// output:obj

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// test data

const myObj = { address: 'Kyiv', count: 111 };
const key = 'personName';
const value = 'Denis';
const res1 = addPropertyV1(myObj, key, value);
console.log(res1);
console.log(myObj);

// examples

function addPropertyV2(obj, key, value) {
  //input : obj , obj, ... objN
  // output: new obj

  const sourceObj = { [key]: value };

  return Object.assign(obj, sourceObj);
}

const animal = { cat: 'Tom' };
console.log(addPropertyV2(animal, 'age', 25));
console.log(addPropertyV2(animal, 'power', 'quickly'));

function addPropertyV2(obj, key, value) {
  //input : obj , obj, ... objN
  // output: new obj

  const sourceObj = { [key]: value };

  return Object.assign(obj, sourceObj);
}

function addPropertyV3(obj, key, value) {
  const sourceObj = { [key]: value };

  return Object.assign({}, obj, sourceObj);

  // return Object.assign(sourceObj, obj);
}

const obj3 = { dog: 'Pes' };
console.log(addPropertyV3(obj3, 'hands', 4));
console.log(obj3);

const obj4 = { dog: 'Pes', hands: 8 };
console.log(addPropertyV3(obj4, 'hands', 4));
console.log(obj4);
