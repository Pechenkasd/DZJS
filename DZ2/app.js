// let arr =  [34, 65, 67, 89,8,9,23,21,10,23,28]
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         console.log(arr[i])
//         continue
//     }
// }
let objSinema = {
    janr: {
        name: "comedy",
        actors:["Tom Cruise", "Will Smith"],
    },
    date:{
        day:"01.01.2020",
        time:"two hours and 30 minutes",
    },
    tickets:{
        price: ["10$","15$"],
        measurement:["2D","3D"]
    }
}
let num = prompt("Введите число от 1 до 15")
switch (num) {
    case "1":
        console.log("I")
        break;
    case "2":
        console.log("II")
        break;
    case "3":
        console.log("III")
        break;
    case "4":
        console.log("IV")
        break;
    case "5":
        console.log("V")
        break;
    case "6":
        console.log("VI")
        break;
    case "7":
        console.log("VII")
        break;
    case "8":
        console.log("VIII")
        break;
    case "9":
        console.log("IX")
        break;
    case "10":
        console.log("X")
        break;
    case "11":
        console.log("XI")
        break;
    case "12":
        console.log("XII")
        break;
    case "13":
        console.log("XIII")
        break;
    case "14":
        console.log("XIV")
        break;
    case "15":
        console.log("XV")
        break;
    default:
        console.log("Такого числа нет")
        break;
}