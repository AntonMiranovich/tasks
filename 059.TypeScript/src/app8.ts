// 8. Создайте переменную str и присвойте ей строковое значение. Используя цикл for,
// выведите каждый второй символ строки.

const strTask8: string = "antonMiranovich"

for (let i = 1; i < strTask8.length; i++) {
  i % 2 != 0 ? console.log(strTask8[i]) : null;
}
