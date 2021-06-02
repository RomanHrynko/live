// input: arr, arr
// output: obj

// 1. Learn requirement
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// Algo
// 1. Create new obj
// 2. Iterate arrays
// 3. Add key-value  tothe object

// option1

// function buildObject(keysList, valuesList) {
//   const obj = {};
//   for (let i = 0; i < keysList.length; i += 1) {
//     const key = keysList[i];
//     const value = valuesList[i];

//     console.log(`key is ${key}`);
//     console.log(`value is ${value}`);

//     Object.assign(obj, { [key]: value });
//   }
//   return obj;
// }

// option2

// function buildObject(keysList, valuesList) {
//   return keysList.resuce((acc, key, index) => {
//     console.log(`STEP is ${index}`);
//     console.log(`acc is ${acc}`);

//     const value = valuesList[index];
//     return { ...acc, [key]: value };
//   }, {});
// }

//option3

const buildObject = (keysList, valuesList) =>
  keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }

console.log(result);

// keys
// input: obj
// output: arr of strings
Object.keys();
// values
// input: obj
// output: arr of anything
Object.values();

// values
// input: obj
// output: arr of arrays
Object.entries();
