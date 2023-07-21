// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach

const n = prompt("колл эл");
let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt("насвание эл"));
}

// let arr2 = [];
// arr.forEach(function (el) {
//   !isNaN(el) ? arr2.push(el) : null;
// });
// console.log(arr.length == arr2.length ? true : false);

const result = arr.every(function (el) {
  return !isNaN(el) ? true : false;
});
console.log(result);
