// 3. Вычислите сумму массива целых(положительные)
// чисел статичного массива
// используя рекурсию

const arr = [-0.21, 0, 2, 3, -4, 5.4, 6, -7];

function isValid(arr) {
  let res = arr.filter(function (el) {
    if (el > 0 && el == Math.round(el)) return true;
  });
  return res;
}

function doSum(arr) {
  return arr.length == 1 ? arr[0] : arr[0] + doSum(arr.slice(1));
}

const valid = isValid(arr);
const result = doSum(valid);

console.log(result);
