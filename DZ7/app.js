const userNumber = document.querySelector('#userNumber')
const chekButton = document.querySelector('#checkButton')
const message = document.querySelector('#message')

const randomNumber = Math.floor(Math.random() * 100) + 1
const letNum = 0
chekButton.addEventListener('click', () => {
    if (isNaN(userNumber.value) || userNumber.value.trim() < 1 || userNumber.value.trim() > 100) {
        alert('Введите число от 1 до 100 и нажмите проверить')
    } else {
        const clickCounter = letNum++
        console.log(`Количество кликов на кнопку: ${clickCounter}`)
        let userNumberValue = parseInt(userNumber.value)
        if (userNumberValue > randomNumber) {
            message.style.color = "red"
            message.innerText = 'Загаданное число меньше'
        } else if (userNumberValue < randomNumber) {
            message.style.color = "green"
            message.innerText = 'Загаданное число больше'
        } else {
            message.innerText = `Вы угадали число!!! c - (${clickCounter} попыток)`
        }
    }
})