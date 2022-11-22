let sumArr1 = [1,2,3,4];
let sumArr2 = [5,6,7,8];

let newSumArr = [];

function sumArr (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {

        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                let x = arr1[i] += arr2[j]
                newSumArr.push(x);
                console.log(newSumArr)
            }
        }
    }
    return arr1 + arr2
}

console.log(sumArr(sumArr1, sumArr2));