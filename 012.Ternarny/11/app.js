// Напишите программу, которая находит полное число метров по заданному числу
// сантиметров. Добавить проверку на ввод только чисел
// 345 -> 3
// 100 -> 1


let a = prompt('Введите число');



if (isNaN(a)) {
    console.log('Некоректный ввод');
} else {
    a = +a
    console.log(Math.round(a / 100));
}