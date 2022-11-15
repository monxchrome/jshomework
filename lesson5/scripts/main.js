// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function sP (a, b) {
    return a*b;
}
console.log(sP(15, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let rK = function rK (c, PI) {
    c = 20;
    PI = 3.14;
    return Math.round(c/(2*PI));
}

let sK = function sK(r, PI) {
    PI = 3.14;
    r = rK();
    return PI*Math.pow(r, 2);
}

console.log(sK());

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cS (h, r, PI) {
    h = 15;
    r = 20;
    PI = 3.14;
    return 2*PI*(h+r);
}
console.log(cS());

// - створити функцію яка приймає масив та виводить кожен його елемент

arr = ['Stefan', 17, true, 'hello', 'okten', -10, false, 3.14, NaN, '10']

function cArr(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
cArr(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function par (text) {
    document.write(`<p>${text}</p>`);
}

par('hello okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ul (text) {
    document.write(`
            <ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>
    `)
}

ul('simpsons')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function numLi(text, num) {
    document.write(`<ul>`)
    i = 0
    while(i<3) {
        document.write(`<li>${text}</li>`);
        i++
    }
    document.write(`</ul>`)
}

numLi('hello');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function listArr(arr) {
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
}

listArr(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id:5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'masha', age: 30, id: 8},
    {name: 'andrey', age: 29, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id:11},
];

function userList (users) {
    for (const user of users) {
        document.write(`
        <div>${user.name} ${user.id} ${user.age}</div>
                        `)
    }
}

userList(users);

// - створити функцію яка повертає найменьше число з масиву

let numArr = [1, 2, 3, 4, 5, 6, -1, 8, 9, 10, 0];

function minNum(arr) {
    num = arr[0]
    for (const arrElement of arr) {
        if (arrElement < num) {
            num = arrElement
            console.log(arrElement)
        }
    }
}

minNum(numArr);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let plusArr = [1, 2, 3, 4, 5, 6, -1, 8, 9, 10, 0];

function sum (arr){
    let s = null;
    for (i = 0; i < arr.length; i++){
        s += arr[i]
    }
    return s
}
console.log(sum(plusArr));
