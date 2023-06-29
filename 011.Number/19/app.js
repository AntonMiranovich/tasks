// Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания

// (a * x) * (a * x) + b * x + c = 0
// x * (a * a) + b * x + c = 0
// x * (a * a + b) + c = 0
// x * (a * a + b) = -c
// x = -c / (a * a + b)

// let a = +prompt('Введите a')
// let b = +prompt('Введите b')
// let c = +prompt('Введите c')

// let x = (-c / (a * a + b))

// console.log('x равен    ' + x);

let a = +prompt("введите значение a");

let b = +prompt(`введите значение b`);

let c = prompt("введите значение c");

let x = (b ** 2 - 4 * a * c)

if (b > a) {
    const x1 = (-b + Math.sqrt(D) / (2 * a))
    const x2 = (-b - Math.sqrt(D) / (2 * a))
    if (x1 > x2) {
        console.log(x1, x2);
    } else {
        console.log(x2, x1);
    }
} else if (D === 0) {
    console.log(-b / (2 * a));
} else if (D < 0) {
    console.log('НЕТ КОРНЕЙ');
}