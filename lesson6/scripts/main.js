// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
console.log(str1.length);
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool';
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let ustr1 = str1.toUpperCase();
let ustr2 = str2.toUpperCase();
let ustr3 = str3.toUpperCase();

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let lstr1 = str1.toLowerCase();
let lstr2 = str2.toLowerCase();
let lstr3 = str3.toLowerCase();

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let strclear = str.replaceAll(' ', '');

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let strArr = 'Ревуть воли як ясла повні';
function strToArr(str) {
    let split = str.split(' ');
    return split;
}

strToArr(strArr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let numArr = [10,8,-7,55,987,-1011,0,1050,0];

let numfunc = numArr.map(function (arrElement) {
    let newArrElement = arrElement.toString();
    return newArrElement;
});

console.log(numArr.sort(function sortNums(a, b, direction) {
    if (a > b && direction === 1) {
        return 1
    }
    if (a < b && direction < 1) {
        return -1
    }
    if (a === b && direction === 0) {
        return 0
    }
}));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortedMax = coursesAndDurationArray.sort(function (a,b) {
    if (a.monthDuration > b.monthDuration) {
        return 1
    }
});
let filter5 = sortedMax.filter(function (value) {
    if (value.monthDuration >= 5) {
        return value;
    }
});

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let deck = [
    {cardSuit:'Spade', value: 6, color:'Black'},
    {cardSuit:'Clubs', value: 6, color:'Black'},
    {cardSuit:'Hearts', value: 6, color:'Red'},
    {cardSuit:'Diamonds', value: 6, color:'Red'},
    {cardSuit:'Spade', value: 7, color:'Black'},
    {cardSuit:'Clubs', value: 7, color:'Black'},
    {cardSuit:'Hearts', value: 7, color:'Red'},
    {cardSuit:'Diamonds', value: 7, color:'Red'},
    {cardSuit:'Spade', value: 8, color:'Black'},
    {cardSuit:'Clubs', value: 8, color:'Black'},
    {cardSuit:'Hearts', value: 8, color:'Red'},
    {cardSuit:'Diamonds', value: 8, color:'Red'},
    {cardSuit:'Spade', value: 9, color:'Black'},
    {cardSuit:'Clubs', value: 9, color:'Black'},
    {cardSuit:'Hearts', value: 9, color:'Red'},
    {cardSuit:'Diamonds', value: 9, color:'Red'},
    {cardSuit:'Spade', value: 10, color:'Black'},
    {cardSuit:'Clubs', value: 10, color:'Black'},
    {cardSuit:'Hearts', value: 10, color:'Red'},
    {cardSuit:'Diamonds', value: 10, color:'Red'},
    {cardSuit:'Spade', value: 'Jack', color:'Black'},
    {cardSuit:'Clubs', value: 'Jack', color:'Black'},
    {cardSuit:'Hearts', value: 'Jack', color:'Red'},
    {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
    {cardSuit:'Spade', value: 'Queen', color:'Black'},
    {cardSuit:'Clubs', value: 'Queen', color:'Black'},
    {cardSuit:'Hearts', value: 'Queen', color:'Red'},
    {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
    {cardSuit:'Spade', value: 'King', color:'Black'},
    {cardSuit:'Clubs', value: 'King', color:'Black'},
    {cardSuit:'Hearts', value: 'King', color:'Red'},
    {cardSuit:'Diamonds', value: 'King', color:'Red'},
    {cardSuit:'Spade', value: 'Ace', color:'Black'},
    {cardSuit:'Clubs', value: 'Ace', color:'Black'},
    {cardSuit:'Hearts', value: 'Ace', color:'Red'},
    {cardSuit:'Diamonds', value: 'Ace', color:'Red'}
];

let SpadeAce = [];
let value6 = [];
let redCards = [];
let Diamonds = [];
let trefs = [];

let treffilter = deck.filter(function (value) {
    if (value.value >= 9) {
        return trefs.push(value);
    }
});

let spadefilter = deck.filter(function (value){
    if (value.cardSuit === 'Spade' && value.value === 'Ace') {
        return SpadeAce.push(value);
    }
});

let valuefilter = deck.filter(function (value){
    if (value.value === 6) {
        return value6.push(value);
    }
});

let redcardfilter = deck.filter(function (value) {
    if (value.color === 'Red') {
        return redCards.push(value);
    }
});

let diamondfilter = deck.filter(function (value) {
    if (value.cardSuit === 'Diamonds') {
        return Diamonds.push(value);
    }
});

console.log(SpadeAce);
console.log(value6);
console.log(redCards);
console.log(Diamonds);
console.log(trefs);


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = deck.reduce((accumulator, card) => {
    if (card.cardSuit === 'Spade') {
        accumulator.spades.push(card);
    }
    if (card.cardSuit === 'Diamonds') {
        accumulator.diamonds.push(card);
    }
    if (card.cardSuit === 'Hearts') {
        accumulator.hearts.push(card);
    }
    if (card.cardSuit === 'Clubs') {
        accumulator.clubs.push(card)
    }
    return accumulator;
}, {spades:[], diamonds:[], hearts:[], clubs:[]})