// let str = 'Привіт';
// const num = 123;
// let flag = true;
// const txt = 'true';
// console.log(typeof(str), typeof(num), typeof(flag), typeof(txt));
// let a1 = (120 / 3) - (3 * 2); // 34
// let a2 = (64 / 8) + (2 * 2); // 12
// let a3 = 3 * 12 + (120 / 4); // 66
// let a4 = 3 ** 2 + 9 * (27 / 3); // 90
// let a5 = 20 * 4 + (175 / 25); // 87

//----------------
// let a6 = 5 % 3;
// let a7 = 3 % 5; 
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг'
// console.log(a6, a7, a8, a9, a10);

//----------------
// let height = 23;
// let widht = 10;
// let s = height * widht;

//----------------
// const heightC = 10;
// const dC = 4;
// const sC = 3.14 * (dC ** 2) / 4;
// const v = sC * heightC; 
// // або 
// const v2 = 3.14 * ((dC ** 2) / 4) * 10;   

//----------------
// let n = 3;
// let m = 4;
// let k = ((n ** 2) + (m ** 2)) ** 0.5;
// let k1 = Math.pow((n ** 2) + (m ** 2), 0.5);
// let k2 = Math.sqrt((n ** 2) + (m ** 2));
// console.log(k, k1, k2);

//----------------
// alert('Рябченко Олександра Анатоліївна \nмені 30 рочків)) \nлюблю грати у вікторини Quiz');

//----------------
// const str1 = 'Хто';
// const str2 = 'ти';
// const str3 = 'такий?';
// const concatenation = str1 + ' ' + str2 + ' ' + str3;
// document.write(concatenation);

//----------------
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

//----------------
// let x = +prompt ('Введіть х');
// let y = +prompt ('Введіть y');
// alert(x + y);

//----------------
// let userName = prompt('Ваше ім\'я?');
// let userLastName = prompt('Ваша фамілія?');
// let userAge = prompt('Скільки Вам років?');
// alert(`Добрий вечір, ${userName} ${userLastName}, мої вітання що Вам ${userAge} років!`);

//--------------------
// let a = +prompt('Введіть а');
// let b = +prompt('Введіть b');
// let c = +prompt('Введіть c');

// if (a < b && a < c && b < c) {
//   console.log(a, b, c);
// } else if (b < a && b < c && a < c) {
//   console.log(b, a, c); 
// } else if (c < a && c < b && b < a ) {
//   console.log(c, b, a);
// } else if (b < a && b < c && c < a ) {
//   console.log(b, c, a);
// } else if (a < b && a < c && b > c) {
//   console.log(a, c, b );
// } else {
//   console.log(c, a, b);
// }

// ----------------------
// let color = prompt ('Який горить колір світлофора?');

// if (color === 'зелений') {
//   alert('Іди!')
// } else if (color === 'жовтий') {
//   alert('Чекай!')
// } else if (color === 'червоний') {
//   alert('Стій!')
// } else {
//   alert('Роби бардак, ми тут проїздом))');
// }

// switch (color) {
//   case 'зелений': alert('Іди!')
//   break;
//   case 'жовтий': alert('Чекай!')
//   break;
//   case 'червоний': alert('Стій!')
//   break;
//   default:
//     alert('Роби бардак, ми тут проїздом))');
// }

//---------------------
// let color2 = prompt('Який горить колір світлофора?');
// let isRoadClear = confirm('Машини на дорозі є?')

// if (color2 === 'зелений' && isRoadClear === false) {
//   alert('Іди!')
// } else if (color2 === 'зелений' && isRoadClear === true) {
//   alert('Зачекай поки порушники проїдуть')
// } else if (color2 === 'жовтий' && isRoadClear === true) {
//   alert('Чекай!')
// } else if (color2 === 'жовтий' && isRoadClear === false) {
//   alert('Все одно чекай!')
// } else if (color2 === 'червоний' && isRoadClear === true) {
//   alert('Стій та чекай!')
// } else if (color2 === 'червоний' && isRoadClear === false) {
//   alert('Стій все одно!')
// } else {
//   alert('Роби як заманеться!')
// }

