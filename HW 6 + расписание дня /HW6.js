// 1 За допомоги циклу проітерувати масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку

let users = [{
  name: 'vasya',
  age: 31,
  status: false,
  address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
  name: 'petya',
  age: 30,
  status: true,
  address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
  name: 'kolya',
  age: 29,
  status: true,
  address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
  name: 'olya',
  age: 28,
  status: false,
  address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
  name: 'max',
  age: 30,
  status: true,
  address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
  name: 'anya',
  age: 31,
  status: false,
  address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
  name: 'oleg',
  age: 28,
  status: false,
  address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
  name: 'andrey',
  age: 29,
  status: true,
  address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
  name: 'masha',
  age: 30,
  status: true,
  address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
  name: 'olya',
  age: 31,
  status: false,
  address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
  name: 'max',
  age: 31,
  status: true,
  address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

// for (let user of users) {
//   let div = document.createElement('div');
//   let wrap = document.getElementById('wrap');
//   wrap.append(div);
//   div.innerHTML = `<h3>${user.name} - ${user.age} років</h3><br>
// <p>Статус - ${user.status}<br> 
// Проживає за адресою: 
// ${user.address.country} м. ${user.address.city}, 
// вул.${user.address.street} буд.${user.address.houseNumber}</p><hr>`
// }

// 2 За допомоги циклу проітерувати масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (let user of users) {
  let mainDiv = document.createElement('div');

  let nameBlock = document.createElement('h3');
  nameBlock.innerText = user.name;
  let infoBlock = document.createElement('p');
  infoBlock.innerText = `Вік - ${user.age}років, статус - ${user.status}`
  let addressBlock = document.createElement('div');

  for (let key in user.address) {
    let peska = document.createElement('p');
    peska.innerText = `${key} - ${user.address[key]}`;
    addressBlock.append(peska);
  }
  wrap.appendChild(mainDiv);
  mainDiv.append(nameBlock, infoBlock, addressBlock);
  addressBlock.classList.add('row')

}





