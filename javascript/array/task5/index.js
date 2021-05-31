// input: callback
// output: array

// callback
// input: element,
// output: modified element

//algo
// 1. Create new array
// 2. iterate array
// 3. apply callback for every element

const mapArrayElements = (arr, callback) => {
  const result = [];

  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    result.push(callback(el, index, arr));
  }

  return result;
};

const testArray = [1, 2, 4, -11, 16];
const testCallBack = el => el * 2;

const res = mapArrayElements(testArray, testCallBack);
console.log(res);
