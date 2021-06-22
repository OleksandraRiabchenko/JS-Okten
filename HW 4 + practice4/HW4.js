// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User

// function User(id, name, surname, email, phone) {
//   this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;
// }

// let users = [
//   new User(1, 'Wurik', 'Smit', 'wurik@gmail.com', '+3807688888888'),
//   new User(2, 'Oleg', 'Potter', 'potter@gmail.com', '+3807677777777'),
//   new User(3, 'Marta', 'Baggins', 'baggins@gmail.com', '+3807655555555'),
//   new User(4, 'Olga', 'Anderson', 'anderson@gmail.com', '+380744444444'),
//   new User(5, 'Karina', 'Yakij15', 'karina@gmail.com', '+3807633333333'),
//   new User(6, 'Vitalik', 'Vitalka', 'vitalia@gmail.com', '+3807622222222'),
//   new User(7, 'Katerina', 'Markoni', 'kat@gmail.com', '+3807611111111'),
//   new User(8, 'Lexa', 'Arestovich', 'lex@gmail.com', '+3807600000000'),
//   new User(9, 'Rudolf', 'Dassler', 'puma@gmail.com', '+3807600000000'),
//   new User(10, 'Adolf', 'Dassler', 'adik@gmail.com', '+3807611000000'),
// ]
// console.log(users);

// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//   constructor(id, name, surname, email, phone, order = []) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//   }
// }

// const clients = [
//   new Client(1, 'Wurik', 'Smit', 'wurik@gmail.com', '+3807688888888', ['apple', 'milk']),
//   new Client(2, 'Oleg', 'Potter', 'potter@gmail.com', '+3807677777777', ['bread', 'sugar', 'coffee', 'milk', 'chocolate']),
//   new Client(3, 'Marta', 'Baggins', 'baggins@gmail.com', '+3807655555555', ['tomat', 'coffee', 'beer']),
//   new Client(4, 'Olga', 'Anderson', 'anderson@gmail.com', '+380744444444', ['candy', 'apple']),
//   new Client(5, 'Karina', 'Yakij15', 'karina@gmail.com', '+3807633333333', ['meat', 'cheese', 'candy']),
//   new Client(6, 'Vitalik', 'Vitalka', 'vitalia@gmail.com', '+3807622222222', ['beer']),
//   new Client(7, 'Katerina', 'Markoni', 'kat@gmail.com', '+3807611111111', ['potato', 'cucumber','tomat']),
//   new Client(8, 'Lexa', 'Arestovich', 'lex@gmail.com', '+3807600000000', ['doll', 'beer']),
//   new Client(9, 'Rudolf', 'Dassler', 'puma@gmail.com', '+3807600000000', ['PS5']),
//   new Client(10, 'Adolf', 'Dassler', 'adik@gmail.com', '+3807611000000', ['toy', 'tomat']),
// ]

// console.log(clients);

// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model, maker, graduationYear, maxSpeed, capacityEngine) {
//   this.model = model;
//   this.maker = maker;
//   this.graduationYear = graduationYear;
//   this.maxSpeed = maxSpeed;
//   this.capacityEngine = capacityEngine;
//   this.driver = {};

//   this.drive = function () {
//     console.log(`їдемо зі швидкістю ${maxSpeed} км на годину`);
//   }

//   // ???Що малось на увазі "виводить всю інформацію про автомобіль"? у вигляді чого: массиву, стрінги чи об'єкту?"
//   this.info = function () {
//     // let info = {model: this.model, maker: this.maker, graduationYear: this.graduationYear, maxSpeed: this.maxSpeed, capacityEngine: this.capacityEngine};
//     // return info;
//     let info = `Car model: ${this.model}, ${this.graduationYear} graduation year, max speed ${this.maxSpeed} km/h, engine capacity - ${this.capacityEngine}l `
//     console.log(info);
//   }

//   this.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed += newSpeed;
//   }

//   this.changeYear = function (newValue) {
//     this.graduationYear = newValue;
//   }
//   //??я не впевнена, що зробила вірно це завдання
//   this.addDriver = function (driver = {}) {
//     this.driver = driver;
//   }
// }
// // const user1 = [new User(1, 'Wurik', 'Smit', 'wurik@gmail.com', '+3807688888888')];
// const unit = { id: 1, name: "Wurik", surname: "Smit", email: "wurik@gmail.com", phone: "+3807688888888" };
// const audi = new Car('Audi A4 40 TFSI S-tronic', 'Audi', 2020, 238, 2.0);
// console.log(audi);
// audi.drive();
// audi.info();
// audi.increaseMaxSpeed(100);
// audi.changeYear(2019);
// audi.addDriver(unit)
// console.log(audi);

// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Car {
  constructor(model, maker, graduationYear, maxSpeed, capacityEngine) {
    this.model = model;
    this.maker = maker;
    this.graduationYear = graduationYear;
    this.maxSpeed = maxSpeed;
    this.capacityEngine = capacityEngine;
    this.driver = {};
  }
  
  drive() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
  }

  info() {
    // let info = { model: this.model, maker: this.maker, graduationYear: this.graduationYear, maxSpeed: this.maxSpeed, capacityEngine: this.capacityEngine };
    // console.log(info);
    let info = `Car model: ${this.model}, ${this.graduationYear} graduation year, max speed ${this.maxSpeed} km/h, engine capacity - ${this.capacityEngine}l`;
    console.log(info);
  }

  increaseMaxSpeed(newSpeed) {
    this.maxSpeed += newSpeed;
  }

  changeYear(newValue) {
    this.graduationYear = newValue;
  }

  addDriver(driver) {
    this.driver = driver;
  }
}

const tachka = new Car('mers', 'Mercedes', 2010, 220, 2.3);
const unit1 = { id: 1, name: "Wurik", surname: "Smit", email: "wurik@gmail.com", phone: "+3807688888888" };
tachka.drive();
tachka.info();
tachka.increaseMaxSpeed(100);
tachka.changeYear(2019);
tachka.addDriver(unit1)
console.log(tachka);


// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню

// let filter = users.filter(function (user) {
//   return (user.id % 2 === 0);
// });
// console.log(filter);

// let sortUp = users.sort(function (user1, user2) {
//   return user1.id - user2.id;
// });
// console.log(sortUp);

// const sortDown = users.sort(function (userOne, userTwo) {
//   return userTwo.id - userOne.id;
// });
// console.log(sortDown);


// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню
// const sortOrder = clients.sort(function (userOne, userTwo) {
//   return userOne.order.length - userTwo.order.length;
// });
// console.log(sortOrder);
