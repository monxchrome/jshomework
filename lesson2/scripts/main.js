// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [
    'Stefan', 17, true, 'hello', 'okten', -10, false, 3.14, NaN, '10'
];
console.log(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let starlight = {
    title: 'Starlight',
    pageCount: 469,
    genre: 'fantasy',
}

let starlight2 = {
    title: 'Starlight 2',
    pageCount: 395,
    genre: 'fantasy',
}

let starlight3 = {
    title: 'Starlight 3',
    pageCount: 593,
    genre: 'fantasy',
}


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let residentEvil = {
    title: 'The book',
    pageCount: 469,
    genre: 'horror',
    authors: [
        {name: 'Perry', age: 52},
    ],
};

let residentEvilB = {
    title: 'Biohazard Document File',
    pageCount: 469,
    genre: 'horror',
    authors: [
        {name: '-', age: 52},
    ],
};

let residentEvilR = {
    title: 'Retribution',
    pageCount: 469,
    genre: 'horror',
    authors: [
        {name: 'John Shirley', age: 69},
    ],
};


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Stefan', username: 'shiki', password: prompt('enter your password')},
    {name: 'Vasya', username: 'Vasya1999', password: 'asdqwezxc'},
    {name: 'Petya', username: 'petyasd', password: '12345678901'},
    {name: 'Andrew', username: 'and2000', password: 'andasdqwezxc'},
    {name: 'Iris', username: 'irisxd', password: 'iris4j0oi2m8'},
    {name: 'Max', username: 'maximus', password: 'hjkdsldjfhkasdf'},
    {name: 'Kolya', username: 'hello_world', password: '12344'},
    {name: 'Olya', username: 'olyaaa-', password: 'qweasdzxc123456qwe'},
    {name: 'Helen', username: 'hellen_world', password: 'strongpassword'},
    {name: 'Gosha', username: 'gogogosha', password: 'antiparolasd123'},
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);