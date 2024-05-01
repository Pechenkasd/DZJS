const boxGame = document.querySelector('.box-game')
const message = document.querySelector('#message')

// function getColor() {
//     let d = '#'
//     const colorInt = '0123456789ABCDEF'
//     for (let i = 0; i <= colorInt.length - 6; i++) {
//         d += Math.floor(Math.random() * colorInt[i]).toString(16).padStart(6, '0')
//     }
//     return d
// }

// boxGame.addEventListener('click', () => {
//     boxGame.style.backgroundColor = getColor()
//     if (getColor().includes('F')) {
//         message.innerText = 'Игра окочена'
//     }
// })

const randomColor = () => { return '#' + Math.floor(Math.random() * 16777215).toString(16) }
boxGame.addEventListener('click', () => {
    boxGame.style.backgroundColor = randomColor()
    if (randomColor().includes('f')) return message.innerText = 'Игра окончена'
})