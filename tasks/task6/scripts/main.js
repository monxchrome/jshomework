//Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let min = (a, b, c) => {
    if (a < b && a < c || a === b && a < c || a === c && a < b || a === b && a === c) {
        return a
    } else if (b < a && b < c || b === a && b < c || b === c && b < a) {
        return b
    } else if (c < a && c < b || c === a && c < b || c === b && c < a) {
        return c
    }
}

min(1,2,3)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let max = (a, b, c) => {
    if (a > b && a > c || a === b && a > c || a === c && a > b || a === b && a === c) {
        return a
    } else if (b > a && b > c || b === a && b > c || b === c && b > a) {
        return b
    } else if (c > a && c < b || c === a && c > b || c === b && c > a) {
        return c
    }
}

max(1,2,3)

// - створити функцію яка повертає найбільше число з масиву

let arr = [15, 20, 1, 33, 78, 77, 2]

let arrMax = (arr) => {
    let num = arr[0];
    for (const arrElement of arr) {
        if (arrElement > num) {
            num = arrElement;
        }
    }
    return num
}

// - створити функцію яка повертає найменьше число з масиву

let arrMin = (arr) => {
    let num = arr[0];
    for (const arrElement of arr) {
        if (arrElement < num) {
            num = arrElement;
        }
    }
    return num
}

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arrPlus = (arr) => {
    let x = null;
    for (i = 0; i < arr.length; i++) {
        x += arr[i]
    }
    return x
}

// - Дано натуральное число n. Выведите все числа от 1 до n.

let natural = (n) => {
    for (let i = 0; i < n; i++) {
        const nElement = n[i];
        console.log(i + 1);
    }
}
natural(5)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let cel = (a, b) => {
    if (a < b) {
        for (let i = a; i < b; i++) {
            const aElement = a[i];
            console.log(i + 1)
        }
    } else if (a > b) {
        for (let i = a - 1; i >= b; i--) {
            const aElement = a[i];
            console.log(i)
        }
    }
}

cel(5,2)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let arr2 = [13, 12, 15]

let code = (arr, i) => {
    for (let j = 0; j < arr.length; j++) {
        let arrElement = arr[j];
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp
    }
}
code(arr2, 1);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let randArr = [0, 12, 14, 15, 0, -1, 7, 0, 19, 0, 3];

function rand(arr) {
    let arrMinus = arr.length;
    for (let i = 0; i < arrMinus; i++) {
        if (arr[i] === 0) {
            arr.push(0);
            arr.splice(i, 1);
            arrMinus--;
            i--;
        }
    }
    return arr;
}
rand(rand(randArr))

console.log(randArr)