// 1) створити функцію яка приймає масив та виводить його

// let arr = [2, 5, 'hi', 'tomato', false];

// function getArray(array) {
//   console.log(array)
//   return array;
// }
//getArray(arr);


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// let arr1;
// function getRandomArr(array) {
//   array = [];
//   for (let i = 0; i < 10; i++) {
//     array.push(Math.floor(Math.random() * 100));
//   };
//   getArray(array);
// }

//getRandomArr(arr1);


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function getMinValue(a, b, c) {
//   if (a < b && a < c) {
//     return a;
//   } if (b < a && b < c) 
//{ return b;
//   } 
//   return c;
// }
// getMinValue(79, 8, 16)



// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function getMaxValue(a, b, c) {
//     if (a > b && a > c) {
//       console.log(a);
//       return a;
//     } if (b > a && b > c) {
//       console.log(b);
//       return b;
//     } console.log(c);
//     return c;
//   }
//   getMaxValue(79, 678, 116)

// 5) створити функцію яка повертає найбільше число з масиву
// let r = getRandomArr(arr1);
// let num1 = [56, 87, 1134, 67895, 22, 78, 876];

// function getMaxItem(arrayNum) {
//   let max = arrayNum[0];
//   for (let k = 0; k < arrayNum.length; k++) {
//     if (arrayNum[k] > max) {
//       max = arrayNum[k];
//     }
//   }
//   console.log(max);
//   return max;
// }

// getMaxItem(num1);


// 6) створити функцію яка повертає найменьше число з масиву

// function getMinItem(arrayNum) {
//   let min = arrayNum[0];
//   for (let g = 0; g < arrayNum.length; g++) {
//     if (arrayNum[g] < min) {
//       min = arrayNum[g]
//     }
//   } console.log(min);
//   return min;
// }

// getMinItem(num1);


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// function getSum(arrayNum) {
//   let sum = 0;
//   for (let item of arrayNum) {
//     sum += item;
//   }
//   console.log(sum);
//   return sum;
// }

// getSum(num1);


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function getArithmeticalMean(arrayNum) {
//   let sum = 0;
//   let arithmeticalMean;
//   for (let value of arrayNum) {
//     sum += value;
//   }
//   arithmeticalMean = sum / arrayNum.length;
//   // console.log(arithmeticalMean);
//   return (arithmeticalMean);
// }
// getArithmeticalMean(num1);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// const people = [
//   {
//     name: 'Olga',
//     age: 30,
//     animal: 'dog'
//   },
//   {
//     name: 'Vova',
//     age: 20,
//     animalName: 'cat'
//   },
//   {
//     name: 'Kolia',
//     age: 25,
//     animal: 'turtle',
//     animalAge: 3
//   }
// ];


// function getObjKey(array) {
//   let keys = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let key in array[i]) {
//       keys.push(key);
//     }
//   } console.log(keys);
//   return keys;
// }

// getObjKey(people);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function getValueObj(array) {
//   let values = [];
//   for (let m = 0; m < array.length; m++) {
//     let obj = array[m];
//     for (let key in obj) {
//       values.push(obj[key]);
//     }
//   }
//   console.log(values);
//   return values;
// }
// getValueObj(people)

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// let one = [90, 2, 3, 490];
// let two = [2, 38, 40, 50];

// function getSumElement(array1, array2) {
//   let resultSum = [];

//   for (let a = 0; a < array1.length; a++) {
//     for (let b = 0; b < array2.length; b++) {
//       if (a === b) {
//         resultSum.push(array1[a] + array2[b]);
//       }
//     }
//   } console.log(resultSum);
//   return resultSum;
// }
// getSumElement(one, two);