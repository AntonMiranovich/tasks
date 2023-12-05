// 1. Напишите программу, которая проверяет, является ли заданное число num
// четным или нечетным.
let num = +prompt("Введите число");
//1
if (!isNaN(num)) {
    if (num % 2 == 0) {
        console.log("четное");
    }
    else {
        console.log("не четное");
    }
}
else {
    console.log("вы ввели не число");
}
//2
!isNaN(num)
    ? num % 2 == 0
        ? console.log("четное")
        : console.log("не четное")
    : console.log("вы ввели не число");
//3
console.log(!isNaN(num) ? (num % 2 == 0 ? "четное" : "не четное") : "вы ввели не число");
