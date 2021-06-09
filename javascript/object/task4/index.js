// input: obj, obj
// output: boolean;
// algo
// 1 check keys length
// 2 check every key value, if not equal => false;
// 3
// const compareObjects = (obj1, obj2) =>
//   Object.keys(obj1).length === Object.keys(obj2).length &&
//   Object.keys(obj1).every(elem => obj1[elem] === obj2[elem]);
// -------------------------------------------------------------------
// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) return false;
//   // good
//   return Object.keys(obj1).every(key => obj1[key] === obj2[key]);
//   // bad
//   // return keys1.some((key => obj1[key] !== obj2[key]);
//   //bad
//   // return keys1.every((key, index) => key === keys2[index] && obj1[key] === obj2[key]);
// }
// ----------------------------------------------------------------------
// function compareObjects(obj1, obj2) {
//   return Object.keys(obj1).length !== Object.keys(obj2).length
//     ? false
//     : Object.keys(obj1).every(key => obj1[key] === obj2[key]);
// }
// -----------------------------------------------------------------------
// good;
const compareObjects = (obj1, obj2) =>
  Object.keys(obj1).length === Object.keys(obj2).length &&
  Object.keys(obj1).every(elem => obj1[elem] === obj2[elem]);

// --------------------------------------------------------------------
// bad
// function compareObjects(obj1, obj2) {
//   //TODO
//   let length = Object.keys(obj1);
//   console.log(length);
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
//   // very bad
//   let obj1Arr = Object.entries(obj1).flat();
//   let obj2Arr = Object.entries(obj2).flat();
//   console.log(obj1Arr, obj2Arr);
//   //very bad
//   for (let index = 0; index < obj1Arr.length; index += 1) {
//     // bad
//     if (obj1Arr[index] !== obj2Arr[index]) {
//       return false;
//     }
//   }
//   return true;
// }
// ----------------------------------------------------------------------
function compareObjects(obj1, obj2) {
  // very bad
  const arr1 = Object.keys(obj1).concat(Object.values(obj1));
  const arr2 = Object.keys(obj2).concat(Object.values(obj2));
  if (arr1.length !== arr2.length) return false;
  // very bad
  for (let i = 0; i < arr1.length; i += 1) {
    // bad
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
// -----------------------------------------------------------------------
// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};
const obj2 = {
  name: 'Bob',
  age: 17,
};
const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};
const obj4 = {
  name: 'Tom',
  age: 17,
};
console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
