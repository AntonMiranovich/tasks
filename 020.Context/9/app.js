// 9. На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

const n = +prompt("n");
const c = +prompt("Введите количство элементов массива");
const arr = [];

for (let i = 0; i < c; i++) {
  arr.push(+prompt("элементы массива"));
}

function chackValue(arr, n) {
  let value = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      value.push(arr[i]);
    }
  }
  return value;
}

const result = chackValue(arr, n);
console.log(result);
