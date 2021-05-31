// input: array, callback
// output: array

//algo
// 1. Create new array
// 2. iterate array
// 3. apply callback for each element
// 4. if callback return true - add element to result

// callback
// input: element, index(optional), array(optional)
// output: boolean

const filterArrayElements = (arr, callback) => {
  const result = [];

  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    const callbackRes = callback(el, index, arr);
    if (callbackRes) {
      result.push(el);
    }
  }

  return result;
};

const testArray = [1, 2, 4, -11, 16];
const testCallBack = el => el > 5;

const res = filterArrayElements(testArray, testCallBack);
console.log(res);
