// 16. *Вычислите сумму массива чисел статичного массива
//используя рекурсию

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function sumArr(arr) {
  return arr.length !== 0 ? arr[0] + sumArr(arr.slice(1)) : 0;
}

const result = sumArr(arr);
console.log(result);
