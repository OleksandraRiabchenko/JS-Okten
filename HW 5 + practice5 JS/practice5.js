// // Взяти файл template_2.html та працювати в ньому
// // 1) Напишіть код, який :
// //     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// // TODO Не зрозуміла завдання, тому змінила колір тексту та текст
let title = document.getElementById('main_header');
// title.style.color = 'gold';
// title.innerText = 'This is page for task2 mon-2021 group';

// //     b) робить шириниу елементу ul 400px
// const unordList = document.getElementsByTagName('ul');
// for (let ul of unordList) {
//   ul.style.width = '400px'
// }

// //     c) робить шириниу всіх елементів з класом linkList шириною 50%
// const lists = document.getElementsByClassName('linkList');
// for (let li of lists) {
//   li.style.width = '50%';
// }
// //     d) отримує текст який зберігається в елементі з класом listElement2
// for (let li of lists) {
//   console.log(li.innerText);
// }
// //     e) отримує всі елементи li та змінює ім колір фону на сірий
// for (let li of lists) {
//   li.style.backgroundColor = 'grey';
// }
// //     f) отримує всі елементи 'a' та додає їм клас anchor
// const anchors = document.getElementsByTagName('a');
// for (const a of anchors) {
//   a.classList.add('anchor');
// }

// //     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// for (const a of anchors) {
//   if (a.innerText === 'link3') {
//     a.style.fontSize = '40px';
//   }
// }
// //     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// for (const a of anchors) {
//   a.classList.add(`element_${a.innerText}`);
// }

// //     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const subHeaders = document.getElementsByClassName('sub-header');
// for( const header of subHeaders) {
//   header.style.backgroundColor = prompt('Color header?')
// }

// //     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// for( const header of subHeaders) {
//   if (header.innerText === 'content 2 segment') {
//     header.style.backgroundColor = prompt('Color header?')
//   } 
// }
// //     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// // TODO коли я роблю div.innerText я заміняю і <p>, а не тільки текст, чи правильніше через querySelector? 

// //const divFirst = document.getElementsByClassName('content_1');
// // for (const div of divFirst) {
// //   div.innerText = prompt('Write your text here -->')
// // }
// const divka = document.querySelector('div.content_1 p');
// divka.innerText = prompt('Write your text here -->');


// //     l) отримати елементи p та змінити їм padding на 20px
// const peshki = document.getElementsByTagName('p');
// for (const p of peshki) {
//   p.style.padding = '20px'
// }

// //     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// const text2 = document.getElementsByClassName('text2');
// for (const text of text2) {
//   text.innerText = 'mon-2021';
// }

// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
let form = document.forms.form1;
let inputForm1 = form1.input1;

form.onsubmit = function (ev) {
  //ev.preventDefault();
  localStorage.setItem('name', JSON.stringify(inputForm1.value));
  console.log(inputForm1.value);
}


// TODO це завдання зробила в файлі practiceTask3.html та list.html
// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.


// ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар