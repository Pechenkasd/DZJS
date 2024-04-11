//1
// let tag = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
// let objTag = {}
// for(let i = 0; i < tag.length; i++){
//     if(!objTag[tag[i]]){
//         objTag[tag[i]] = 1
//     }
//     else{
//         objTag[tag[i]] += 1
//     }
// }
// console.log(objTag)
//проверка на похожие элементы

//2
// let arr = [2, 3, 4, 5, 234, 654, 45, 789, 876]
// let sum = 0
// for (let elements of arr) {
//     sum += elements
// }
// let avg = sum / arr.length
// console.log(avg)
//3
// let objBook = {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     year: 1925,
//     genre: 'Fiction',
//     pages: 218
// }
// for(let key in objBook){
//     console.log(`${key}: ${objBook[key]}`)
// }
//4
// let massive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < massive.length; i++) {
//     if (massive[i] % 2 == 0) {
//         massive.splice(i, 1)
//     }
// }
// console.log(massive)