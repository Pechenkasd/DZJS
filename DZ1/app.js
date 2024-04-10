// let name = prompt('Введите своё имя');
// let surname = prompt('Введите свою фамилию');
// alert('Здравствуйте, ' + name + ' ' + surname)

// function capitalizeFirstLetter(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// name = capitalizeFirstLetter(name);
// surname = capitalizeFirstLetter(surname);

// console.log(name, surname);
//Очень хотелось так написать (и да тут нет проверки на null или undefined) но...
// let name = prompt('Введите своё имя');
// let surname = prompt('Введите свою фамилию');
// alert('Здравствуйте, ' + name + ' ' + surname)
// if (name[0].toLowerCase() || surname[0].toLowerCase()) {
//     console.log('Здравствуйте, ' + name[0].toUpperCase() + name.slice(1) + ' ' + surname[0].toUpperCase() + surname.slice(1))
// }
Svetofor
let svetofor = prompt('Светофор');
if (svetofor === 'Красный') {
    console.log('Стой!!!');
} else if (svetofor === 'yellow') {
    console.log('Жди!!!');
} else if (svetofor === 'green') {
    console.log('Вперед!!!');
}
