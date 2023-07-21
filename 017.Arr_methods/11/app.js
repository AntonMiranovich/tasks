// На входе n – количество элементов массива.
// Далее производится заполнение
// массива с клавиатуры.
//  Выведите произведение всех элементов массива.
// Проверки на ввод только чисел.
//  Использовать forEach, reduce

const n = prompt();
let arr = [];

for (let i = 0; i < n; i++) {
  let element = prompt();
  if (!isNaN(element)) {
    arr.push(element);
  }
}

let sum = 1;
arr.forEach(function (el) {
  sum *= el;
});

console.log(sum);

// const num = arr.reduce(function (sum, el) {
//   if (!isNaN(el)) {
//     return sum * el;
//   }
// }, 1);

// console.log(num);
