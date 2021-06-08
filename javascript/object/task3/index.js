// input: object
// output: array of object || object[]

// ALGO:
// 1. Object.entries
// 2. map
// 3. sort

// option 1
// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arrEl => {
//       const el0 = arrEl[0];
//       const el1 = arrEl[1];

//       return { ...el1, id: el0 };
//     })
//     .sort((a, b) => {
//       return a.age - b.age;
//     });
// };

// option 2

// const getCustomersList = obj =>
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(arrEl => ({ ...arrEl[1], id: arrEl[0] }))
//     .sort((a, b) => a.age - b.age);

// option 3

const getCustomersList = obj =>
  Object.entries(obj)
    .map(([id, customerObj]) => ({ ...customerObj, id }))
    .sort((a, b) => a.age - b.age);

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Mark',
    age: 7,
  },
  'customer-id-4': {
    name: 'Roma',
    age: 25,
  },
};

console.log(getCustomersList(customers));
