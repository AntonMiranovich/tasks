// На входе пустой объект, массив, n – количество
//  элементов массива. Далее
// производится заполнение массива с клавиатуры.
// Добавить в объект ключ “sum”,
// значение – сумма элементов массива(reduce).
// Добавить проверки на ввод чисел

const obj = {};
const arr = [];
const n = +prompt("Введите количество эл массива");

for (let i = 0; i < n; i++) {
  let a = prompt("введите число элемента массива");
  !isNaN(a) ? arr.push(+a) : null;
}

let result = arr.reduce(function (sum, el) {
  return sum + el;
}, 0);

obj.sum = result;

console.log(obj);
