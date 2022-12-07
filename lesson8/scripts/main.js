// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrayUser = [];
for (let i = 0; i < 10; i++) {
    let user = new User(0 + i, 'Stefan', 'Samokhval', 'ss@gmail.com', '+380');
    arrayUser.push(user)
}

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

arrayUser.filter(function () {
    res = []
    for (let i = 0; i < arrayUser.length; i++) {
        const argument = arrayUser[i];
        if (argument.id % 2 === 0) {
            res.push(argument)
        }
    }
    return res
})

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = res.sort(function (a, b) {
    return b.id - a.id
});
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, email, phone, order) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.order = [order];
    }

}

// створити пустий масив, наповнити його 10 об'єктами Client
let clientArr = [];

let client1 = new Client(1, 'Stefan', 'ss@gmail.com', '+380', ['hello', 'world'])
let client2 = new Client(2, 'Andrew', 'aa@gmail.com', '+382', ['hello'])
let client3 = new Client(3, 'Anna', 'an@gmail.com', '+380', ['world'])
let client4 = new Client(4, 'Billie', 'bbb@gmail.com', '+1', ['js', 'python', 'react'])
let client5 = new Client(5, 'Kokos', 'kkk@gmail.com', '-', ['ya', 'kokos', 'na', 'palme'])
let client6 = new Client(6, 'Helen', 'helen@gmail.com', '+380', ['milk', 'eggs', 'potato', 'books'])
let client7 = new Client(7, 'Alice', 'fox_alice@gmail.com', '+380', ['toys', 'bar', 'snack'])
let client8 = new Client(8, 'Viktor', 'vivi@gmail.com', '+380', ['css', 'html'])
let client9 = new Client(9, 'Slavik', 'slavikk@gmail.com', '+380', ['English', 'JS', 'DB'])
let client10 = new Client(10, 'Alex', 'alexalex@gmail.com', '+380', ['JS', 'English', 'React', 'Node'])

clientArr.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clientArr.sort(function (a, b) {
    return b - a
})

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function carObj(model, manufacturer, year, maxspeed, enginevolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.enginevolume = enginevolume;

    this.drive = function (number) {
        if (number > maxspeed) {
            return console.log('Enter a valid speed.');
        } else {
            return `їдемо зі швидкістю ${number} на годину`;
        }
    }
    this.info = function () {
        return (`This ${manufacturer}, model ${model}, was released in ${year} year, its maximum speed ${maxspeed} km/h and engine size ${enginevolume}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        return maxspeed = newSpeed;
    }
    this.changeYear = function (newValue) {
        year = newValue;
    }
    this.driver = function (driver) {
        return this.driver = driver;
    }


}
let car2 = new carObj('A1', 'Tesla', '2022', '300', '200');

console.log(car2.drive(300));
console.log(car2.info());
car2.increaseMaxSpeed(600);
console.log(car2.info());
car2.changeYear(2020);
console.log(car2.info());
car2.driver('Tony');
console.log(car2);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, manufacturer, year, maxspeed, enginevolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.enginevolume = enginevolume;
    }
    drive(number) {
        if (number > this.maxspeed) {
            console.error('Please, enter a valid speed.')
        } else {
            return `їдемо зі швидкістю ${number} на годину`
        }
    }
    info() {
        return (`This ${this.manufacturer}, model ${this.model}, was released in ${this.year} year, its maximum speed ${this.maxspeed} km/h and engine size ${this.enginevolume}`);
    }
    increaseMaxSpeed (newSpeed) {
        return this.maxspeed = newSpeed;
    }
    changeYear (newValue) {
        this.year = newValue
    }
    driver = function addDriver (driver) {
        return this.driver = driver;
    }
}

let car = new Car('A1', 'Tesla', '2022', '300', '200');
console.log(car);
console.log(car.drive(200));
console.log(car.info());
car.increaseMaxSpeed(900);
console.log(car.info());
car.changeYear(2021);
console.log(car.info());
car.driver('Tony');
console.log(car)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

popelyfkaArr = [];

class Popelyfka {
    constructor(name, age, sizeLeg) {
        this.name = name;
        this.age = age;
        this.sizeLeg = sizeLeg;
    }

}
let popelyfka1 = new Popelyfka('Anna', 20, 38);
let popelyfka2 = new Popelyfka('Alice', 22, 31);
let popelyfka3 = new Popelyfka('Cendrillon', 19, 36);
let popelyfka4 = new Popelyfka('Anastasiya', 18, 39);
let popelyfka5 = new Popelyfka('Fairy', 29, 3);
let popelyfka6 = new Popelyfka('Tremaine', 32, 33);
popelyfkaArr.push(popelyfka1, popelyfka2, popelyfka3, popelyfka4, popelyfka5, popelyfka6);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince extends Popelyfka{
    constructor(name, age, findLeg) {
        super(name, age);
        this.findLeg = findLeg
    }
}

let prince = new Prince('Tomas', 20, 36);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const popelyfka of popelyfkaArr) {
    if (popelyfka.sizeLeg === 36) {
        console.log(popelyfka)
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let find = popelyfkaArr.find(function (element) {
    return element.sizeLeg === 36
})
console.log(find);