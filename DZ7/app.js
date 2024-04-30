const userNumber = document.querySelector('#userNumber')
const checkButton = document.querySelector('#checkButton')
const message = document.querySelector('#message')

const randomNumber = Math.floor(Math.random() * 100) + 1
let letNum = 0
checkButton.addEventListener('click', () => {
    if (isNaN(userNumber.value) || userNumber.value.trim() < 1 || userNumber.value.trim() > 100) {
        alert('Введите число от 1 до 100 и нажмите проверить')
    } else {
        letNum++
        let userNumberValue = userNumber.value
        if (userNumberValue > randomNumber) {
            message.style.color = "red"
            message.innerText = 'Загаданное число меньше'
        } else if (userNumberValue < randomNumber) {
            message.style.color = "green"
            message.innerText = 'Загаданное число больше'
        } else {
            message.innerText = `Вы угадали число!!! c - (${letNum} попыток)`
        }
    }
})