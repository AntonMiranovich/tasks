// Пользователь вводит 6 значений и распределяет
// их поровну между 2 массивами.
// Cоздать новый массив, добавить туда значения всех массивов.
//  Spread

const n = 6;
let arr = [];
let arr2 = [];

for (let i = 0; i < n; i++) {
  i < n / 2 ? arr.push(prompt()) : arr2.push(prompt());
}

const result=[...arr,...arr2]
console.log(result);