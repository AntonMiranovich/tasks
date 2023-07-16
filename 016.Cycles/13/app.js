// Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму всех положительных элементов массива циклом for of

const arr = [-15, 0, 8, 4, -10, 3];
let result = 0;


for (el of arr) {
  el > 0 ? (result += el) : null;
}
console.log(result);
