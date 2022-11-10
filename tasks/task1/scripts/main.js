// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//  кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому
//  3 і більше елементи.
//  Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = [
    "Ivan",
    "Slavik",
    "Grisha",
    "Lera",
    "Ira",
];

if (friends[0] >= friends[2] ) {
    document.write('Array is big and have 3 and more elements');
} else {
    document.write(' Array is small and have min 3 elements ');
}

//  - Маємо 3 числа і між ним нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше).
//  Перевірити, чи знаходиться перше число між двома іншими.

let num1 = +prompt('Enter the first number: ');
let num2 = +prompt('Enter the second number: ');
let num3 = +prompt('Enter the third number: ');

if (num1 > num2 && num3 > num1 || num2 > num1 && num3 < num2) {
    document.write(`<h1></h1>`);
    document.write(num1);
} else if (num1 > num2 && num3 < num2 || num3 > num2 && num1 < num2) {
    document.write(`<h1></h1>`);
    document.write(num2);
} else if (num2 > num3 && num1 > num2 || num1 > num3 && num2 < num3) {
    document.write(`<h1></h1>`);
    document.write(num3);
} else {
    document.write(`<h1></h1>`);
    document.write('Enter a valid number');
}

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

let a = 4;
let b = 1

let result2 = (a + b < 4) ? 'Мало':
    'Багато';

console.log(result2)

//  - Маємо будь-яке число від -100 , 0, +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let number = +prompt('Enter a number (negative, positive or 0): ');

if (number < 0) {
    document.write(`<h1></h1>`);
    document.write('This is negative number');
} else if (number === 0) {
    document.write(`<h1></h1>`);
    document.write('Number is = 0');
} else {
    document.write(`<h1></h1>`);
    document.write('This is positive number');
}

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти
// скрипта - з коротким записом(тернаркою)

let test = true

if (test) {
    console.log('true')
} else {
    console.log('false')
}

(test === true) ? console.log('true'):
    console.log('false');

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let que = prompt('Яка «офіційна» назва JavaScript?');

if (que === 'ECMAScript') {
    console.log('Правильно!');
} else {
    console.log('Не знаєте? ECMAScript!');
}

//  - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('').
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let findPadik = +prompt('Enter your flat: ');

if (findPadik >= 20 && findPadik < 21) {
    console.log('Your padik = 1');
} else if (findPadik > 20 && findPadik < 48) {
    console.log('Your padik = 2');
} else if (findPadik >= 49 && findPadik <= 90) {
    console.log('Your padik = 3');
} else {
    console.log('Enter a valid flat, your padik can not been found')
}

// - Ми маємо змінну number в яку користувач задає числове значення, якщо змінна рівна 10 вивести повідомлення
// ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number2 = +prompt('Enter a number: ');

switch (number2) {
    case 10:
        console.log('true');
        break;
    default:
        console.log('false')
}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ.
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН.


Math.random();
let temperature = Math.floor(Math.random() * 23) +10;

if (temperature >= 10 && temperature <= 22) {
    console.log('Learning');
} else {
    console.log('Stay House')
}

//  - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
//  І взалежності відвведеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д) і якщо число не підходить тоді вивести
// Повідомлення - що число не вірне ... .

let vik = +prompt('Enter a number 1 - 5');

switch (vik) {
    case 1:
        document.write(`<h1></h1>`);
        document.write('You win an auto');
        break;
    case 2:
        document.write(`<h1></h1>`);
        document.write('You win a moto');
        break;
    case 3:
        document.write(`<h1></h1>`);
        document.write('You win an iPhone');
        break;
    case 4:
        document.write(`<h1></h1>`);
        document.write('You win a Mac Book Pro 16 inch');
        break;
    case 5:
        document.write(`<h1></h1>`);
        document.write('You win a flat')
}