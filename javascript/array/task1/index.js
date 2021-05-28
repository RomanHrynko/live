/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

const numbersList1 = [1, 2, 3, 4, 5];

// put your code here

//input: none
//output: number
const res = numbersList1.pop();
console.log(res);
console.log(numbersList1);

/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push

const numbersList2 = [1, 2, 3, 4, 5];

// put your code here

//input: number
//output: number
const pushRes = numbersList2.push(111);
console.log(pushRes);
console.log(numbersList2);

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

const numbersList3 = [1, 2, 3, 4, 5];

// put your code here

//input: none
//output: number
const shiftRes = numbersList3.shift();
console.log(shiftRes);
console.log(numbersList3);

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

const numbersList4 = [1, 2, 3, 4, 5];

// put your code here

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

// начальный массив
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
   callback(arr[i]) === true -> элемент будет добавлен в финальный массив
   callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль

// put your code here

// filter
//input: function
//ouyput: array

//callback
//input: element(number), index(number), arraay(optional)
//output: boolean

// function filterCallback(elem, index, array) {
//   console.log('STEP # ' + index);
//   console.log('Element is ' + elem);
//   console.log('array is ' + array);
//   if (elem > 5) {
//     return true;
//   }
//   return false;
// }

// function filterCallback(elem) {
//   return elem > 5;
// }

const bigNumbers = anotherNumbersList.filter(elem => elem > 5);
console.log(anotherNumbersList);
console.log(bigNumbers);
// c помощью метода filter создай новый массив evenPositions, в котором будут числа из четных позиций которые > 5
// массива anotherNumbersList
// выведи evenPositions в консоль

// put your code here

// function filterCallback(element, index, array) {
//   if (index % 2 === 1 && element > 5) {
//     return true;
//   }
//   return false;
// }

// function filterCallback(element, index) {
//   return element > 5 && index % 2 === 1;
// }

const evenPositions = anotherNumbersList.filter((el, index) => el > 5 && index % 2 === 1);
console.log(evenPositions);
