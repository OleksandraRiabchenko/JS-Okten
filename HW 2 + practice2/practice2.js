// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// const abc = ['a', 'b', 'c'];
// abc.push(1, 2, 3);
// console.log(abc);


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// const num = [1, 2, 3];
// const numbers = [];

// for (let number of num) {
//   numbers.unshift(number); 
// };
// console.log(numbers);


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// const arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// const arr1 = [1, 2, 3];
// arr1.unshift(4, 5, 6);
// console.log(arr1);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// const arr2 = [1, 2, 3, 4, 5];

// for (let i = 0; i < 3; i++) {
//   arr2.shift(arr2[i]);
// };
// console.log(arr2);


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// const arr3 = [1, 2, 3, 4, 5];

// for (let k = 0; k < 3; k++) {
//   arr3.pop(arr3[k]);
// };
// console.log(arr3);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

// const arr4 = [1, 2, 3, 4, 5];
// for (let l = 0; l < 2; l++) {
//     arr4.pop(arr4[l]);
//   };
//   arr4.push('a', 'b', 'c');
//   console.log(arr4);

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// const array = ['a', 'b', 'c'];
// let string = '';

// for (let g = 0; g < array.length; g++) {
//   string = string + array[g];
// };
// console.log(string);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// const array1 = ['a', 'b', 'c'];
// let string1 = '';

// let t = 0;
// while (t < array1.length) {
//   string1 += array1[t];
//   t++;
// };
// console.log(string1);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// const array2 = ['a', 'b', 'c'];
// let string3 = '';

// for (let value of array2) {
//   string3 += value;
// };
// console.log(string3);


// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//const numbers1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
// let r = 0;
// while (r < numbers1.length) {
//   console.log(numbers1[r]);
//   r++;
// };

// 2. перебрати його циклом for
// for (let i = 0; i < numbers1.length; i++) {
//   console.log(numbers1[i]);
// };

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let r = 0;

// while (r < numbers1.length) {

//   if (r % 2 === 1) {
//     console.log(numbers1[r]);
//   }
//   r++;
// };

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < numbers1.length; i++) {

//   if ( i % 2 === 1) {
//     console.log(numbers1[i]);
//   };
// };

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let r = 0;
// while (r < numbers1.length) {

//     if (numbers1[r] % 2 === 0) {
//       console.log(numbers1[r]);
//     }
//     r++;
//   };
// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < numbers1.length; i++) {

//     if ( numbers1[i] % 2 === 0) {
//       console.log(numbers1[i]);
//     };
//   };
// Рішення таке ж саме як в № 3 та 4 тільки умова, що індекс при діленні на 2 має залишок 0


// 7. замінити кожне число кратне 3 на слово "okten"
//let numbers1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//??? підкажіть будь ласка, чому не працює for of, а просто for працює , де помиляюсь?

// for (let item of numbers1) {

//   if (item % 3 === 0) {
//     item = 'okten';
//   };
// };
// console.log(numbers1);

// for (let i = 0; i < numbers1.length; i++) {

//   if (numbers1[i] % 3 === 0) {
//     numbers1[i] = 'okten';
//   };
// };
// console.log(numbers1);


// 8. вивести масив в зворотньому порядку.

// for (let i = numbers1.length - 1; i >= 0; i--) {
//   console.log(numbers1[i]);
// };

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//let numbers2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let v = numbers2.length - 1; 

// while (v >= 0) {
//   console.log(numbers2[v]);
//   v--
// };

//--------neparni index-------------
// let v = numbers2.length - 1;

// while (v >= 0) {
//   if (v % 2 === 1) {
//     console.log(numbers2[v]);
//   };
//   v--;
// };
//------------------

// for ( let j = numbers2.length - 1; j >= 0; j--) {

//   if ( j % 2 === 1) {
//     console.log(numbers2[j]);
//   };
// };

//---------parni znachennia-------

// let num = numbers2.length - 1;
// while (num >= 0) {
//   if (numbers2[num] % 2 === 0 ) {
//     console.log(numbers2[num]);
//   };
//   num--;
// };

//---------------
// for ( let j = numbers2.length - 1; j >= 0; j--) {

//     if (numbers2[j] % 2 === 0) {
//       console.log(numbers2[j]);
//     };
//   };

// -----kratne 3 zamena na 'okten'--------
// for ( let j = numbers2.length - 1; j >= 0; j--) {

//       if (numbers2[j] % 3 === 0) {
//         numbers2[j] = 'okten';
//       };
//     };
//     console.log(numbers2);

//     10 створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

//let array =[];

// for (let i = 0; i < 100; i= i + 2) {
//   array.push((i));
// };
// console.log(array);

// let l = 0;
// while(l < 100) {
//   array.push(l + 1);
// l = l+2;
// };
// console.log(array);


// 1. Створити пустий масив та :

//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//let array2 = [];
// for (let i = 0; i < 20; i++) {
//   array2.push(Math.random())
// };
// console.log(array2);

//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//Math.random()*(max-min+1) + min
// let array2 = [];
// for (let i = 0; i < 20; i++) {
//     array2.push(Math.floor(Math.random()*725 + 8))
//   };
 // console.log(array2);

//  2. Вивести за допомогою console.log кожен третій елемен

// for (let n = 0; n < array2.length; n = n + 3 ) {
//   console.log(array2[n]);
// };

//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let n = 0; n < array2.length; n = n + 3) {
//   if (array2[n] % 2 === 0) {
//   console.log(array2[n]);
//   };
// };

//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArr = [];
// for (let n = 0; n < array2.length; n = n + 3) {
//   if (array2[n] % 2 === 0) {
//   console.log(array2[n]);
//   newArr.push(array2[n]);
//   };
// };
// console.log(newArr);


//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// for (let h = 0; h < array2.length; h++) {
//   if (array2[h+1] % 2 === 0 ) {
//   console.log(array2[h]);
//   };
// };

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// const numArr = [100,250,50,168,120,345,188];
// let sum = 0;
// let averageСheck;

// for (let check = 0; check < numArr.length; check++) {
//   sum += numArr[check];
//   averageСheck = sum / numArr.length;
// }
// console.log (averageСheck);

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let randomArr = [];
// let newRandomArr = [];

// for (let i = 0; i < 10; i++ ) {
//   randomArr.push(Math.floor(Math.random()*20))
//   newRandomArr.push(randomArr[i] * 5);
// };
// console.log(randomArr);
// console.log(newRandomArr);

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

const differentValue = ['lorem', 100500, ['qwerty'], 34678, true, {name: 'Shurik'}, ' "Люксово;))" (\xA9 Віктор Кмін)', 3.14, true, 'e = mc2', 157, 'Добрий день, я - олень=)) \xA9-Олександр Крушинський' ];
const arrNumbers = [];

for (let value of differentValue) {
  if (typeof(value) === 'number') {
    arrNumbers.push(value)
  };
};
console.log(arrNumbers);
console.log(differentValue);