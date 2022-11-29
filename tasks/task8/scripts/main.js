// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// console.log(cutString('наслаждение', 3));
// function cutString(str, n) {
//     let res = [];
//     for (let i = 3; i < str.length; i++) {
//         res.push(str.substring(i, i+n))
//     }
//     return res
// }

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let str = 'Каждый охотник желает знать';

function delete_characters(str, length) {
    let res = str.slice(0, length)
    return res
}
delete_characters(str, 7);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str2 = "HTML JavaScript PHP";

function insert_dash(str) {
    let upper = str.toUpperCase();
    let res = upper.replaceAll(' ', '-');
    return res;
}
insert_dash(str2)

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let h = 'hello'

function upperFirst(str) {
    let res = str.charAt(0).toUpperCase() + str.slice(1)
    return res
}

upperFirst('hello');

// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

function invalid (n) {
    let res = n.replaceAll('.', '')
        .replaceAll('-', '')
        .replaceAll('_', '')
    return res
}

invalid(n1);

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

function rand() {
    let random = [];
    for (let i = 0; i < 100; i++) {
        random.push(Math.floor(Math.random() * 100));
    }
    return random
}

rand();

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let num = [1, 10, 5, 100, 140, 50, 54, 30, 4, 12, 15];
let sort = num.sort(function (a, b) {return a - b});
console.log(sort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

num.filter(filter)

function filter(num) {
    if (num % 2 === 0) {
        return num
    }
}

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

function capitalize(str) {
    let split = str.toLowerCase().split(' ');
    for (let i = 0; i < split.length; i++) {
        const splitElement = split[i];
        split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
    }
    return split.join(' ')

}

console.log(capitalize('world hallo'));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

function validator(email) {
    email.toLowerCase()
    let split = email.split('@');
    let dot_split = split[1].split('.');
    let val = email.match(/@/g)
    if (email = val && dot_split[0].length > 2) {
        return 'your mail is valid'
    } else {
        return 'invalid email'
    }
}

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

coursesArray.sort(function (a, b) {
    return a.modules - b.modules
})

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

function count(str, stringsearch) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        const strElement = str[i];
        if (strElement === 'о') {
            res.push(strElement)
        }
    }
    return console.log(res.length)
}
count('Астрономия это наука о небесных объектах', 'о');

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

function cutString(str, n) {
    let split = str.split(' ')
    let slice = split.slice(0, n);
    let toStr = slice.toString();
    let replace = toStr.replaceAll(',', ' ');
    return console.log(replace);
}

cutString('Сила тяжести приложена к центру масс тела', 5)

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню

let books = [
    {name: 'JavaScript', c_pages: 700, authors: ['Okten', 'Web', 'Academy'], genres: ['fantasy', 'technology']},
    {name: 'Python', c_pages: 500, authors: ['Okten', 'Web'], genres: ['fantasy', 'technology', 'python', 'webdev']},
    {name: 'HTML', c_pages: 100, authors: ['HTMLWebs', 'HTMLAll', 'HTML'], genres: ['technology']},
    {name: 'CSS', c_pages: 300, authors: ['CSSDes'], genres: ['fantasy', 'technology', 'wowcss']},
]

function genres (book) {
    let m_genres = book[0];
    for (const book of books) {
        if (book.genres.length > m_genres.genres.length) {
            m_genres = book
        }
    }
    return m_genres
}

console.log(genres(books));

function name (book) {
    let max_name = books[0];
    for (const book of books) {
        if (book.name.length >= max_name.name.length) {
            return book
        }
    }
}

console.log(name(books));

function authors (book) {
    let m_author = book[0]
    for (const book of books) {
        if (book.authors.length > m_author.authors.length) {
            m_author = book
        }
    }
    return m_author
}
console.log(authors(books));

function author (book) {
    let one_author = book[0];
    for (const book of books) {
        if (book.authors.length === 1) {
            one_author = book
        }
    }
    return one_author
}

console.log(author(books));

function count_pages (book) {
    let res = book.sort(function (a, b) {
        return a.c_pages - b.c_pages;
    });
    return res
}

console.log(count_pages(books));