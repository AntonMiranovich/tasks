// Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6

let a = prompt('введите число')

let b = Math.round(a / 100)
let c = Math.round((a % 100) / 10)
let d = ((a % 100) % 10)

console.log('Сумма цифр = ' + (b + c + d) + ' Произведение цифр = ' + (b * c * d));
