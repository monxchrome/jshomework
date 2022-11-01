// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let all = 'hello';
console.log(all);
all = 'owu';
console.log(all);
all = 'com';
console.log(all);
all = 'ua';
console.log(all);
all = 1;
console.log(all);
all = 10;
console.log(all);
all = -999;
console.log(all);
all = 123;
console.log(all);
all = 3.14;
console.log(all);
all = 2.7;
console.log(all);
all = 16;
console.log(all);
all = true;
console.log(all);
all = false;
console.log(all);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)


let firstName = 'Samokhval';
let middleName = 'Stefan';
let lastName = 'Andreevich';

person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100;
let b = '100';
let c = true;

console.log(typeof a, typeof b, typeof c);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let fName = prompt('enter your first name');
let mName = prompt('enter your middle name');
let lName = prompt('enter your last name');

console.log(`${fName} ${mName} ${lName}`);