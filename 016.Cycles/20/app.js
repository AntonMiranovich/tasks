// Пользователь вводит многозначное число. Необходимо вставить двоеточие
// между двумя нечетными числами. Работать с числом как с массивом.
// Использовать for
// 55639217 -> 5:563:921:7.

const num = "55639217".split('');
let result = [];

for (let i = 0; i < num.length; i++) {
  if (i == 0) {
    result.push(num[i]);
    continue;
  }

//   let last_el = result[result.length - 1];

  if (num[i] % 2 !== 0 && num[i-1] % 2 !== 0) {
    result.push(":", num[i]);
    continue;
  }
  result.push(num[i])
}

console.log(result.join(''));