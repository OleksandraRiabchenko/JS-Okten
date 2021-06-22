// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// const arrNum = [1, 4, 7, 10, 13];
// const arrStr = ['abc', 'def', 'ghi', 'jkl', 'mno'];
// const array = new Array(1, 'one', 2, 'two', true);
// console.log(arrNum);
// console.log(arrStr);
// console.log(array);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// const arr = [];
// arr[0] = 'zero';
// arr[1] = 'one';
// arr[2] = 2;
// arr[3] = 3;
// arr[4] = false;
// console.log(arr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

//const arrStrings = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 'stu', 'vwx', 'yz', 'alphabet'];

// for (let i = 0; i < arrStrings.length; i++) {
//   // document.write(`<div> ${arrStrings[i]} </div>`);
//   //document.write('<div>' + arrStrings[i] + '</div>');
//   //document.write(`<div style="background-color: red"> ${arrStrings[i]} </div>`)
// };

// for (let k = 0; k < arrStrings.length; k++) {
//   document.write(`<div> ${arrStrings[k]} ${k} </div>`);
// };


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// const string = 'довільнийТекстДляМассиву';
// const array1 = [...string];
// let l = 0;
// while (l < 21) {
//   // document.write(`<h1> ${array1[l]} </h1>`);
//   //document.write(`<h1> ${l} ${array1[l]}  </h1>`);
//   l++;
// };


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// const arrNumbers = [ 12, 34, 56, 78, 90, 13, 24, 35, 46, 57];

// for (let value of arrNumbers) {
//   console.log(value);
// };

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// const arrStrings = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 'stu', 'vwx', 'yz', 'alphabet'];

// for (let value of arrStrings) {
//   console.log(value);
// };

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// const array2 = [098, 345, 'red', true, 'photo', false, '123', 'true))', 'apple', 276];

// for (let item of array2) {
//   if (typeof(item) === 'boolean') {
//     console.log (item);
//   };
// };
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// const array3 = [098, 345, 'red', true, 'photo', false, '123', 'true))', 'apple', 276];

// for (let item of array3) {
//   if (typeof(item) === 'number') {
//     console.log (item);
//   };
// };

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// const array4 = [098, 345, 'red', true, 'photo', false, '123', 'true))', 'apple', 276];

// for (let item of array4) {
//   if (typeof(item) === 'string') {
//     console.log (item);
//   };
// };

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// const newArr = [];
// newArr[0] = 'a';
// newArr[1] = 'b';
// newArr[2] = 1;
// newArr[3] = 2;
// newArr[4] = true;
// newArr[5] = false;
// newArr[6] = {name: 'Alex'};
// newArr[7] = {cat: 'Richard'};
// newArr[8] = [1, 3, 5];
// newArr[9] = ['string', 'number', 'boolean'];

// for (let element of newArr) {
//   console.log(element);
// };


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for ( let x = 0; x < 10; x++) {
//   const step = x + 1;
//   console.log(step);
//   document.write('<div>' + step + '</div>');
// };

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for ( let y = 0; y < 100; y++) {
//   const step2 = y + 1;
//   console.log(step2);
//   document.write(`<div> ${step2} </div>`);
// };

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for ( let z = 0; z < 200; z = z + 2) {
//   const step3 = z + 1;
//   console.log(step3);
//   document.write(`<div> ${step3} </div>`);
// };

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for ( let q = 0; q < 100; q++) {
//   const step4 = q + 1;

//   if (step4 % 2 === 0) {
//   console.log(step4);
//   document.write(`<div> ${step4} </div>`);
//   };
// };

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for ( let w = 0; w < 100; w++) {
//   const step5 = w + 1;

//   if (step5 % 2 === 1) {
//   console.log(step5);
//   document.write(`<div> ${step5} </div>`);
//   };
// };

// - Дано 2 масиви з рівною кількістю об'єктів. 
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Масиви:
// let usersWithId = [
//   { id: 1, name: 'vasya', age: 31, status: false },
//   { id: 2, name: 'petya', age: 30, status: true },
//   { id: 3, name: 'kolya', age: 29, status: true },
//   { id: 4, name: 'olya', age: 28, status: false }
// ];

// let citiesWithId = [
//   { user_id: 3, country: 'USA', city: 'Portland' },
//   { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
//   { user_id: 2, country: 'Poland', city: 'Krakow' },
//   { user_id: 4, country: 'USA', city: 'Miami' }
// ];

// let usersWithCities = [];

// for (let d = 0; d < usersWithId.length; d++) {

//   for (let i = 0; i < citiesWithId.length; i++) {

//     if (usersWithId[d].id === citiesWithId[i].user_id) {
//       usersWithId[d].adress = citiesWithId[i];
//       usersWithCities.push(usersWithId[d]);
//     };
//   };
// };
// console.log(usersWithCities);
