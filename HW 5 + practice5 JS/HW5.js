// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
let textContent = document.getElementById('content');
console.log(textContent.innerText);
//     b) отримує текст з блоку з id "rules"
const textRules = document.getElementById('rules');
console.log(textRules.innerText);
//     c) замініть текст параграфа з id 'content' на будь-який інший
textContent.innerText = 'Vermipsylla (лат.) — род блох из семейства Vermipsyllidae. От других блох отличаются обособленными длинными предсенсилиальными щетинками и анальными стилетами у самок. Мезонотум примерно одинаковой длины и высоты. В горах Центральной Азии и Китае паразитируют на овцах, козах, яках и других копытных животных';

//     d) замініть текст параграфа з id 'rules' на будь-який інший
textRules.innerText = 'Asteroids (рус. Астероиды) — игра на аркадных автоматах, выпущенная Atari в 1979 году. Стала одной из самых известных игр золотого века аркадных игр.'

//     e) змініть кожному елементу колір фону на червоний 
// TODO то я для себе різними варіантами пробувала

const div = document.getElementById('rules');
div.classList.add('red');
// const div = document.getElementsByTagName('div');
// for (let d of div) {d.style.backgroundColor = 'red';}

//const childElements = document.body.children;
// for (let child of childElements) {
//   child.style.backgroundColor = 'red';
// }

const peshka = document.getElementById('content');
peshka.classList.add('red');
//peshka.style.backgroundColor = 'red'; 

const lishki = document.getElementsByClassName('fc_rules');
console.log(lishki);
for (let li of lishki) {
  li.style.backgroundColor = 'red';
  //li.classList.add('red');
}

//     f) змініть кожному елементу колір тексту на синій
peshka.style.color = 'blue';
div.style.color = 'blue';

for (let li of lishki) {
  li.style.color = 'blue';
}
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log

//console.log(document.getElementById('rules').classList);
console.log(div.classList);
//     h) отримати всі елементи з класом fc_rules
// //lishki = document.getElementsByClassName('fc_rules');
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний

for (let li of lishki) {
  li.style.color = 'red';
}
