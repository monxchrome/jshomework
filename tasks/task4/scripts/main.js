// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

arr = [];

let i = 0;
while (i < 100) {
    if (i % 2 === 0) {
        arr.push(i);
    } else {
        arr.push(i);
    }
    i++;
}

for (let j = 0; j < 20; j++) {
    const arrayElement = arr[j];
    let rand = Math.floor(Math.random() * 100);
    arr.push(rand);
}

for (let j = 0; j < 20; j++) {
    const arrayElement = arr[j];
    rand = Math.floor(Math.random() * 732) + 8;
    arr.push(rand);
}

//  2. Вивести за допомогою console.log кожен третій елемен

let arr2 = [];
for (let j = 0; j < arr.length; j += 3) {
    const arrayElement = arr[j];
    arr2.push(arrayElement);
}
console.log(arr2);

//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let arr3 = [];
for (let j = 0; j < arr.length; j += 3) {
    const arrayElement = arr[j];
    if (arrayElement % 2 === 0) {
        arr3.push(arrayElement);
    }
}
console.log(arr3);

//  5. Вивести кожен елемент масиву, сусід справа якого є парним

arr5 = [];
for (let j = 0; j < arr.length; j++) {
    const arrayElement = arr[j];
    if (arrayElement %2 === 0) {
        j--;
        arr5.push(arrayElement);
    }
    j++;
}
console.log(arr5);

//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let exArr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];

console.log(exArr[0], exArr[5], exArr[6]);

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let numArr = [100,250,50,168,120,345,188];

let sum = numArr.reduce((previousValue, currentValue) => previousValue + currentValue );
let sr = sum/numArr.length;
console.log(Math.round(sr));

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let randArr = [];
let resArr = [];
for (let j = 0; j < 10; j++) {
    const randArrElement = randArr[j];
    let rand2 = Math.floor(Math.random() * 10);
    randArr.push(rand2);
}

let res = randArr.reduce((previousValue, currentValue) => previousValue*currentValue);
resArr.push(res);

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let someArr = [
    'Stefan', 17, true, 'hello', 'okten', -10, false, 3.14, NaN, '10'
];

let someNum = [];

for (const someArrElement of someArr) {
    if (typeof someArrElement === 'number') {
        someNum.push(someArrElement);
    }
}

console.log(someNum);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

let newArr = [];
for (const citiesWithIdElement of citiesWithId) {
    for (const user of usersWithId) {
        if (user.id === citiesWithIdElement.user_id) {
            let newU = user.address = citiesWithIdElement;
            newArr.push(user, newU);
        }
    }
}

// Example:



// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]



// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let newNumArr = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
for (const number of newNumArr) {
    if (number %2 === 0) {
        console.log(number);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let newnew = [];
for (const number of newNumArr) {
    newnew.push(number)
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let strtr = [ 'a', 'b', 'c'];
newstr = '';
for (let j = 0; j < strtr.length; j++) {
    const strtrElement = strtr[j];
    newstr += strtr[j];
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let f = 0;
while (f < strtr.length) {
    newstr += strtr[f];
    f++;
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

for (const string of strtr) {
    newstr += string;
}
console.log(newstr);