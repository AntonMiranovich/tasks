// 1. Напишите программу, которая проверяет, является ли заданное число num
// четным или нечетным.

let num: number = +prompt("Введите число");

//1
if (!isNaN(num)) {
  if (num % 2 == 0) {
    console.log("четное");
  } else {
    console.log("не четное");
  }
} else {
  console.log("вы ввели не число");
}

//2
!isNaN(num)
  ? num % 2 == 0
    ? console.log("четное")
    : console.log("нечетное")
  : console.log("вы ввели нечисло");

//3

console.log(
  !isNaN(num) ? (num % 2 == 0 ? "четное" : "нечетное") : "вы ввели не число"
);
