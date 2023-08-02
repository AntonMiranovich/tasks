// 16. *Вычислите сумму массива чисел статичного массива
//используя рекурсию

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function sum(arroy) {
  return arroy.length !== 0 ? arroy[0] + sum(arroy.slice(1)) : 0;
}

console.log(sum(arr));
