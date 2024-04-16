// // Cредняя арифметическая только положительных чисел
let calcSortNumber = (arr) => {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            sum += arr[i];
            count++;
        }
    }
    return sum / count;
}
console.log(calcSortNumber([2, -78, 45, 4, -7, -6, -10, 26, 30, 8]))
let calcSquaredEvenly = (numArr) => {
    let sum = 0
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 === 0) {
            sum += numArr[i] ** 2
        }
    }
    return sum
}
console.log(calcSquaredEvenly([2, 3, 4, 5, 6, 7, 8, 9,]));
let textSort = (txtSort) => {
    let result = []
    for (let i = 0; i < txtSort.length; i++) {
        if (txtSort[i].toLowerCase().includes('a') || txtSort[i].toLowerCase().includes('t')) {
            result.push(txtSort[i])
        }
    }
    return result
}
console.log(textSort(['apple', 'sony', 'text']))