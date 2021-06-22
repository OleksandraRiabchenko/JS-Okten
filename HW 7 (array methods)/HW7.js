// 1) Створити масив з 20 чисел та:
// let numberArr = [];
// for (let i = 0; i < 20; i++) {
//   numberArr.push(Math.round(Math.random() * 100));
// }
// console.log(numberArr);

//  a) відсортувати його від меншого до більшого.
// numberArr.sort((a, b) => {
//   return a - b
// })
// console.log(numberArr);

//  b) відсортувати його від більшого до меншого.
// numberArr.sort((a, b) => {
//   return b - a
// })
// console.log(numberArr);

//  c) Відфілтрувати числа які є кратними 3.
// let numbers = numberArr.filter(value => {
//   return value % 3 === 0
// })
// console.log(numbers);

//  d) Відфілтрувати числа які є більшими за 10.
// let numbers = numberArr.filter(value => {
//   return value > 10;
// });
// console.log(numbers);

//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// numberArr.forEach(value => {
//   document.write(`${value}<br>`)
// });

//  f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let bigNum = numberArr.map(value => {
//   return value * 3;
// })
//console.log(bigNum);

//  g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let sum = numberArr.reduce((acc, value) => {

//   return acc + value;
// }, 0);
// console.log(sum);

// 2) Створити масив з 20 стрічок та:
// let stringsArr = ['Hello', 'Developeri takog ludi', 'Richard', 'Okten', 
// 'apple', 'bicycle', 'vasya', 'aloha', 'cucumber', 'martini-gorilka', 
// 'Karini zavgdi 15', 'Ukraine - North Macedonia 2:1', 'JS', 
// 'caramba', 'Glory to Ukraine', 'promise', 'haj jomu grec', 
// 'Rik and Morty', `Четвер - маленька п'ятниця`, 'finish'];

//  a) Відсортувати його в алфавітному порядку
// const abc = stringsArr.sort();
// console.log(abc);

//  b) Відсортувати в зворотньому порядку
// const reversArr = stringsArr.reverse();
// console.log(reversArr);

// const zyx = stringsArr.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } return 1;
// })
// console.log(zyx);

//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 6 букв (бо 4 букви то мало для мого масива)) (filter)
// const filterArr = stringsArr.filter(value => {
//   return value.length > 6;
// })
// console.log(filterArr);

//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// const samSaysArr = stringsArr.map(value => {
//   return value = `Sam says ${value}`
// })
// console.log(samSaysArr);


// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :
// const users = [
//   { name: 'vasya', age: 31, isMarried: false },
//   { name: 'petya', age: 30, isMarried: true },
//   { name: 'kolya', age: 29, isMarried: true },
//   { name: 'olya', age: 28, isMarried: false },
//   { name: 'max', age: 30, isMarried: true },
//   { name: 'anya', age: 31, isMarried: false },
//   { name: 'oleg', age: 28, isMarried: false },
//   { name: 'andrey', age: 29, isMarried: true },
//   { name: 'masha', age: 30, isMarried: true },
//   { name: 'olya', age: 31, isMarried: false },
//   { name: 'max', age: 31, isMarried: true }
// ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// const userAgeUp = users.sort((a, b) => {
//   return a.age - b.age;
// });

// const userAgeDown = users.sort((a, b) => {
//   return b.age - a.age;
// });

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// const userNameUp = users.sort((user1, user2) => {
//   return user1.name.length - user2.name.length;
// });

// const userNameDown = users.sort((user1, user2) => {
//   return user2.name.length - user1.name.length;
// });

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)

// const newUsers = JSON.parse(JSON.stringify(users));
// newUsers.map((value, index) => {
//   return value.id = index + 1;
//   //return value.id = Date.now();
// })

// console.log(newUsers);

// d) відсортувати його за індентифікатором
// newUsers.sort((user1, user2) => {
//   return user2.id - user1.id;
// })

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

// let userIsMarried = newUsers.reduce((acc, value) => {

//   if (value.isMarried) {
//     value.hasApartment = true
//     acc.push(value)
//   }

//   return acc;
// }, [])
// console.log(userIsMarried);


// const cars = [
//   {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//   {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//   {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//   {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//   {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//   {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//   {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//   {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//   {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//   {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//   {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//   {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//   {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];

// // Відфільтрувати масив за наступними крітеріями :
// // - двигун більше 3х літрів
// const carWithBigEngine = cars.filter(car => {
//   return car.volume > 3;
// })

// // - двигун = 2л
// const carWithTwoLitrEngine = cars.filter(car => {
//   return car.volume ===2 ;
// })

// // - виробник мерс
// const mercedes = cars.filter(car => {
//   return car.producer === 'mercedes' ;
// })

// // - двигун більше 3х літрів + виробник мерседес
// const mercedesWithBigEngine = cars.filter(car => {
//   return car.producer === 'mercedes' && car.volume > 3; ;
// })

// // - двигун більше 3х літрів + виробник субару
// const subaruWithBigEngine = cars.filter(car => {
//   return car.producer === 'subaru' && car.volume > 3; ;
// })
// console.log(subaruWithBigEngine);

// // - сили більше ніж 300
// const powerfulCar = cars.filter(car => {
//   return car.power > 300;
// })
// console.log(powerfulCar);

// // - сили більше ніж 300 + виробник субару
// const powerfulSubaru = cars.filter(car => {
//   return car.power > 300 && car.producer === 'subaru';
// })
// console.log(powerfulSubaru);
// // - мотор серіі ej
// const carWithEngineEJ = cars.filter(car => {
//   return car.engine.includes('ej');
// })
// console.log(carWithEngineEJ);

// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// const powerfulSubaruWithEJ = cars.filter(car => {
//   return car.power > 300 && car.producer === 'subaru' && car.engine.includes('ej');
// })
// console.log(powerfulSubaruWithEJ);

// // - двигун меньше 3х літрів + виробник мерседес
// const mercedesWithSmallEngine = cars.filter(car => {
//   return car.producer === 'mercedes' && car.volume < 3; ;
// })
// console.log(mercedesWithSmallEngine);

// // - двигун більше 2л + сили більше 250
// const powerfulCarWithBigEngine = cars.filter(car => {
//   return car.volume > 2 && car.power > 250;
// })
// console.log(powerfulCarWithBigEngine);

// // - сили більше 250  + виробник бмв
// const powerfulBMW = cars.filter(car => {
//   return car.power > 250 && car.producer === 'bmw';
// })
// console.log(powerfulBMW);


// - взять следующий массив
// const usersWithAddress = [
//   { id: 9, name: 'vasya', age: 31, isMarried: false, address: { city: 'Kyiv', street: 'Gongadze', number: 16 } },
//   { id: 2, name: 'petya', age: 30, isMarried: true, address: { city: 'Rivne', street: 'Zelena', number: 1 } },
//   { id: 4, name: 'kolya', age: 29, isMarried: true, address: { city: 'Lviv', street: 'Pasichna', number: 121 } },
//   { id: 3, name: 'olya', age: 28, isMarried: false, address: { city: 'Rivne', street: 'Shevchenko', number: 90 } },
//   { id: 8, name: 'max', age: 30, isMarried: true, address: { city: 'Lviv', street: 'Kriva Lipa', number: 115 } },
//   { id: 6, name: 'anya', age: 31, isMarried: false, address: { city: 'Lviv', street: 'Shevchenko', number: 2 } },
//   { id: 10, name: 'oleg', age: 28, isMarried: false, address: { city: 'Kyiv', street: 'Centralna', number: 22 } },
//   { id: 5, name: 'andrey', age: 29, isMarried: true, address: { city: 'Lviv', street: 'Gorodotska', number: 43 } },
//   { id: 1, name: 'masha', age: 30, isMarried: true, address: { city: 'Kyiv', street: 'Peremogi', number: 12 } },
//   { id: 7, name: 'olya', age: 31, isMarried: false, address: { city: 'Lviv', street: 'Naukova', number: 16 } },
//   { id: 11, name: 'max', age: 31, isMarried: true, address: { city: 'Rivne', street: 'Ivana Franka', number: 121 } }
// ];

// --Відсортувати їх по ID
// usersWithAddress.sort((user1, user2) => {
//   return user1.id - user2.id;
// })
//console.log(usersWithAddress);

// --Відсортувати їх по ID в зворотньому порядку
// usersWithAddress.sort((user1, user2) => {
//   return user2.id - user1.id;
// })

// --Відсортувати по віку
// usersWithAddress.sort((user1, user2) => {
//   return user1.age - user2.age;
// })

// --Відсортувати по віку в зворотньому порядку
// usersWithAddress.sort((user1, user2) => {
//   return user2.age - user1.age;
// })

// --Відсорутвати по імені 
// usersWithAddress.sort((user1, user2) => {
//   if (user1.name > user2.name) {
//     return 1;
//   } return -1;
// })


// --Відсорутвати по назві вулиці
// usersWithAddress.sort((user1, user2) => {
//   if (user1.address.street > user2.address.street) {
//     return 1;
//   } return -1;
// })
//console.log(usersWithAddress);

// --Відсорутвати по номеру будинку
// usersWithAddress.sort((user1, user2) => {
//   return user1.address.number - user2.address.number;
// })

// --Залигити тільки тих, хто молодший ніж 30(filter)
// let youngUsers = usersWithAddress.filter(user => {
//   return user.age < 30;
// })
// console.log(youngUsers);

// --Залишити тільки одружених
// const userIsMarried = usersWithAddress.filter(user => {
//     return user.isMarried ;
//   })
//   console.log(userIsMarried);

// --Залишити тільки одружених, які молодні за 30
// const youngUserIsMarried = usersWithAddress.filter(user => {
//   return user.isMarried && user.age > 30;
// })
// console.log(youngUserIsMarried);

// --Залишити лише тих, в кого парні номери будинків.
// const userWithEvenNumberHous = usersWithAddress.filter(user => {
//   return user.address.number % 2 === 0;
// })
// console.log(userWithEvenNumberHous);

// --Порахувати загальний вік всіх людей. (reduce)
// let sumAges = usersWithAddress.reduce((acc, user) => {
// return acc + user.age;
// }, 0)
// console.log(sumAges);
// --Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив(reduce)
// const usersWithChild = usersWithAddress.reduce((acc, user) => {
//   if (user.isMarried && user.age > 30) {
//     user.child = true;
//     acc.push(user);
//   }

//   return acc;
// }, [])
// console.log(usersWithChild);


// Задача: дан отсортированный по возрастанию массив целых чисел. 
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]

function minMaxIndex(value, array) {

  if (array.includes(value)) {
  let minIndex = array.indexOf(value);
  let maxIndex = array.lastIndexOf(value);
  
  return (`Для значення ${value} MinIndex: ${minIndex}, MaxIndex: ${maxIndex}`)
  } 
  
  return -1;
}
console.log(minMaxIndex(7, arr));

// TODO а цю задачу потрібно було вирушувати через reduce, чи можно моїм способом?





