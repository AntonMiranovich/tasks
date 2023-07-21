// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

const n = prompt("колл эл");
let arr = [];

for (let i = 0; i < n; i++) {
  let a = prompt("насвание эл");
  !isNaN(a) ? arr.push(a) : null;
}


let sum = 0;
arr.forEach(function (el) {
  sum += +el;
});
console.log(sum);


let result = arr.reduce(function (sum, el) {
  return sum + +el;
}, 0);
console.log(result);
