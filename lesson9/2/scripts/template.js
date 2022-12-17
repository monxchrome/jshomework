// - Є масив:
let site = ['Main','Products','About us','Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає
// його до блоку .menu
// Завдання робити через цикли.

let q = document.getElementsByClassName('menu')[0];

for (const value of site) {
    let li = document.createElement('li');
    li.innerText = value
    q.appendChild(li)
}