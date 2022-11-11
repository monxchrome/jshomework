// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let intArray = [1, 2, 3, 4, 5];
let stringArray = ['hello', 'okten', 'world', 'earth', 'space'];
let array = ['js', 55, true, '', false];
console.log(intArray);
console.log(stringArray);
console.log(array);

console.log('');

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let array2 = [];
array2[0] = 'html';
array2[1] = 'css';
array2[2] = true;
array2[3] = 5
console.log(array2);

console.log('');

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let numArray = [2,17,13,6,22,31,45,66,100,-18];

let i = 0
while(i < numArray.length) {
    let number = numArray[i];
    console.log(number)
    i++
}

console.log('-')
//
for (const number of numArray) {
    console.log(number)
}
//
console.log('-')

let x = 0
while(x < numArray.length) {
    let number = numArray[x];
    if (number % 2 === 0) {
        console.log(number);
    }
    x++
}

console.log('-');

let c = 0
while(c < numArray.length) {
    let number = numArray[c];
    if (number % 2 === 1) {
        console.log(number);
    }
    c++
}

console.log('-')

for (const number of numArray) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

console.log('-')

for (const number of numArray) {
    if (number % 2 === 1) {
        console.log(number);
    }
}

console.log('-')

for (let i = 0; i < numArray.length; i++) {
    const numArrayElement = numArray[i];
    if (numArrayElement % 3 === 0) {
        numArray[i] = 'okten';
    }
}
console.log(numArray)

console.log('-')

for (let i = numArray.length - 1; i >= 0; i--) {
    const numArrayElement = numArray[i];
    console.log(numArrayElement)
}

console.log('------------');

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let numArray2 = [2,17,13,6,22,31,45,66,100,-18];

let j = numArray2.length;
while (j--) {
    console.log(numArray2[j]);
}

console.log('-');

for (let i = numArray2.length - 1; i >= 0; i--) {
    const numArrayElement = numArray2[i];
    console.log(numArray2[i])
}

console.log('-');

let k = numArray2.length
while(k--) {
    let number = numArray2[k];
    if (number % 2 === 1) {
        console.log(number);
    }
}

console.log('-');

for (let i = numArray2.length - 1; i >= 0; i--) {
    const number = numArray2[i];
    if (number % 2 === 1) {
        console.log(number);
    }
}

console.log('-');

let f = numArray2.length
while(f--) {
    let number = numArray2[f];
    if (number % 2 === 0) {
        console.log(number);
    }
}

console.log('-');

for (let i = numArray2.length - 1; i >= 0; i--) {
    const number = numArray2[i];
    if (number % 2 === 0) {
        console.log(number);
    }
}

console.log('-');

for (let i = numArray2.length - 1; i >= 0; i--) {
    const numArray2Element = numArray2[i];
    if (numArray2Element % 3 === 0) {
        numArray2[i] = 'okten';
    }
    console.log(numArray2[i])
}

console.log('')

let numbers = [12, 68, 124, 1, 85, 60, 77, 11, 25, 33];
let stings = ['yogurt', 'work', 'jem', 'back', 'green pay', 'frozen', 'simple', 'electronic', 'flame'];
let someArray = [true, false, 'apple', 'december', 15, NaN, null, -17, 0];
let Arrayka = [true, false, 'apple', 'december', 15, true, true, -17, 0];

for (const number of numbers) {
    console.log(number);
}

for (const sting of stings) {
    console.log(sting);
}

for (const someArrayElement of someArray) {
    console.log(someArrayElement);
}

for (const arraykaElement of Arrayka) {
    if (typeof arraykaElement === "boolean") {
        console.log(arraykaElement);
    }
}

for (const arraykaElement of Arrayka) {
    if (typeof arraykaElement === 'number') {
        console.log(arraykaElement);
    }
}

for (let i = 0; i < Arrayka.length; i++) {
    const arraykaElement = Arrayka[i];
    console.log(i);
}

console.log('')

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

let nullArray = [];
nullArray[0] = 12;
nullArray[1] = 68;
nullArray[2] = 124;
nullArray[3] = 'yogurt';
nullArray[4] = 'work';
nullArray[5] = 'jem';
nullArray[6] = true;
nullArray[7] = false;
nullArray[8] = NaN;
nullArray[9] = null;

for (let i = 0; i < nullArray.length; i++) {
    const nullArrayElement = nullArray[i];
    console.log(nullArray[i]);
    document.write(i);
}

console.log('-');

for (let i = 0; i < 100; i++) {
    const nullArrayElement = nullArray[i];
    console.log(i);
    document.write(i);
}

console.log('-');

for (let i = 0; i < 100; i += 2) {
    const nullArrayElement = nullArray[i];
    console.log(i);
    document.write(i);
}

console.log('-');


for (let i = 0; i < 100; i++) {
    const nullArrayElement = nullArray[i];
    if (i % 2 === 0) {
        console.log(i);
        document.write(i);
    }
}

console.log('-');


for (let i = 0; i < 100; i++) {
    const nullArrayElement = nullArray[i];
    if (i % 2 === 1) {
        console.log(i);
        document.write(i);
    }
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

let books = [
    {title: 'Harry Potter', c_pages: 842, authors: ['J.K. Rowling'], genres: ['fantasy']},
    {title: 'The City of Brass, by S. A. Chakraborty', c_pages: 547, authors: ['HARPER VOYAGER'], genres: ['novel']},
    {title: 'The Buried Giant, by Kazuo Ishiguro', c_pages: 3407, authors: ['VINTAGE',  'JACKY NICKELSON'], genres: ['fantasy', 'novel']},
    {title: 'The Library at Mount Char, by Scott Hawkins', c_pages: 973, authors: ['BROADWAY BOOKS'], genres: ['horror']},
];

let max_genres = books[0];
for(book of books) {
    if(book.genres.length > max_genres.genres.length) {
        max_genres = book
    }
}

let max_pages = books[0];
for(book of books) {
    if(book.c_pages > max_pages.c_pages) {
        max_pages = book
    }
}

let max_title = books[0];
for(book of books) {
    if(book.title.length > max_title.title.length) {
        max_title = book
    }
}

let two_authors = books[0];
for(book of books) {
    if(book.authors.length >= 2) {
        two_authors = book
    }
}

let author = books[0];
for(book of books) {
    if(book.authors.length >= 1) {
        author = book
    }
}