// const body = document.body
// const h1 = document.createElement('h1')
// h1.textContent = 'Counter'
// body.appendChild(h1)
// const input = document.createElement('input')
// input.setAttribute('type', 'number')
// input.setAttribute('id', 'counter')
// input.setAttribute('value', '0')
// input.style.width = '100px'
// input.style.textAlign = 'center'
// input.style.color = 'gray'
// body.appendChild(input)
// const incrementButton = document.createElement('button')
// incrementButton.textContent = '+'
// body.appendChild(incrementButton)
// const decrementButton = document.createElement('button')
// decrementButton.textContent = '-'
// body.appendChild(decrementButton)
// const resetButton = document.createElement('button')
// resetButton.textContent = 'Сбросить'
// body.appendChild(resetButton)
// const buttons = document.querySelectorAll('button')
// buttons.forEach((button) => {
//     button.style.margin = '10px'
// })
// function updateCounterColor() {
//     const value = parseInt(input.value)
//     input.style.color = value > 0 ? 'green' : value < 0 ? 'red' : 'gray'
// }
// incrementButton.addEventListener('click', () => {
//     input.value = parseInt(input.value) + 1
//     updateCounterColor()
// })
// decrementButton.addEventListener('click', () => {
//     input.value = parseInt(input.value) - 1
//     updateCounterColor()
// })
// resetButton.addEventListener('click', () => {
//     input.value = 0
//     updateCounterColor()
// })
// updateCounterColor()