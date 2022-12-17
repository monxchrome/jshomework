// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

for (const simpson of simpsons) {
    let div = document.createElement('div');
    div.classList.add('member');

    let name = document.createElement('h3');
    name.innerText = `Name: ${simpson.name}`;

    let surname = document.createElement('h3');
    surname.innerText = `Surname: ${simpson.surname}`;

    let age = document.createElement('h3');
    age.innerText = `Age: ${simpson.age}`;

    let info = document.createElement('p');
    info.innerText = `Info: ${simpson.info}`

    let photo = document.createElement('img');
    photo.setAttribute('src', `${simpson.photo}`);

    document.body.appendChild(div);
    div.append(name, surname, age, info, photo);
}

// Цикл в циклі

// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// iter.js

// ------------------
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let new_div = document.createElement('div');
new_div.classList.add('wrap', 'collapse', 'alpha', 'beta');
document.body.appendChild(new_div);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// template.js

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const value of coursesAndDurationArray) {
    let div = document.createElement('div');
    let title = document.createElement('h3');
    title.innerText = `Title: ${value.title}`;
    let m_dur = document.createElement('p');
    m_dur.innerText = `Month Duration: ${value.monthDuration}`;

    document.body.appendChild(div);
    div.append(title, m_dur);
}

// - Є масив
let coursesAndDurationArray_v2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const value of coursesAndDurationArray_v2) {
    let div = document.createElement('div');
    div.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `Heading: ${value.title}`;

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `Description: ${value.monthDuration}`

    document.body.appendChild(div);
    div.append(h1, p);
}

// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let magic = document.createElement('button');
magic.classList.add('magic')
magic.setAttribute('id', 'text');
document.body.appendChild(magic);

let q = document.getElementById('text');
q.onclick = function () {
    q.remove();
}

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form = document.createElement('form');
let input = document.createElement('input');
let button_send = document.createElement('button');

form.name = 'f1';
input.type = 'number';
input.name = 'age';
button_send.classList.add('button');
button_send.setAttribute('id', 'b1');
button_send.innerText = 'send';

document.body.appendChild(form);
form.appendChild(input);
document.body.appendChild(button_send)

let f1 = document.forms.f1;

let qb = document.getElementById('b1');
f1.age.value = 13;
console.log(typeof +f1.age.value)
qb.onclick = function () {
    if (+f1.age.value <= 18) {
        console.error('Your age must be 18+');
    } else {
        let div = document.createElement('div');
        let h1 = document.createElement('h1');
        h1.innerText = 'Welcome';
        document.body.appendChild(div);
        div.appendChild(h1);
    }
}

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let div1 = document.createElement('div');
let input_r = document.createElement('input');
let input_y = document.createElement('input');
let input_v = document.createElement('input');
let b2 = document.createElement('button');

input_r.setAttribute('id', 'ryadki');
input_r.setAttribute('type', 'number');
input_y.setAttribute('id', 'yacheiki');
input_y.setAttribute('type', 'number');
input_v.setAttribute('id', 'vmist');
input_v.setAttribute('type', 'text');
b2.setAttribute('id', 'b2');
b2.classList.add('b2');
div1.classList.add('wave')

document.body.appendChild(div1);
div1.append(input_r, input_y, input_v, b2);

//
input_r.value = 5;
input_y.value = 5;
input_v.value = 'hello';
//

let qb2 = document.getElementById('b2');

let f_div = document.createElement('div')
let m_div_r = document.createElement('div')
let m_div_y = document.createElement('div')
m_div_r.classList.add('mother_r')
m_div_y.classList.add('mother_y')
f_div.classList.add('f_div')
document.body.appendChild(f_div);
f_div.append(m_div_r, m_div_y);

qb2.onclick = function () {
    i = 0
    while (i < +input_r.value) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.innerText = input_v.value;
        div.classList.add('border1');
        m_div_r.appendChild(div)
        div.appendChild(p);
        i++
    }
    n = 0
    while (n < +input_y.value) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.innerText = input_v.value;
        div.classList.add('border2');
        m_div_y.appendChild(div)
        div.appendChild(p);
        n++
    }
}

