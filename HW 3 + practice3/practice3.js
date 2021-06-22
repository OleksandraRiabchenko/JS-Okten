// - створити функцію яка обчислює та повертає площу прямокутника висотою
// function calcAreaRecrangle(a, b) {
//   let areaRectangle = a * b;
//   console.log(areaRectangle);
//   return areaRectangle;
// }

// calcAreaRecrangle(6, 9);

// - створити функцію яка обчислює та повертає площу кола

// function calcAreaCircle(r) {
//   let areaCircle = 3.14 * (r ** 2);
//   console.log(areaCircle);
//   return areaCircle;
// }

// calcAreaCircle(5);
// - створити функцію яка обчислює та повертає площу циліндру
// function calcAreaCylindr(r, h) {
//   let sCircle = calcAreaCircle(r);
//   let areaCylindr = 2 * sCircle + 2 * 3.14 * r * h;
//   console.log(areaCylindr);
//   return areaCylindr;
// }
// calcAreaCylindr(6, 1);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function getMinValue(array) {
//   let min = array[0];
//   let max = array[0];
//   for (let n = 0; n < array.length; n++) {
//     if (array[n] < min) {
//       min = array[n];
//     } if (array[n] > max) {
//       max = array[n];
//     }
//   }
//   console.log(max);
//   return min;
// }

// console.log(getMinValue([1, -7, 4, 7, 9999, -67899, 0, 1203, 87]));



// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

//????? Це костилі? Можна було якось гарніше, бо якесь дивно просте рішення в мене вийшло

// function swapPleaces(array, i) {
//   if (i) {
//     const first = array[i];
//     array[i] = array[i + 1];
//     array[i + 1] = first;
//   }
//   return array;
// }

// console.log(swapPleaces([1, 5, 8, 9, 10, 11], 4));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// ??????? А цю задачу вирішила завдяки інтернету, можливо є простіший спосіб?

// function pushZeroEnd(arr) {

//   let k = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       let value = arr[i];
//       arr[i] = arr[k];
//       arr[k] = value;
//       k++;
//     }
//   }
//   return arr;
// }
// console.log(pushZeroEnd([3, 6, 70, 0, 5, 0, 7, 2]));



// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

//Рішення показав Віктор після лекції

// function nameNormalizer(nameToNormal = '') {
//   normName = nameToNormal.trim();

//   let nameArr = normName.split(' ');
//   let resultName = [];

//   for (let word of nameArr) {
//     if (word) {
//       resultName.push(word);
//     }
//   } console.log(resultName.join(' '));
//   return resultName.join(' ')
// }


// nameNormalizer('    Harry       Potter      ')
// nameNormalizer('    Ron       Whisley      ')
// nameNormalizer('    Hermione       Granger      ')


// !пропущене завдання з практики 2
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let numArray = [1, 4, 8, 12, 34, 687, 12, 56, 98, 90];
// let newNumArr = [];
// for (let num of numArray) {
//   newNumArr.push(num);
// }

// console.log(newNumArr);