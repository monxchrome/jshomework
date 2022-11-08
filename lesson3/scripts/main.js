//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x1 = 1;
let x2 = 0;
let x3 = 3;

if (x1 !== 0) {
    console.log('Correct!');
} else {
    console.log('Incorrect');
}

if (x2 !== 0) {
    console.log('Correct!');
} else {
    console.log('Incorrect');
}

if (x3 !== 0) {
    console.log('Correct!');
} else {
    console.log('Incorrect');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

date = new Date();
minutes = date.getMinutes();
let time = minutes;

if (time >= 15 && time < 30) {
    console.log('1/4 hour');
} else if (time >= 30 && time < 45) {
    console.log('2/4 hour');
} else if (time >= 45 && time <= 59) {
    console.log('3/4');
} else if (time === 0 || time < 15) {
    console.log('4/4 hour');
} else {
    console.log('fix your datetime in your pc')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

date = new Date();
day = date.getDate();
let dekada = day;

if (dekada < 11 && dekada !== 0 && dekada > 0) {
    console.log('1/3 dekada');
} else if (dekada >= 11 && dekada < 21) {
    console.log('2/3 dekada');
} else if (dekada >= 21 && dekada <= 31) {
    console.log('3/3 dekada');
} else {
    console.log('fix your datetime in your pc')
}

let pro = +prompt('Enter your day ID:');

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let days = [
    {name: 'Monday: ', desc: 'Work, Gym, Lecture, Girlfriend', pk:1},
    {name: 'Tuesday: ', desc: 'Work, Homework, Girlfriend, Family', pk:2},
    {name: 'Wednesday: ', desc: 'Work, Gym, Lecture, Girlfriend', pk: 3},
    {name: 'Thursday: ', desc: 'Work, Homework, Girlfriend, Family', pk:4},
    {name: 'Friday: ', desc: 'Work, Gym, Lecture, Girlfriend', pk: 5},
    {name: 'Saturday: ', desc: 'Work, Homework, Girlfriend, Family', pk:6},
    {name: 'Sunday: ', desc: 'Work, Gym, Lecture, Girlfriend', pk: 7},
];

switch (pro) {
    case days[0].pk:
        document.write(days[0].name, days[0].desc);
        break;
    case days[1].pk:
        document.write(days[1].name, days[1].desc);
        break
    case days[2].pk:
        document.write(days[2].name, days[2].desc);
        break;
    case days[3].pk:
        document.write(days[3].name, days[3].desc);
        break
    case days[4].pk:
        document.write(days[4].name, days[4].desc);
        break;
    case days[5].pk:
        document.write(days[5].name, days[5].desc);
        break
    case days[6].pk:
        document.write(days[6].name, days[6].desc);
        break;
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('Enter your first number:');
let num2 = +prompt('Enter your second number:');

if (num1 > num2) {
    document.write(`<h1></h1>`);
    document.write('First number: ' + num1);
} else if (num2 > num1) {
    document.write(`<h1></h1>`);
    document.write('Second number: ' + num2);
} else if (num1 === num2) {
    document.write(`<h1></h1>`);
    document.write('First and Second number: ' + num1 + ' = ' + num2);
} else {
    document.write(`<h1></h1>`);
    document.write('Enter a valid number');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let y = prompt('Enter: string(\'\'), number, undefined, null');
if (y) {
    document.write(`<h1></h1>`);
    document.write(y);
} else {
    switch (y) {
        default:
            document.write(`<h1></h1>`);
            document.write('FALSE');
    }
}