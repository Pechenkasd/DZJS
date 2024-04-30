let tag = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
let tagSort = {}
tag.map(tag => {
    if (tagSort[tag]) {
        tagSort[tag]++
    } else {
        tagSort[tag] = 1
    }
})
let sortTagObj = Object.entries(tagSort).sort((a, b) => a[1] - b[1])
console.log(sortTagObj)

function sortInitial(surname, name, patronymic) {
    let Initcial = `${surname} ${name[0]}.${patronymic[0]}`
    return Initcial
}
console.log(sortInitial('Kushparenko', 'Ioann', 'Konstantinovich'))
// function getNameBook(arr) {
//     let arr1 = arr.filter((book) => book.toLowerCase().includes('y'))
//     let arr2 = arr.filter((book) => !book.toLowerCase().includes('y'))
//     return console.log(arr1, arr2)
// }
// getNameBook('Chehow', 'Dostoevsky', 'Tolstyi', 'Pushkin', 'Esenin')
let users = {
    usersArray: [
        { name: 'Jonn', birthDate: '2000-11-23' },
        { name: 'Lymaza', birthDate: '2004-05-16' },
        { name: 'Jaldauz', birthDate: '1971-12-31' },
        { name: 'Aidana', birthDate: '2000-06-01' },
        { name: 'Mishail', birthDate: '1985-07-07' },
    ]
}
users.usersArray.map(user => {
    console.log(`Пользователь ${user.name} родился ${user.birthDate}`)
})